import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={"Index Page"} />

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
