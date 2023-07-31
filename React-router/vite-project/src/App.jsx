import { Route, Routes } from "react-router-dom";
import Welcome from "./Components/Welcome";
import Carts from "./Components/carts";
import { Fragment } from "react";
import Mainheader from "./Components/Mainheader";

function App() {
  return (
    <Fragment>
      <Mainheader />
      <Routes>
        <Route path="/welcome" element={<Welcome />}></Route>
        <Route path="/carts" element={<Carts />}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;
