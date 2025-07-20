import { Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";

const ProductList = React.lazy(() => import('../components/productList'));
const AddProduct = React.lazy(() => import('../components/addProduct'));
const UpdateProduct = React.lazy(() => import('../components/updateProduct'));

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/update/:id" element={<UpdateProduct />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
