import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import TopBar from './topbar'
import Header from './header'
import Skeleton from './skeleton'
import DeleteModal from './DeleteModal'
import NoData from './NoData'
import ProductCard from './ProductCard'
import { useToast } from '../context/ToastContext'

import deleteIcon from '/delete.svg'
import editIcon from '/edit.svg'
import arrowLeftIcon from '/arrow-left.png'
import arrowRightIcon from '/arrow-right.png'

interface Product {
  id: number
  title: string
  price: number
  description: string
  category: {
    id: number
    name: string
    image: string
  }
  images: string[]
}

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([])
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [productToDelete, setProductToDelete] = useState<Product | null>(null)
  const [isDeleting, setIsDeleting] = useState(false)
  const [selectedProducts, setSelectedProducts] = useState<number[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [itemsPerPage] = useState(10)

  const { showToast } = useToast()

  // Initial load: Get total product count and page 1
  useEffect(() => {
    const initialize = async () => {
      setIsLoading(true)
      try {
        const totalResponse = await fetch('https://api.escuelajs.co/api/v1/products')
        const allData: Product[] = await totalResponse.json()
        const totalCount = allData.length
        setTotalPages(Math.ceil(totalCount / itemsPerPage))

        await fetchPage(1)
      } catch (error) {
        console.error(error)
        showToast('Failed to load products', 'error')
      } finally {
        setIsLoading(false)
      }
    }

    initialize()
  }, [])

  const fetchPage = async (page: number) => {
    setIsLoading(true)
    try {
      const offset = (page - 1) * itemsPerPage
      const response = await fetch(`https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${itemsPerPage}`)
      if (!response.ok) throw new Error('Failed to fetch products')
      const data: Product[] = await response.json()
      setProducts(data)
      setCurrentPage(page)
    } catch (error) {
      console.error(error)
      showToast('Failed to fetch products', 'error')
    } finally {
      setIsLoading(false)
    }
  }

  const handleDeleteClick = (product: Product) => {
    setProductToDelete(product)
    setIsDeleteModalOpen(true)
  }

  const handleDeleteConfirm = async () => {
    if (!productToDelete) return

    setIsDeleting(true)
    try {
      const response = await fetch(`https://api.escuelajs.co/api/v1/products/${productToDelete.id}`, {
        method: 'DELETE'
      })

      if (response.ok) {
        showToast('Product deleted successfully', 'success')
        fetchPage(currentPage)
      } else {
        showToast('Failed to delete product', 'error')
      }
    } catch (error) {
      console.error(error)
      showToast('Error deleting product', 'error')
    } finally {
      setIsDeleting(false)
      setIsDeleteModalOpen(false)
      setProductToDelete(null)
    }
  }

  const handleDeleteCancel = () => {
    setIsDeleteModalOpen(false)
    setProductToDelete(null)
  }

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      const allProductIds = products.map((product) => product.id)
      setSelectedProducts(allProductIds)
    } else {
      setSelectedProducts([])
    }
  }

  const handleSelectProduct = (productId: number, isChecked: boolean) => {
    if (isChecked) {
      setSelectedProducts([...selectedProducts, productId])
    } else {
      setSelectedProducts(selectedProducts.filter(id => id !== productId))
    }
  }

  const handlePageChange = (page: number) => {
    if (page !== currentPage) {
      fetchPage(page)
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 1) fetchPage(currentPage - 1)
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) fetchPage(currentPage + 1)
  }

  return (
    <div className="w-full flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-20 bg-white lg:left-[240px] xl:left-[280px]">
        <TopBar />
        <Header />
      </div>

      <div className="pt-[130px]">
        {isLoading ? (
          <Skeleton />
        ) : products.length > 0 ? (
          <div className='px-3 xs:px-4 sm:px-8 lg:pl-12 lg:pr-8 pt-2'>
            {/* Desktop View */}
            <div className="hidden lg:block">
              <table className="w-full relative">
                <thead className="sticky top-[140px] bg-white z-10 shadow-sm">
                  <tr className="w-full flex justify-between text-[#84919A] text-sm border-b-2 border-[#E5E9EB] pt-3 pb-1.5 bg-white">
                    <th className="w-[5%]">
                      <input
                        type="checkbox"
                        onChange={handleSelectAll}
                        checked={selectedProducts.length > 0 && selectedProducts.length === products.length}
                      />
                    </th>
                    <th className="text-left  w-[10%]">IMAGE</th>
                    <th className="text-left  w-[20%]">TITLE</th>
                    <th className="text-left w-[25%]">DESCRIPTION</th>
                    <th className="text-right w-[10%]">PRICE</th>
                    <th className="text-center w-[10%]">ACTIONS</th>
                  </tr>
                </thead>
                <tbody className="w-full">
                  {products.map((product) => (
                    <tr key={product.id} className="flex justify-between items-center border-b-2 border-[#E5E9EB]">
                      <td className="w-[5%] flex items-center justify-center">
                        <input
                          type="checkbox"
                          className="cursor-pointer"
                          checked={selectedProducts.includes(product.id)}
                          onChange={(e) => handleSelectProduct(product.id, e.target.checked)}
                        />
                      </td>
                      <td className="py-2  w-[10%] text-left">
                        <img src={product.category.image} alt="" className="w-16 object-cover rounded-lg" />
                      </td>
                      <td className="py-2  w-[20%] text-left">
                        {product.title}
                      </td>
                      <td className="py-2 w-[25%] text-left" title={product.description}>
                        {product.description.slice(0, 100)}
                        {product.description.length > 100 ? '...' : ''}
                      </td>
                      <td className="py-2 w-[10%] text-right">$ {product.price}</td>
                      <td className="py-2  w-[10%] text-center">
                        <div className="flex gap-5 justify-center">
                          <img
                            src={deleteIcon}
                            alt="Delete"
                            className="cursor-pointer"
                            onClick={() => handleDeleteClick(product)}
                          />
                          <Link to={`/update/${product.id}`}>
                            <img src={editIcon} alt="Edit" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile View */}
            <div className="lg:hidden">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onDeleteClick={handleDeleteClick}
                  isSelected={selectedProducts.includes(product.id)}
                  onSelectChange={handleSelectProduct}
                />
              ))}
            </div>
          </div>
        ) : (
          <NoData />
        )}

        {/* Pagination */}
        {products.length > 0 && (
          <div className="px-3 xs:px-4 sm:px-8 lg:pl-12 lg:pr-8 pt-8 pb-5 flex flex-wrap justify-between">
            <button
              className={`flex border-2 rounded-md py-1 px-2 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              <img src={arrowLeftIcon} alt="" className="mr-2" />
              Previous
            </button>
            <div className="flex flex-wrap justify-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).slice(0, 5).map((page) => (
                <button
                  key={page}
                  className={`py-1 px-4 rounded-md ${currentPage === page ? 'bg-[#F5F9FF] text-[#4094F7]' : 'hover:text-[#4094F7] hover:bg-[#F5F9FF]'}`}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </button>
              ))}
            </div>
            <button
              className={`flex border-2 rounded-md py-1 px-2 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next
              <img src={arrowRightIcon} alt="" className="ml-2" />
            </button>
          </div>
        )}

        {/* Delete modal */}
        <DeleteModal
          isOpen={isDeleteModalOpen}
          onClose={handleDeleteCancel}
          onDelete={handleDeleteConfirm}
          productName={productToDelete?.title || ''}
          isLoading={isDeleting}
        />
      </div>
    </div>
  )
}
