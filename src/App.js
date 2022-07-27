import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Filter from "./enums/Filter";
import NavBar from "./components/NavBar";
import LandingPage from "./components/pages/LandingPage";
import ProductsPage from "./components/pages/ProductsPage";
import ProductPage from "./components/pages/ProductPage";
import CartPage from "./components/pages/CartPage";

const App = () => {
  const [currentFilter, setCurrentFilter] = useState(Filter.DEFAULT);

  return (
    <div className="App h-full flex flex-col font-[Charles]">
      <NavBar />

      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="products">
          <Route
            index
            element={
              <ProductsPage
                currentFilter={currentFilter}
                setFilter={setCurrentFilter}
              />
            }
          />
          <Route path=":id" element={<ProductPage />} />
        </Route>

        <Route path="cart" element={<CartPage />} />
      </Routes>
    </div>
  );
};

export default App;
