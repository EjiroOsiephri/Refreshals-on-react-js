import Counter from "./Components/Counter";
import Header from "./Components/Header";
import Auth from "./Components/Auth";
import UserProfile from "./Components/UserProfile";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const authState = useSelector(
    (state) => state.authentication.initialAuthState
  );
  console.log(authState);
  return (
    <>
      <Header />
      <section>{authState ? <UserProfile /> : <Auth />}</section>
      <Counter />
    </>
  );
}

export default App;
