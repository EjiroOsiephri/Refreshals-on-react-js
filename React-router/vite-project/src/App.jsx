import { Route, Routes } from "react-router-dom";
import Welcome from "./Components/Welcome";
import Carts from "./Components/carts";
import { Fragment } from "react";
import Mainheader from "./Components/Mainheader";
import CartDetail from "./Components/CartDetail";
import Notfound from "./Components/Notfound";

function App() {
  return (
    <Fragment>
      <Mainheader />
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/welcome/*" element={<Welcome />}></Route>
        <Route path="/carts" element={<Carts />}></Route>
        <Route path="/carts/:productId" element={<CartDetail />}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;
