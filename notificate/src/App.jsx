import { useEffect, useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    localStorage.getItem("username") && setIsLogin(true);
  }, []);
  return isLogin ? (
    <>
      <Navbar setIsLogin={setIsLogin} />
      <Card />
      <Card />
    </>
  ) : (
    <Login setIsLogin={setIsLogin} />
  );
};

export default App;
