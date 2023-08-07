import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Crea el contexto
const APIContext = createContext();

// Crea el proveedor del contexto
const APIContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]); // Estado para el carrito
  const apiUrl = 'https://fakestoreapi.com/products';

  useEffect(() => {
    // Realiza la solicitud a la API cuando se monta el componente
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(apiUrl);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  // Función para agregar productos al carrito
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Función para eliminar productos del carrito
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
  };

  

  return (
    <APIContext.Provider value={{ products, cart, addToCart, removeFromCart }}>
      {children}
    </APIContext.Provider>
  );
};

export { APIContext, APIContextProvider };