import React, { useContext } from 'react';
import { APIContext } from '../components/context/ApiContext';
import Hero from '../components/Hero';


const Cart = () => {
  const { cart , removeFromCart} = useContext(APIContext);


  if (cart.length === 0) {
    return (
      <div>
        <Hero />
        <div className="flex flex-col items-center mt-8">
          <p className='p-5'>No hay nada en tu carrito</p>
        </div>
      </div>
    );
  }


  return (
    <div>
      <Hero />
      <div className="flex flex-col items-center mt-8">
        <h1 className="text-2xl font-bold mb-4">Productos agregados al carrito</h1>
        <div className="grid grid-cols-3 gap-4">
          {cart.map((product) => (
            <div className="bg-white rounded-lg shadow-md p-4" key={product.id}>
              <img src={product.image} alt="" className="w-24 h-24 mx-auto mb-2" />
              <p className="text-gray-800 text-center font-bold mb-1">{product.title}</p>
              <p className="text-gray-600 text-center">{product.price}$</p>
              <p>{product.quantity}</p>
              <button className='border-black' onClick={() => removeFromCart(product.id)} >Eliminar</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;