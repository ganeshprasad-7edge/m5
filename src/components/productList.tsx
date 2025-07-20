import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

import TopBar from './topbar'
import Header from './header'
import Skeleton from './skeleton'
import DeleteModal from './DeleteModal'
import NoData from './NoData'
import { useToast } from '../context/ToastContext'

import deleteIcon from '/delete.svg';
import editIcon from '/edit.svg';
import arrowLeftIcon from '/arrow-left.png';
import arrowRightIcon from '/arrow-right.png';

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
    const [products, setProducts] = useState([])
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
    const [productToDelete, setProductToDelete] = useState<Product | null>(null)
    const [selectedProducts, setSelectedProducts] = useState<number[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const { showToast } = useToast()
    const fetchList = async () => {
        try {
            const response = await fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=7')
            if (!response.ok) {
                throw new Error('Failed to fetch products')
            }
            const data = await response.json()
            console.log('data', data)
            return data
        } catch (error) {
            console.error('Error fetching products:', error)
            showToast('Failed to load products', 'error')
            return []
        }
    }
    
    const handleDeleteClick = (product: Product) => {
        setProductToDelete(product)
        setIsDeleteModalOpen(true)
    }
    
    const handleDeleteConfirm = async () => {
        if (!productToDelete) return
        
        try {
            const response = await fetch(`https://api.escuelajs.co/api/v1/products/${productToDelete.id}`, {
                method: 'DELETE'
            })
            
            if (response.ok) {
                // Remove the product from the list
                setProducts(products.filter((p: Product) => p.id !== productToDelete.id))
                showToast('Product deleted successfully', 'success')
            } else {
                showToast('Failed to delete product', 'error')
            }
        } catch (error) {
            console.error('Error deleting product:', error)
            showToast('Error deleting product', 'error')
        } finally {
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
            // Select all products
            const allProductIds = products.map((product: Product) => product.id)
            setSelectedProducts(allProductIds)
        } else {
            // Deselect all products
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
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            const value = await fetchList()
            setProducts(value)
            setIsLoading(false)
        }
        fetchData()
    }, [])
    return (
        <div className="w-full overflow-auto">
            <TopBar />
            <Header />
            {isLoading ? (
                <Skeleton />
            ) : products.length > 0 ? (
                <div className='pl-12 pr-8 pt-2'>
                <table className="w-full">
                    <thead>
                        <tr className="w-full flex justify-between text-[#84919A] text-sm border-b-2 border-[#E5E9EB] pt-3 pb-1.5">
                            <th className="w-[5%]">
                                <input 
                                    type="checkbox" 
                                    onChange={handleSelectAll}
                                    checked={selectedProducts.length > 0 && selectedProducts.length === products.length}
                                />
                            </th>
                            <th className="text-left  w-[5%]">IMAGE</th>
                            <th className="text-left  w-[20%]">TITLE</th>
                            <th className="text-left w-[30%]">DESCRIPTION</th>
                            <th className="text-right w-[5%]">PRICE</th>
                            <th className="text-left  w-[5%]">ACTIONS</th>
                        </tr>
                    </thead>    
                    <tbody className='w-full'>
                        {products.map((product: Product) => (
                            <tr key={product.id} className="flex justify-between items-center border-b-2 border-[#E5E9EB]">
                                {/* Added flex items-center to vertically align checkbox */}
                                <td className="w-[5%] flex items-center justify-center">
                                    <input 
                                        type="checkbox" 
                                        className='cursor-pointer' 
                                        checked={selectedProducts.includes(product.id)}
                                        onChange={(e) => handleSelectProduct(product.id, e.target.checked)}
                                    />
                                </td>
                                <td className="py-2  w-[5%] text-left">
                                    <img src={product.category.image} alt="" className="w-16 object-cover rounded-lg" /></td>
                                <td className="py-2  w-[20%] text-left">{product.title}</td>
                                {/* <td className="py-2 w-[30%] text-left">{product.description}</td> */}
                                <td className="py-2 w-[30%] text-left" title={product.description}>
                                    {product.description.slice(0,100)}
                                    {product.description.length > 100 ? '...' : ''}
                                </td>  
                                <td className="py-2 w-[5%] text-right">$ {product.price}</td>
                                <td className="py-2  w-[5%] text-left">
                                    <div className='flex justify-around'>
                                        <img 
                                            src={deleteIcon} 
                                            alt="Delete" 
                                            className="cursor-pointer" 
                                            onClick={() => handleDeleteClick(product)} 
                                        />
                                        <Link to={`/update/${product.id}`}>
                                            <img src={editIcon} alt=""  />
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            ) : <NoData />}
            { products.length > 6 ? (<div className='pl-12 pr-8 pt-8 pb-5 flex justify-between'>
                <button className='flex border-2 rounded-md py-1 px-2'>
                    <img src={arrowLeftIcon} alt="" className='mr-2' />
                    Previous
                </button>
                <div className='flex'>
                    <button className='py-1 px-4 rounded-md hover:text-[#4094F7] hover:bg-[#F5F9FF]'>
                        1
                    </button>
                    <button className='py-1 px-4 rounded-md hover:text-[#4094F7] hover:bg-[#F5F9FF]'>
                        2
                    </button>
                    <button className='py-1 px-4 rounded-md hover:text-[#4094F7] hover:bg-[#F5F9FF]'>
                        3
                    </button>
                    <button className='py-1 px-4 rounded-md hover:text-[#4094F7] hover:bg-[#F5F9FF]'>
                        ...
                    </button>
                    <button className='py-1 px-4 rounded-md hover:text-[#4094F7] hover:bg-[#F5F9FF]'>
                        8
                    </button>
                    <button className='py-1 px-4 rounded-md hover:text-[#4094F7] hover:bg-[#F5F9FF]'>
                        9
                    </button>
                    <button className='py-1 px-4 rounded-md hover:text-[#4094F7] hover:bg-[#F5F9FF]'>
                        10
                    </button>
                </div>
                <button className='flex border-2 rounded-md py-1 px-2'>
                    Next
                    <img src={arrowRightIcon} alt="" className='ml-2' />
                </button>
            </div>) : <div />
        }
        <DeleteModal 
            isOpen={isDeleteModalOpen}
            onClose={handleDeleteCancel}
            onDelete={handleDeleteConfirm}
            productName={productToDelete?.title || ''}
        />
        </div>
    )
}