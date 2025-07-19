import { useEffect, useState } from 'react'

import TopBar from './topbar'
import Header from './header'
import Skeleton from './skeleton'

export default function AddProduct() {
    return (
        <div className="w-full overflow-auto">
            <TopBar />
            <Header />
        </div>
    )
}