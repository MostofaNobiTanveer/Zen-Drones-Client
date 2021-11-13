import React, { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reviewUpdate, setReviewUpdate] = useState(false);

  const addReviewToDb = (formDaata) => {
    setLoading(true);
    fetch("https://intense-fortress-85211.herokuapp.com/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formDaata),
    })
      .then((res) => res.json())
      .then((data) => {
        setReviewUpdate(!reviewUpdate);
        setLoading(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    fetch("https://intense-fortress-85211.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      });
  }, [reviewUpdate]);

  return (
    <AppContext.Provider value={{ addReviewToDb, reviews, loading }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppProvider;
