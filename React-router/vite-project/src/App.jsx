import { Route, Routes } from "react-router-dom";
import Welcome from "./Components/Welcome";

function App() {
  return (
    <Routes>
      <Route path="/welcome" element={<Welcome />}></Route>
    </Routes>
  );
}

export default App;
