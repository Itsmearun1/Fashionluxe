import "./App.css";
import { Home } from "./Pages/Home"; 
import { Navbar } from "./Components/Navbar";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Products from "./Pages/Products";
import SingleProductPage from "./Pages/Singleproductspage";
import Cart from "./Pages/Cart";
import SignIn from "./Pages/Signin";
import Signup from "./Pages/Signup";
import Checkout from "./Pages/Checkout";
import AdminDashboard from "./Pages/AdminDasboard";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<SingleProductPage />} />
          <Route path="cart" element={<Cart />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="/signin/signup" element={<Signup />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/dashboard" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
