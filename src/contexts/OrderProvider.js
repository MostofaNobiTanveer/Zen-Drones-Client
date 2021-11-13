import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthProvider";

const OrderContext = createContext(null);

const OrderProvider = ({ children }) => {
  const { user } = useAuthContext();
  const [orders, setOrders] = useState([]);
  const [myOrders, setMyOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [control, setControl] = useState(false);

  const addOrdersToDb = (finaldata, navigate) => {
    setLoading(true);
    fetch("https://intense-fortress-85211.herokuapp.com/placeOrder", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(finaldata),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.removeItem("cart_list");
        setControl(!control);
        setLoading(false);
        navigate("/dashboard/orders");
      });
  };

  useEffect(() => {
    setLoading(true);
    fetch(`https://intense-fortress-85211.herokuapp.com/orders/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyOrders(data);
        setLoading(false);
      });
  }, [user.email, control, orders]);

  useEffect(() => {
    setLoading(true);
    fetch("https://intense-fortress-85211.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setLoading(false);
      });
  }, [control]);

  return (
    <OrderContext.Provider value={{ orders, myOrders, loading, addOrdersToDb }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrderContext = () => useContext(OrderContext);

export default OrderProvider;
