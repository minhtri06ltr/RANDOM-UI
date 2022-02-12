import { useEffect, useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import styled from "styled-components";
import { smallPhone } from "./responsive";
import { io } from "socket.io-client";
import { apiUrl } from "./utils/url";

const Wrapper = styled.div`
  margin-top: 12%;
  ${smallPhone({ marginTop: "50%" })}
`;
const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [socket, setSocket] = useState(null);
  useEffect(() => {
    //connect
    setSocket(io(apiUrl, { transports: ["websocket"] }));

    localStorage.getItem("username") && setIsLogin(true);
  }, []);

  useEffect(() => {
    //send user info to socket
    socket?.emit("newUser", localStorage.getItem("username"));
  }, [socket]);
  return isLogin ? (
    <>
      <Navbar setIsLogin={setIsLogin} socket={socket} />
      <Wrapper>
        <Card
          avatar="https://images.unsplash.com/photo-1619443492967-f04dfa229b14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          img="https://images.unsplash.com/photo-1464817739973-0128fe77aaa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          name="John Keller"
          socket={socket}
        />
        <Card
          avatar="https://images.unsplash.com/photo-1542996966-2e31c00bae31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          img="https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=836&q=80"
          name="Nymn Oujo"
          socket={socket}
        />
      </Wrapper>
    </>
  ) : (
    <Login setIsLogin={setIsLogin} />
  );
};

export default App;
