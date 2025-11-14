import Image from "next/image"

export async function fetchProducts() {
    const url = 'https://fakestoreapi.com/products'
    const response = await fetch(url)
    return response.json()
}
export default async function ProductsPage() {
    const products = await fetchProducts()
    return <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold mb-6 text-center">Products</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {
                products.map(product => {
                    return <section key={product.id}>
                        <h2>{product.id}</h2>
                        <h3>{product.title}</h3>
                        <Image
                            src={product.image}
                            alt={product.title}
                            width={100}
                            height={100}
                            className="w-full h-100 w-100 object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out"
                            loading="lazy"
                        />
                    </section>
                })
            }
        </div>
    </div>
}
