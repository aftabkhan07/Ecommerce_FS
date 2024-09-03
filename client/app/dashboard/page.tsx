// pages/dashboard.tsx
"use client";

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { fetchProducts } from '../store/productsSlice';
import Header from './Header'; // Import the Header component
import styles from './Dashboard.module.css'; // Import CSS module for styling
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000";

const DashboardPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, loading, error } = useSelector((state: RootState) => state.products);
  const user = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <Header user={user} /> {/* Add the Header component */}
      <div className={styles.container}>
        <h1 className={styles.title}>Product Dashboard</h1>
        <div className={styles.productList}>
          {products.map((product) => (
            <div key={product._id} className={styles.productItem}>
              <img src={product.imageUrl} alt={product.name} className={styles.productImage} />
              <div className={styles.productInfo}>
                <p className={styles.productDescription}>{product.description}</p>
                <p className={styles.productPrice}>${product.price}</p>
                <p className={styles.productCategory}>Category: {product.category}</p>
                <p className={styles.productStock}>{product.stock} in stock</p>
                <button className={styles.buyButton}>Buy Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
