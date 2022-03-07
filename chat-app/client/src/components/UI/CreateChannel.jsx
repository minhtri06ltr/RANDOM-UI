import React from "react";
import styled from "styled-components";
import { useChatContext } from "stream-chat-react";

const Container = styled.div`
  padding: 2rem;
  background-color: #343434;
  height: 100%;
`;
const WrapperInput = styled.div`
  text-align: center;
`;
const Label = styled.label`
  display: block;
  color: white;
  font-size: 1.2rem;
`;
const Input = styled.input`
  width: 50%;
  border-radius: 5px;
  padding: 1rem;
  outline: none;
  font-size: 1.2rem;
  color: white;
  background-color: transparent;
  border: 1px solid #eee;
`;
const CreateChannel = ({ channelName = "", setChannelName }) => {
  return (
    <Container>
      <WrapperInput>
        <Label htmlFor="channelName">Name</Label>
        <Input
          name="channelName"
          type="text"
          placeholder="Channel name (NO SPACE)"
        />
      </WrapperInput>
    </Container>
  );
};

export default CreateChannel;
