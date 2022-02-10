import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  height: 100vh;
  background-image: url("https://cdn.donmai.us/sample/1c/53/sample-1c5363cf9cfc4f21fb852ab5af2fea4c.jpg");
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Input = styled.input`
  padding: 1rem;
  margin-bottom: 2rem;
  font-size: 2rem;
`;
const Button = styled.button`
  padding: 1rem;
  background-color: lightseagreen;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 2rem;
  width: 100%;
  font-size: 2rem;
`;
const Login = ({ setIsLogin }) => {
  const [username, setUsername] = useState("");
  return (
    <Container>
      <Form>
        <Input
          type="text"
          placeholder="Your name"
          onChange={(e) => setUsername(e.target.value)}
        />
        <Button
          onClick={() => {
            localStorage.setItem("username", username);
            setUsername("");
            setIsLogin(true);
          }}
        >
          Join
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
