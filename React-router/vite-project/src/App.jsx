import { Route, Routes } from "react-router-dom";
import Welcome from "./Components/Welcome";
import Carts from "./Components/carts";
import { Fragment } from "react";
import Mainheader from "./Components/Mainheader";
import CartDetail from "./Components/CartDetail";

function App() {
  return (
    <Fragment>
      <Mainheader />
      <Routes>
        <Route path="/welcome/*" element={<Welcome />}></Route>
        <Route path="/carts" element={<Carts />}></Route>
        <Route path="/carts/:productId" element={<CartDetail />}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;
