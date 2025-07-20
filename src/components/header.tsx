import { Link, useLocation } from "react-router-dom";
import filterIcon from '/filter.svg';
import exportIcon from '/export.svg';
import addIcon from '/add.svg';

export default function Header() {
    const location = useLocation();
    const isMainRoute = location.pathname === '/';
    const isAddRoute = location.pathname === '/add';

    return (
        <div className="pl-12 pr-8 pt-8 pb-2">
            <div className="border-b-2 border-[#E5E9EB] flex justify-between items-center">
                <h1 className="text-3xl font-bold mb-2">{isMainRoute ? 'Products' : isAddRoute ? 'Add Products' : 'Update Products'}</h1>
                {isMainRoute && (
                    <div className="flex">
                        <button className="flex border-2 m-2 p-1 rounded-lg">
                            <img src={filterIcon} alt="" className="mr-1 ml-1"/>
                            <div className="relative pr-2">
                                <div className="absolute rounded-full w-4 h-4 bg-[#F76659] text-white text-xs flex items-center justify-center top-[-8px] right-[-8px]">1</div>
                                Filter
                            </div>
                        </button>
                        <button className="flex border-2 m-2 py-1 pr-3 rounded-lg">
                            <img src={exportIcon} alt="" className="mx-1" />
                            Export
                        </button>
                        <Link to="/add">
                            <button className="flex m-2 py-1 pr-3 rounded-lg bg-[#4094F7] text-white border-2 text-md">
                                <img src={addIcon} alt="" className="mx-1" />
                                Add Product
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}
