import { Route, Routes, Navigate } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import { useContext } from "react";
import AuthContext from "./Store/Auth-context";

function App() {
  const ctx = useContext(AuthContext);
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        {!ctx.isLoggedIn && <Route path="/auth" element={<AuthPage />}></Route>}
        {ctx.isLoggedIn && (
          <Route path="/profile" element={<UserProfile />}></Route>
        )}
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </Layout>
  );
}

export default App;
