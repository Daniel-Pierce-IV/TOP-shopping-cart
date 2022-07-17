import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import LandingPage from "./components/pages/LandingPage";

const App = () => {
  return (
    <div className="App h-full flex flex-col">
      <NavBar />

      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="products">
          <Route index element={"Products Page"} />
          <Route path=":id" element={"Product #X Page"} />
        </Route>

        <Route path="cart" element={"Cart Page"} />
      </Routes>
    </div>
  );
};

export default App;
