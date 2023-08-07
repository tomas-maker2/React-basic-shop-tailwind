import React, { useContext, useState } from 'react';
import HeroShop from '../components/HeroShop';
import { APIContext } from '../components/context/ApiContext';

const Shop = () => {
  const { products, addToCart } = useContext(APIContext);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Lista de categorías disponibles con los valores correctos
  const categories = [
    { value: 'all', label: 'Todas las categorías' },
    { value: 'electronics', label: 'Electrónicos' },
    { value: 'jewelery', label: 'Joyería' },
    { value: 'men clothing', label: 'Ropa para hombres' },
    { value: 'women clothing', label: 'Ropa para mujeres' },
  ];

  // Función para manejar el cambio de categoría seleccionada
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Filtrar productos según la categoría seleccionada
  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((product) => product.category === selectedCategory.replace(/\s/g, '_'));

  return (
    <div>
      <HeroShop heading='Buy everything' message='This is some of my recent work'/>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4 text-center">Productos</h1>
        
        {/* Input select para filtrar por categoría */}
        <div className="mb-4 text-center">
          <label htmlFor="category">Filtrar por categoría:</label>
          <select
            id="category"
            name="category"
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="ml-2 px-2 py-1 border rounded"
          >
            {categories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredProducts.map(product => (
            <li key={product.id} className="bg-white shadow-lg rounded-lg">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-32 object-contain rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                <p className="text-gray-700">Precio: ${product.price}</p>
                <button className='text-black border cursor-pointer p-1' onClick={() => addToCart(product)}>Agregar al carrito</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Shop;