import Link from 'next/link'

export default function ServerPagination({ currentPage, totalPages }) {
  return (
    <nav>
      <Link
        href={`/products?page=${currentPage - 1}`}
        disabled={currentPage <= 1}
      >
        Previous ||
      </Link>
      <Link
        href={`/products?page=${currentPage + 1}`}
        disabled={currentPage >= totalPages}
      >
          Next 
      </Link>
      <div>
        <span>Page {currentPage} of {totalPages}</span>
      </div>

    </nav>
  )
}
