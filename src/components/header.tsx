import { Link, useLocation } from "react-router-dom";
import filterIcon from '/filter.svg';
import exportIcon from '/export.svg';
import addIcon from '/add.svg';

export default function Header() {
    const location = useLocation();
    const isMainRoute = location.pathname === '/';
    const isAddRoute = location.pathname === '/add';

    return (
        <div className="px-3 xs:px-4 sm:px-8 lg:pl-12 lg:pr-8 pt-4 xs:pt-6 sm:pt-8 pb-2">
            <div className="border-b-2 border-[#E5E9EB] flex justify-between items-center">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">{isMainRoute ? 'Products' : isAddRoute ? 'Add Products' : 'Update Products'}</h1>
                {isMainRoute && (
                    <div className="flex flex-wrap gap-1 xs:gap-2">
                        <button className="flex border-2 m-1 xs:m-2 p-1 rounded-lg">
                            <img src={filterIcon} alt="" className="mr-1 ml-1"/>
                            <div className="relative pr-2">
                                <div className="absolute rounded-full w-4 h-4 bg-[#F76659] text-white text-xs flex items-center justify-center top-[-8px] right-[-8px]">1</div>
                                <span className="hidden xs:inline">Filter</span>
                            </div>
                        </button>
                        <button className="flex border-2 m-1 xs:m-2 py-1 pr-2 xs:pr-3 rounded-lg">
                            <img src={exportIcon} alt="" className="mx-1" />
                            <span className="hidden xs:inline">Export</span>
                        </button>
                        <Link to="/add">
                            <button className="flex justify-center items-center m-1 xs:m-2 py-1 pr-2 xs:pr-3 rounded-lg bg-[#4094F7] text-white border-2 text-sm xs:text-md">
                                <img src={addIcon} alt="" className="mx-1" />
                                <span className="hidden xs:inline">Add Product</span>
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}
