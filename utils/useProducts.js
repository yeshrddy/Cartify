// useProducts.js
import { useState, useEffect } from 'react';

export default function useProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch("https://api.escuelajs.co/api/v1/products");
        let data = await response.json();
        setProducts(data);
      } catch (error) {
        // Handle error gracefully (e.g., show error message, log error)
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return products;
}
