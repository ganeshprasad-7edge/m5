import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";

import React, { useEffect, useState, useContext, Suspense } from "react";

const ProductList = React.lazy(() => import('../components/productList'));
const AddProduct = React.lazy(() => import('../components/addProduct'));

export const AppRoutes = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/add" element={<AddProduct />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRoutes

