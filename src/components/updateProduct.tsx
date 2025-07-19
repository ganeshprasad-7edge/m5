import { Link } from "react-router-dom";

import TopBar from './topbar'
import Header from './header'

export default function UpdateProduct() {
    return (
        <div className="w-full overflow-auto">
            <TopBar />
            <Header />
            <div className='pl-12 pr-8 pt-6'>
                <div className='w-[65%]'>
                    <div className='text-[#84919A] text-sm mb-1'>Product image</div>
                    <div className='flex flex-col gap-2 justify-center items-center border-2 border-dashed py-10'>
                        <h3>Drag and drop files</h3>
                        <button className='border-[#E5E9EB] border-2 py-1 px-2 rounded-md'>Browse</button>
                        <p className='text-[#84919A] text-sm'>Supported file types: jpg, png and jpeg  format</p>
                    </div>
                    <div className='flex items-center gap-6 mt-4 w-full'>
                        <div className='w-1/2'>
                            <h3>Title</h3>
                            <input type="text" placeholder="Enter product title" id="" className='border-2 border-[#E5E9EB] rounded-md h-14 w-full px-2' />
                        </div>
                        <div className='w-1/2'>
                            <h3>Price</h3>
                            <input type="number" placeholder="Enter product price" id="" className='border-2 border-[#E5E9EB] rounded-md h-14 w-full px-2'/>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <h3>Description</h3>
                        <input type="number" placeholder="Enter product description" id="" className='border-2 border-[#E5E9EB] rounded-md h-14 w-full px-2'/>
                    </div>
                    <div className='w-full mt-4'>
                        <div className='w-1/2'>

                            <Link to="/">
                                <button className="flexjustify-center p-1 rounded-lg bg-[#4094F7] text-white border-2 w-full h-12">
                                Update
                                </button>
                            </ Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}