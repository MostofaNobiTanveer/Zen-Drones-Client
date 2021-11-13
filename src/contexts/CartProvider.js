import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext(null);

// getting data from local storage
const getLocalStorage = () => {
  let list = localStorage.getItem("cart_list");
  if (list) {
    return JSON.parse(localStorage.getItem("cart_list"));
  } else {
    return [];
  }
};

const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState(getLocalStorage());

  const handleAddToCart = (product, navigate) => {
    const findItem = cartList.find((item) => item._id === product._id);
    let newCart = [];

    if (findItem) {
      const restItem = cartList.filter((pd) => pd._id !== product._id);
      findItem.quantity += 1;
      product.totalPrice = parseInt(product.price) * product.quantity;
      newCart = [...restItem, product];
    } else {
      product.quantity = 1;
      product.totalPrice = parseInt(product.price) * product.quantity;
      newCart = [...cartList, product];
    }
    setCartList(newCart);
    navigate("/cart");
  };

  const handleRemoveFromcart = (id) => {
    const items = JSON.parse(localStorage.getItem("cart_list"));
    const filteredItem = items.filter((item) => item._id !== id);
    setCartList(filteredItem);
    // localStorage.setItem("cart_list", JSON.stringify(filteredItem));
  };

  // sending data to local storage
  useEffect(() => {
    localStorage.setItem("cart_list", JSON.stringify(cartList));
  }, [cartList]);

  return (
    <CartContext.Provider
      value={{ cartList, handleAddToCart, handleRemoveFromcart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);

export default CartProvider;
