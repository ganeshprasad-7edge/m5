
export default function Header() {
    return (
        <div className="px-8 pt-8 pb-2">
            <div className="border-b-2 border-[#E5E9EB] flex justify-between items-center">
                <h1 className="text-3xl font-bold ">Products</h1>
                <div className="flex">
                    <button className="flex border-2 m-2 p-1 rounded-sm">
                    <img src="filter.svg" alt="" className="mr-0.5"/>
                    <div className="relative">
                        <div className="absolute rounded-full px-1.5 bg-[#F76659] text-white top-[-15px] right-[-15px] ">1</div>
                    Filter
                    </div>
                    </button>
                    <button className="flex border-2 m-2 p-1 rounded-sm">
                    <img src="export.svg" alt="" className="mr-0.5" />
                    Export
                    </button>
                    <button className="flex m-2 p-1 rounded-[6px] bg-[#4094F7] text-white border-2">
                    <img src="add.svg" alt="" />
                    Add Product
                    </button>
                </div>
            </div>
        </div>
    )
}