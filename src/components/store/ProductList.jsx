import React, { useState, useEffect } from 'react';
import Card from './card';
import './global.css'; 

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
        try {
            const response = await fetch('/data/products.json'); 
            
            if (!response.ok) {
            throw new Error(`error: status: ${response.status}`);
            }
            
            const data = await response.json();
            setProducts(data);
        } catch (e) {
            console.error("Could not fetch product data:", e);
            setError("Failed to load product data.");
        } finally {
            setLoading(false);
        }
        };

        fetchProducts();
    }, []);

    if (loading) return <div>Loading products...</div>;
    if (error) return <div style={{ color: 'red' }}>Error: {error}</div>;

    return (
        <div className="product-list-container">
        {products.map(product => (
            <Card key={product.id} product={product} />
        ))}
        </div>
    );
};

export default ProductList;