export default function UpdateSkeleton() {
    return (
        <div className='pl-12 pr-8 pt-6'>
            <div className='w-[65%]'>
                {/* Image section skeleton */}
                <div className='text-[#84919A] text-sm mb-1'>
                    <div className="h-4 w-24 bg-gray-200 animate-pulse rounded"></div>
                </div>
                <div className='flex flex-col gap-2 justify-center items-center border-2 border-dashed py-10'>
                    <div className="h-48 w-48 bg-gray-200 animate-pulse rounded"></div>
                </div>
                
                {/* Form fields skeleton */}
                <div className='flex items-center gap-6 mt-4 w-full'>
                    <div className='w-1/2'>
                        <div className="h-4 w-16 bg-gray-200 animate-pulse rounded mb-2"></div>
                        <div className="h-14 w-full bg-gray-200 animate-pulse rounded"></div>
                    </div>
                    <div className='w-1/2'>
                        <div className="h-4 w-16 bg-gray-200 animate-pulse rounded mb-2"></div>
                        <div className="h-14 w-full bg-gray-200 animate-pulse rounded"></div>
                    </div>
                </div>
                
                {/* Description field skeleton */}
                <div className='mt-4'>
                    <div className="h-4 w-24 bg-gray-200 animate-pulse rounded mb-2"></div>
                    <div className="h-28 w-full bg-gray-200 animate-pulse rounded"></div>
                </div>
                
                {/* Buttons skeleton */}
                <div className='w-full mt-4'>
                    <div className='flex gap-4'>
                        <div className='w-1/3'>
                            <div className="h-12 w-full bg-gray-200 animate-pulse rounded"></div>
                        </div>
                        <div className='w-1/3'>
                            <div className="h-12 w-full bg-gray-200 animate-pulse rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}