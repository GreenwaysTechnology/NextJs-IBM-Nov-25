import Pagination from './components/Pagination'

// Server component
export default async function ProductsPage() {
  return (
    <main>
      {/* Pagination component handles client-side navigation */}
      <Pagination />
    </main>
  )
}
