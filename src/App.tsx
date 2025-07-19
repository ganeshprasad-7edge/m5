// import { useState } from 'react'
import SideBar from '../src/components/sideBar'
import ProductList from '../src/components/productList'
import AppRoutes from './routes'
import './App.css'

function App() {
  
  return (
    <>
      <div className="flex h-screen">
        <SideBar />
        <ProductList />
      </div>
    </>
  )
}

export default App
