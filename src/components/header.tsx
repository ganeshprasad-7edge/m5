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
                        <button className="flex border-2 m-2 p-1 rounded-sm">
                        <img src={filterIcon} alt="" className="mr-0.5"/>
                        <div className="relative">
                            <div className="absolute rounded-full px-1.5 bg-[#F76659] text-white top-[-15px] right-[-15px] ">1</div>
                        Filter
                        </div>
                        </button>
                        <button className="flex border-2 m-2 p-1 rounded-sm">
                        <img src={exportIcon} alt="" className="mr-0.5" />
                        Export
                        </button>
                        <Link to="/add">
                            <button className="flex m-2 p-1 rounded-[6px] bg-[#4094F7] text-white border-2">
                            <img src={addIcon} alt="" />
                            Add Product
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}
