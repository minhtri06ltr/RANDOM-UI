import React from "react";
import styled from "styled-components";
import { Channel, useChatContext, MessageTeam } from "stream-chat-react";
import { CreateChannel, EditChannel, ChannelInner } from "./index.js";

const Container = styled.div`
  flex: 1;
  width: 100%;
  height: 100vh;
`;
const EmptyContainer = styled.div``;
const EmptyMessage = styled.span`
  display: block;
  text-align: center;
  color: gray;
  font-weight: bold;
  margin-top: 2rem;
`;
const ChannelContainer = ({
  isCreating,
  setIsCreating,
  isEditing,
  setIsEditing,
  createType,
}) => {
  const { channel } = useChatContext();
  if (isCreating) {
    return (
      <Container>
        <CreateChannel
          createType={createType}
          setIsCreating={setIsCreating}
        ></CreateChannel>
      </Container>
    );
  }
  if (isEditing) {
    return (
      <Container>
        <EditChannel setIsEditing={setIsEditing}></EditChannel>
      </Container>
    );
  }
  const Empty = () => {
    return (
      <EmptyContainer>
        <EmptyMessage>This is the beginning of your chat history</EmptyMessage>
        <EmptyMessage>
          Sending messages, attachments, links, emojis, and more!
        </EmptyMessage>
      </EmptyContainer>
    );
  };
  return (
    <Container>
      <Channel
        EmptyStateIndicator={Empty}
        Message={(messageProps, i) => <MessageTeam key={i} {...messageProps} />}
      >
        <ChannelInner setIsEditing={setIsEditing} />
      </Channel>
    </Container>
  );
};

export default ChannelContainer;
