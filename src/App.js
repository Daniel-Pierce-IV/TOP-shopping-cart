import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Filter from "./enums/Filter";
import NavBar from "./components/NavBar";
import LandingPage from "./components/pages/LandingPage";
import ProductsPage from "./components/pages/ProductsPage";

const App = () => {
  const [currentFilter, setCurrentFilter] = useState(Filter.DEFAULT);

  return (
    <div className="App h-full flex flex-col">
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
          <Route path=":id" element={"Product #X Page"} />
        </Route>

        <Route path="cart" element={"Cart Page"} />
      </Routes>
    </div>
  );
};

export default App;
