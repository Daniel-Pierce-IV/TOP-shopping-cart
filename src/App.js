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
  const [cart, setCart] = useState({});

  const totalCartQuantity = Object.values(cart).reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  function setCartItem(product, quantity) {
    if (quantity >= 0) {
      setCart({
        ...cart,
        [product.id]: {
          product,
          quantity,
        },
      });
    }
  }

  function removeCartItem(product) {
    const cartCopy = { ...cart };
    delete cartCopy[product.id];
    setCart(cartCopy);
  }

  return (
    <div className="App h-full flex flex-col font-[Charles]">
      <NavBar cartCount={totalCartQuantity} />

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
          <Route
            path=":id"
            element={<ProductPage setCartItem={setCartItem} />}
          />
        </Route>

        <Route
          path="cart"
          element={
            <CartPage
              cart={cart}
              setCartItem={setCartItem}
              removeCartItem={removeCartItem}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
