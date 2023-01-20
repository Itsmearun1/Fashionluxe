import "./App.css";
import { Home } from "./Pages/Home"; 
import { Navbar } from "./Components/Navbar";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Products from "./Pages/Products";
import SingleProductPage from "./Pages/Singleproductspage";
import Cart from "./Pages/Cart";

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
