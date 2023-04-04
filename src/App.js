import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard/Dashboard";

import Users from "./pages/Dashboard/Users";
import AllProducts from "./pages/Dashboard/AllProducts";
import Orders from "./pages/Dashboard/Orders";
import AddProduct from "./pages/Dashboard/AddProduct";
import LoginDashboard from "./pages/Dashboard/LoginDashboard";
import SideBar from './components/Dashboard/SideBar'

import { useSelector } from 'react-redux';
import EditUserform from './components/Dashboard/EditUserform';
import EditOrderform from './components/Dashboard/EditOrderform';
import EditProductform from './components/Dashboard/EditProductform';
import Dash from "./Dash";

function App() {

  return (
    <>

      <Router>

        <Routes>
        <Route path="/dashboard" element={<Dash />}>
            <Route path="/dashboard" exact element={<Dashboard />} />
            <Route path="users" exact element={<Users />} />
            <Route path="products" exact element={<AllProducts />} />
            <Route path="orders" exact element={<Orders />} />
            <Route path="products/add" exact element={<AddProduct />} />

          </Route>
          <Route path="/" exact element={<LoginDashboard />} />

        </Routes>


      </Router>
    </>
  );
}

export default App;
