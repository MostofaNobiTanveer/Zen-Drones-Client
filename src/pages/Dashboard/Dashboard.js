import React from "react";
import { Route, Routes } from "react-router-dom";
import { AdminRoute } from "../AdminRoute/AdminRoute";
import DashboardHome from "./DashboardHome";
import MakeAdmin from "./MakeAdmin";
import ManageOrders from "./ManageOrders";
import { Payment } from "./Payment";
import AddProducts from "./AddProducts";
import Review from "./Review";
import Sidebar from "./Sidebar";
import UserOrders from "./UserOrders";
import UserProfile from "./UserProfile";
import Products from "./Products";

const Dashboard = () => {
  return (
    <>
      <Sidebar>
        <Routes>
          <Route path="" element={<DashboardHome />} />
          <Route path="profile" element={<UserProfile />} />
          <Route path="orders" element={<UserOrders />} />
          <Route path="review" element={<Review />} />
          <Route
            path="add-products"
            element={
              <AdminRoute>
                <AddProducts />
              </AdminRoute>
            }
          />
          <Route
            path="products"
            element={
              <AdminRoute>
                <Products />
              </AdminRoute>
            }
          />
          <Route path="payment" element={<Payment />} />
          <Route
            path="manage-orders"
            element={
              <AdminRoute>
                <ManageOrders />
              </AdminRoute>
            }
          />
          <Route
            path="make-admin"
            element={
              <AdminRoute>
                <MakeAdmin />
              </AdminRoute>
            }
          />
        </Routes>
      </Sidebar>
    </>
  );
};

export default Dashboard;
