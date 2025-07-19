export default function Skeleton() {
    return (
        <div className='px-8 pt-2'>
            <table className="w-full">
                <thead>
                    <tr className="w-full flex justify-between text-[#84919A] text-sm border-b-2 border-[#E5E9EB] pt-3 pb-1.5">
                        <th className="w-[5%]"><div className="h-4 w-4 bg-gray-200 animate-pulse rounded"></div></th>
                        <th className="text-left w-[5%]"><div className="h-4 w-12 bg-gray-200 animate-pulse rounded"></div></th>
                        <th className="text-left w-[20%]"><div className="h-4 w-16 bg-gray-200 animate-pulse rounded"></div></th>
                        <th className="text-left w-[30%]"><div className="h-4 w-24 bg-gray-200 animate-pulse rounded"></div></th>
                        <th className="text-right w-[5%]"><div className="h-4 w-12 bg-gray-200 animate-pulse rounded"></div></th>
                        <th className="text-left w-[5%]"><div className="h-4 w-16 bg-gray-200 animate-pulse rounded"></div></th>
                    </tr>
                </thead>    
                <tbody className='w-full'>
                    {[1,2,3,4,5, 6 ,7].map((item) => (
                        <tr key={item} className="flex justify-between items-center border-b-2 border-[#E5E9EB]">
                            <td className="w-[5%] flex items-center justify-center">
                                <div className="h-4 w-4 bg-gray-200 animate-pulse rounded"></div>
                            </td>
                            <td className="py-2 w-[5%] text-left">
                                <div className="h-16 w-16 bg-gray-200 animate-pulse rounded-lg"></div>
                            </td>
                            <td className="py-2 w-[20%] text-left">
                                <div className="h-4 w-full bg-gray-200 animate-pulse rounded"></div>
                            </td>
                            <td className="py-2 w-[30%] text-left">
                                <div className="h-4 w-full bg-gray-200 animate-pulse rounded"></div>
                            </td>  
                            <td className="py-2 w-[5%] text-right">
                                <div className="h-4 w-16 bg-gray-200 animate-pulse rounded"></div>
                            </td>
                            <td className="py-2 w-[5%] text-left">
                                <div className='flex justify-around'>
                                    <div className="h-6 w-6 bg-gray-200 animate-pulse rounded"></div>
                                    <div className="h-6 w-6 bg-gray-200 animate-pulse rounded"></div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
