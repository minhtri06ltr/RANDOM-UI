import React from "react";
import styled from "styled-components";
import { Avatar, useChatContext } from "stream-chat-react";

const Container = styled.div``;
const ChannelName = styled.span``;
const ChannelItem = styled.div``;
const Name = styled.span``;
const TeamChannelPreview = ({ channel, type }) => {
  const { channel: activeChannel, client } = useChatContext();
  const ChannelPreview = () => {
    <ChannelName># {channel?.data?.name || channel?.data?.id}</ChannelName>;
  };
  // {
  //     id:'3413',
  //     id:'34351',
  // }
  // => [{},{}]
  const DirectPreview = () => {
    // get another user id except self id
    const menbers = Object.values(channel.state.menbers).filter(
      ({ user }) => user.id !== client.userID
    );
    return (
      <ChannelItem>
        <Avatar
          image={menbers[0]?.user?.image}
          name={menbers[0]?.user?.fullName}
          size={24}
        />
        <Name>{menbers[0]?.user?.fullName}</Name>
      </ChannelItem>
    );
  };
  return (
    <Container onCLick={() => console.log(channel)}>
      {type === "team" ? <ChannelPreview /> : <DirectPreview />}
    </Container>
  );
};

export default TeamChannelPreview;
