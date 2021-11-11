import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import Dashboard from "./pages/Dashboard/Dashboard";
import Drones from "./pages/Drones/Drones";
import Home from "./pages/Home/Home";
import Signin from "./pages/Login/Signin/SIgnin";
import Signup from "./pages/Login/Signup/Signup";
import NotFound from "./pages/NotFound/NotFound";
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute";

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
      <Route path="explore-drones" element={<Drones />} />
      {/* <Route path="cart" element={<Cart />} /> */}
      <Route path="signin" element={<Signin />} />
      <Route path="signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
