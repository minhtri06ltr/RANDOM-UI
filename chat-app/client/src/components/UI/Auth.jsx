import React, { useState } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import styled, { css } from "styled-components";
import { apiUrl } from "../../helper/apiUrl";

const Container = styled.div`
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;

  padding: 2rem 4rem;
  background-image: url(https://as2.ftcdn.net/v2/jpg/02/99/84/89/1000_F_299848927_S0EwX0P6HWGigW6qZWFIBaczKMQuq5D9.jpg);
`;
const Form = styled.form`
  height: 100%;
  display: flex;
  border-radius: 5px;
  background-color: white;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
const Title = styled.span`
  color: gray;
  display: block;
  font-size: 2rem;
`;
const Left = styled.div`
  width: 50%;
  padding: 1rem 4rem;
`;
const Right = styled.div`
  width: 50%;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Wrapper = styled.div`
  margin-top: 1rem;
  &:last-child {
    margin-top: 50%;
  }
`;
const WrapperField = styled.div`
  margin-bottom: 1rem;
`;
const Label = styled.label`
  display: block;
  font-size: 1rem;
  color: gray;
`;
const Input = styled.input`
  padding: 0.8rem 0.5rem;
  font-size: 0.9rem;
  outline: none;
  width: 100%;
  border: 1px solid #eee;
  &:focus {
    border-left: 2px solid #ff185a;
  }
  ${(props) =>
    props.confirm
      ? css`
          border: 1px solid red;
        `
      : ""}
`;
const WrapperChange = styled.div`
  text-align: center;
`;
const Text = styled.span`
  font-size: 0.9rem;
`;
const FormChange = styled.span`
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
`;
const Button = styled.button`
  border: 0;
  outline: none;
  padding: 0.5rem 4rem;
  font-weight: 500;
  cursor: pointer;
  color: white;
  margin: 1rem auto;
  display: block;
  font-size: 1.2rem;
  border-radius: 20px;
  background: #1f1c2c; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #928dab,
    #1f1c2c
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #928dab,
    #1f1c2c
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;
const Warn = styled.span`
  color: red;
  font-size: 0.8rem;
`;

const initialState = {
  username: "",
  password: "",
  confirmPassword: "",
  phoneNumber: "",
  fullName: "",
  avatarURL: "",
};
const cookies = new Cookies();
const Auth = () => {
  const [signUp, setSignUp] = useState(false);

  const [form, setForm] = useState(initialState);

  const formHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    if (signUp && form.confirmPassword !== form.password) {
      return;
    }
    try {
      const { data } = await axios.post(
        `${apiUrl}/auth/${signUp ? "sign-up" : "sign-in"}`,
        form
      );

      cookies.set("token", data.token);
      cookies.set("fullName", data.fullName);
      cookies.set("username", data.username);
      cookies.set("userId", data.userId);
      if (signUp) {
        cookies.set("hashedPassword", data.hashedPassword);
        cookies.set("phoneNumber", data.phoneNumber);

        cookies.set("avatarURL", data.avatarURL);
      }

      window.location.reload();
    } catch (error) {
      alert(
        `${
          error.response.data.message
            ? error.response.data.message
            : "Server error please contact to admin"
        }`
      );
    }
  };

  return (
    <Container>
      <Form onSubmit={submitHandler}>
        {signUp ? (
          <>
            <Left>
              <Title>
                Sign <b>Up</b>
              </Title>
              <Wrapper>
                <WrapperField>
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    required
                    onChange={formHandler}
                  />
                </WrapperField>
                <WrapperField>
                  <Label htmlFor="username">Username</Label>
                  <Input
                    type="text"
                    name="username"
                    placeholder="User name"
                    required
                    onChange={formHandler}
                  />
                </WrapperField>
                <WrapperField>
                  <Label htmlFor="phoneNumber">Phone Number</Label>
                  <Input
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    required
                    onChange={formHandler}
                  />
                </WrapperField>
                <WrapperField>
                  <Label htmlFor="avatarURL">Avatar URL</Label>
                  <Input
                    type="text"
                    name="avatarURL"
                    placeholder="Avatar URL"
                    required
                    onChange={formHandler}
                  />
                </WrapperField>
                <WrapperField>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    onChange={formHandler}
                  />
                </WrapperField>
                <WrapperField>
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    confirm={
                      form.password !== form.confirmPassword &&
                      form.confirmPassword.length > 0 &&
                      true
                    }
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    required
                    onChange={formHandler}
                  />
                  {form.password !== form.confirmPassword &&
                    form.confirmPassword.length > 0 && (
                      <Warn>Password and confirm password is not correct</Warn>
                    )}
                </WrapperField>
              </Wrapper>
              <Button>Sign Up</Button>
              <WrapperChange>
                <Text>Already have an account? </Text>
                <FormChange
                  onClick={() => {
                    setForm(initialState);
                    setSignUp(!signUp);
                  }}
                >
                  Sign in
                </FormChange>
              </WrapperChange>
            </Left>
            <Right>
              <Img src="https://images.unsplash.com/photo-1611162619969-50b02487f71b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80" />
            </Right>
          </>
        ) : (
          <>
            <Right>
              <Img src="https://images.unsplash.com/photo-1612810806563-4cb8265db55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80" />
            </Right>
            <Left>
              <Title>
                Sign <b>In</b>
              </Title>
              <Wrapper style={{ marginTop: "40%" }}>
                <WrapperField>
                  <Label htmlFor="username">Username</Label>
                  <Input
                    type="text"
                    name="username"
                    placeholder="User name"
                    required
                    onChange={formHandler}
                  />
                </WrapperField>
                <WrapperField>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    onChange={formHandler}
                  />
                </WrapperField>
              </Wrapper>
              <Button>Sign In</Button>
              <WrapperChange>
                <Text>Don't have an account? </Text>
                <FormChange
                  onClick={() => {
                    setForm(initialState);
                    setSignUp(!signUp);
                  }}
                >
                  Sign up
                </FormChange>
              </WrapperChange>
            </Left>
          </>
        )}
      </Form>
    </Container>
  );
};

export default Auth;
