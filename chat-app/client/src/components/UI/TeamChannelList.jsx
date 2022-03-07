import React from "react";
import styled from "styled-components";

const Container = styled.div``;
const Message = styled.span`
  color: white;
  font-weight: 500;
  text-align: center;
  display: block;
`;
const Text = styled.span`
  color: gray;
  font-weight: bold;
`;
const Loader = styled.div`
  margin: 50% auto;
  border: 3px solid #f3f3f3;
  border-radius: 50%;
  border-top: 3px solid black;
  width: 50px;
  height: 50px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
  /* Safari */
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  justify-content: space-between;
`;
const AddChannel = styled.img`
  cursor: pointer;
`;
const TeamChannelList = ({
  children,
  error = false,
  loading,
  type,
  isCreating,
  setIsCreating,
  setCreateType,
  setIsEditing,
}) => {
  console.log(type, error);
  if (error) {
    if (type === "team") {
      return (
        <Container>
          <Message>
            Connection error, please wait a moment and try again
          </Message>
        </Container>
      );
    }
  }
  if (loading) {
    return (
      <Container>
        <Loader></Loader>
      </Container>
    );
  }
  return (
    <Container>
      <Wrapper>
        <Text>{type === "team" ? "Channels" : "Message"}</Text>
        <AddChannel
          src="https://img.icons8.com/clouds/30/000000/add.png"
          onClick={() => {
            setCreateType(type);
            setIsCreating((prevState) => !prevState);
            setIsEditing(false);
            // if(setToggleContainer) setToggleContainer((prevState) => !prevState)
          }}
        />
      </Wrapper>
      {children}
    </Container>
  );
};

export default TeamChannelList;
