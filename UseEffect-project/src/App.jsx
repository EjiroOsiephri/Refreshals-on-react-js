import Navigation from "./Components/UseEffects/Navigation/Navigation";
import AuthContext from "./Store/Context";
import React, { useState } from "react";
import Homepage from "./Components/Home/Homepage";

function App() {
  const [disabledBtn, setDisabledBtn] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        disabledBtn: false,
      }}
    >
      <Navigation></Navigation>
      <Homepage disabled={disabledBtn} setDisabled={setDisabledBtn}></Homepage>
      <button></button>
    </AuthContext.Provider>
  );
}

export default App;
