'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react'

// Mock data array simulating products
const allProducts = [
    'Product 1',
    'Product 2',
    'Product 3',
    'Product 4',
    'Product 5',
    'Product 6',
    'Product 7',
    'Product 8',
    'Product 9',
    'Product 10',
]

// items per page
const pageSize = 3 

export default function Pagination() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const initialPage = Number(searchParams.get('page')) || 1

    const [page, setPage] = useState(initialPage)

    // Calculate the slice of products for the current page
    const pagedProducts = allProducts.slice(
        (page - 1) * pageSize,
        page * pageSize
    )

    const changePage = (newPage) => {
        // Ensure page is within total page count bounds
        if (newPage < 1 || newPage > Math.ceil(allProducts.length / pageSize)) {
            return
        }

        setPage(newPage)
        //
        router.push(`/products?page=${newPage}`, undefined, { shallow: true })
    }

    useEffect(() => {
        const currentPage = Number(searchParams.get('page')) || 1
        if (currentPage !== page) {
            setPage(currentPage)
        }
    }, [searchParams])

    return (
        <div>
            <h1>Paginated Product List</h1>
            <ul>
                {pagedProducts.map((product, index) => (
                    <li key={index}>{product}</li>
                ))}
            </ul>

            <button disabled={page <= 1} onClick={() => changePage(page - 1)}>
                Previous
            </button>
            <button
                disabled={page >= Math.ceil(allProducts.length / pageSize)}
                onClick={() => changePage(page + 1)}
            >
                Next
            </button>
            <p>Page {page} of {Math.ceil(allProducts.length / pageSize)}</p>
        </div>
    )
}
