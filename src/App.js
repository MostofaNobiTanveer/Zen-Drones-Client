import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import Dashboard from "./pages/Dashboard/Dashboard";
import Drones from "./pages/Drones/Drones";
import Home from "./pages/Home/Home";
import Signin from "./pages/Login/Signin/SIgnin";
import Signup from "./pages/Login/Signup/Signup";
import NotFound from "./pages/NotFound/NotFound";
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Reviews from "./pages/Reviews/Reviews";

function App() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Home />} />
      <Route
        path="dashboard/*"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route path="drones" element={<Drones />}>
      </Route>
        <Route path="/drones/:id" element={<ProductDetails />} />
      <Route path="reviews" element={<Reviews />} />
      <Route path="cart" element={<Cart />} />
      <Route path="signin" element={<Signin />} />
      <Route path="signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
