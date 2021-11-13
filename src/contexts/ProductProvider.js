import React, { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext(null);

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [control, setControl] = useState(false);

  const addProductsToDb = (formDaata) => {
    setLoading(true);
    fetch("https://intense-fortress-85211.herokuapp.com/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formDaata),
    })
      .then((res) => res.json())
      .then((data) => {
        setControl(!control);
        setLoading(false);
      });
  };

  const deleteProduct = (id) => {
    const confirmation = window.confirm("Are you sure you want to delete?");
    if (confirmation) {
      setLoading(true);
      fetch(
        `https://intense-fortress-85211.herokuapp.com/deleteProduct/${id}`,
        {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            setControl(!control);
          } else {
            setControl(!control);
          }
          setLoading(false);
        });
    } else return;
  };

  useEffect(() => {
    setLoading(true);
    fetch("https://intense-fortress-85211.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, [control]);

  return (
    <ProductContext.Provider
      value={{ loading, addProductsToDb, products, deleteProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);

export default ProductProvider;
