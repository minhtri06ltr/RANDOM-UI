import React from "react";
import { ChannelList, useChatContext } from "stream-chat-react";
import Cookies from "universal-cookie";
import SideBar from "./UI/SideBar";
import styled from "styled-components";
import { SecondarySide } from "./index";

const Container = styled.div`
  height: inherit;
  display: flex;
  width: 28%;
`;
const ChannelListContainer = ({
  isCreating,
  setIsCreating,
  setCreateType,
  setIsEditing,
}) => {
  return (
    <Container>
      <SideBar />
      <SecondarySide
        isCreating={isCreating}
        setIsCreating={setIsCreating}
        setCreateType={setCreateType}
        setIsEditing={setIsEditing}
      />
    </Container>
  );
};

export default ChannelListContainer;
