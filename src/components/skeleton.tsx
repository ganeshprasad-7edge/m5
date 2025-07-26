export default function Skeleton() {
    return (
        <div className='px-3 xs:px-4 sm:px-8 lg:pl-12 lg:pr-8 pt-2'>
            {/* Desktop view skeleton */}
            <div className="hidden lg:block">
                <table className="w-full relative">
                    <thead className="sticky top-[140px] bg-white z-10 shadow-sm">
                        <tr className="w-full flex justify-between text-[#84919A] text-sm border-b-2 border-[#E5E9EB] pt-3 pb-1.5 bg-white">
                            <th className="w-[5%] flex items-center justify-center"><div className="h-4 w-4 bg-gray-200 animate-pulse rounded"></div></th>
                            <th className="text-left w-[10%]"><div className="h-4 w-12 bg-gray-200 animate-pulse rounded"></div></th>
                            <th className="text-left w-[20%]"><div className="h-4 w-16 bg-gray-200 animate-pulse rounded"></div></th>
                            <th className="text-left w-[25%]"><div className="h-4 w-24 bg-gray-200 animate-pulse rounded"></div></th>
                            <th className="text-right w-[10%]"><div className="h-4 w-12 bg-gray-200 animate-pulse rounded"></div></th>
                            <th className="text-center w-[10%]"><div className="h-4 w-16 bg-gray-200 animate-pulse rounded mx-auto"></div></th>
                        </tr>
                    </thead>    
                    <tbody className='w-full'>
                        {[1,2,3,4,5,6,7,8,9,10].map((item) => (
                            <tr key={item} className="flex justify-between items-center border-b-2 border-[#E5E9EB]">
                                <td className="w-[5%] flex items-center justify-center">
                                    <div className="h-4 w-4 bg-gray-200 animate-pulse rounded"></div>
                                </td>
                                <td className="py-2 w-[10%] text-left">
                                    <div className="h-16 w-16 bg-gray-200 animate-pulse rounded-lg"></div>
                                </td>
                                <td className="py-2 w-[20%] text-left">
                                    <div className="h-4 w-full bg-gray-200 animate-pulse rounded"></div>
                                </td>
                                <td className="py-2 w-[25%] text-left">
                                    <div className="h-4 w-full bg-gray-200 animate-pulse rounded"></div>
                                </td>  
                                <td className="py-2 w-[10%] text-right">
                                    <div className="h-4 w-16 bg-gray-200 animate-pulse rounded ml-auto"></div>
                                </td>
                                <td className="py-2 w-[10%] text-center">
                                    <div className='flex gap-5 justify-center'>
                                        <div className="h-6 w-6 bg-gray-200 animate-pulse rounded"></div>
                                        <div className="h-6 w-6 bg-gray-200 animate-pulse rounded"></div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
            {/* Mobile view skeleton */}
            <div className="lg:hidden space-y-4">
                {[1,2,3,4,5].map((item) => (
                    <div key={item} className="bg-white rounded-lg shadow p-4 animate-pulse">
                        <div className="flex justify-between items-center mb-3">
                            <div className="h-6 w-1/3 bg-gray-200 rounded"></div>
                            <div className="h-4 w-4 bg-gray-200 rounded"></div>
                        </div>
                        <div className="flex gap-4">
                            <div className="h-20 w-20 bg-gray-200 rounded-lg"></div>
                            <div className="flex-1 space-y-2">
                                <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
                                <div className="h-4 w-full bg-gray-200 rounded"></div>
                                <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                            <div className="h-6 w-1/4 bg-gray-200 rounded"></div>
                            <div className="flex gap-2">
                                <div className="h-8 w-8 bg-gray-200 rounded"></div>
                                <div className="h-8 w-8 bg-gray-200 rounded"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Pagination skeleton */}
            <div className='px-3 xs:px-4 sm:px-8 lg:pl-12 lg:pr-8 pt-8 pb-5 flex flex-wrap justify-between'>
                <div className="h-10 w-24 bg-gray-200 animate-pulse rounded"></div>
                <div className="flex gap-2 justify-center">
                    {[1,2,3,4,5].map((item) => (
                        <div key={item} className="h-8 w-8 bg-gray-200 animate-pulse rounded"></div>
                    ))}
                </div>
                <div className="h-10 w-24 bg-gray-200 animate-pulse rounded"></div>
            </div>
        </div>
    )
}
