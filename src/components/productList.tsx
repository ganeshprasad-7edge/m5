import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

import TopBar from './topbar'
import Header from './header'
import Skeleton from './skeleton'

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
    const fetchList = async () => {
        const response = await fetch('https://api.escuelajs.co/api/v1/products')
        const data = await response.json()
        console.log('data', data)
        return data
    }
    useEffect(() => {
        const fetchData = async () => {
            const value = await fetchList()
            setProducts(value)
        }
        fetchData()
    }, [])
    return (
        <div className="w-full overflow-auto">
            <TopBar />
            <Header />
            {products.length > 0 ? (
                <div className='pl-12 pr-8 pt-2'>
                <table className="w-full">
                    <thead>
                        <tr className="w-full flex justify-between text-[#84919A] text-sm border-b-2 border-[#E5E9EB] pt-3 pb-1.5">
                            <th className="w-[5%]"><input type="checkbox" /></th>
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
                                    <input type="checkbox" className='cursor-pointer' />
                                </td>
                                <td className="py-2  w-[5%] text-left">
                                    <img src={product.category.image} alt="" className="w-16 object-cover rounded-lg" /></td>
                                <td className="py-2  w-[20%] text-left">{product.title}</td>
                                {/* <td className="py-2 w-[30%] text-left">{product.description}</td> */}
                                <td className="py-2 w-[30%] text-left" title={product.description}>
                                    {product.description.slice(0,100)}
                                    {product.description.length > 100 ? '...' : ''}
                                </td>  
                                <td className="py-2 w-[5%] text-right">{product.price}</td>
                                <td className="py-2  w-[5%] text-left">
                                    <div className='flex justify-around'>
                                        <img src='delete.svg' alt=""  />
                                        <Link to="/update">
                                            <img src='edit.svg' alt=""  />
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            ) : <Skeleton/>}
            { products.length > 7 ? (<div className='pl-12 pr-8 pt-8 pb-5 flex justify-between'>
                <button className='flex border-2 rounded-md py-1 px-2'>
                    <img src="arrow-left.png" alt="" className='mr-2' />
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
                    <img src="arrow-right.png" alt="" className='ml-2' />
                </button>
            </div>) : <div />
}
        </div>
    )

}