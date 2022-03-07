import React, { useState } from "react";
import styled from "styled-components";
import {
  MessageList,
  MessageInput,
  Thread,
  Window,
  useChannelActionContext,
  Avatar,
  useChannelStateContext,
  useChatContext,
} from "stream-chat-react";

export const GiphyContext = React.createContext({});

const Container = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
`;
const ChannelInfo = styled.img`
  cursor: pointer;
`;
const Wrapper = styled.div`
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
`;
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;
const HeaderRight = styled.div`
  color: gray;
  display: flex;
  align-items: center;
  position: relative;
`;
const GroupName = styled.span`
  font-weight: bold;
  margin-right: 0.2rem;
  color: white;
`;
const User = styled.img`
  position: relative;
`;
const Badge = styled.span`
  position: absolute;
  left: 66%;
  top: -14%;
  font-weight: bold;
  color: white;
  padding: 0.2rem 0.5rem;
  background-color: red;
  border-radius: 50%;
`;
const TeamChannelHeader = ({ setIsEditing }) => {
  const { channel, watcher_count } = useChannelStateContext();
  const { client } = useChatContext();

  const MessagingHeader = () => {
    const members = Object.values(channel.state.members).filter(
      ({ user }) => user.id !== client.userID
    );
    const additionalMembers = members.length - 3;

    if (channel.type === "messaging") {
      return (
        <div className="team-channel-header__name-wrapper">
          {members.map(({ user }, i) => (
            <div key={i} className="team-channel-header__name-multi">
              <Avatar
                image={user.image}
                name={user.fullName || user.id}
                size={32}
              />
              <p className="team-channel-header__name user">
                {user.fullName || user.id}
              </p>
            </div>
          ))}

          {additionalMembers > 0 && (
            <p className="team-channel-header__name user">
              and {additionalMembers} more
            </p>
          )}
        </div>
      );
    }
    // online counting
    const getWatcherText = (watchers) => {
      if (!watchers) return "0";
      if (watchers === 1) return "1";
      return `${watchers}`;
    };
    return (
      <Wrapper>
        <HeaderLeft>
          <GroupName>#{channel.data.name}</GroupName>
          <ChannelInfo
            onClick={() => setIsEditing(true)}
            src="https://img.icons8.com/clouds/30/000000/information.png"
          />
        </HeaderLeft>

        <HeaderRight>
          <User src="https://img.icons8.com/clouds/50/000000/user.png" />
          <Badge>{getWatcherText(watcher_count)}</Badge>
        </HeaderRight>
      </Wrapper>
    );
  };

  return <MessagingHeader />;
};
const ChannelInner = ({ setIsEditing }) => {
  const [giphyState, setGiphyState] = useState(false);
  const { sendMessage } = useChannelActionContext();
  const overrideSubmitHandler = (message) => {
    let updatedMessage = {
      attachments: message.attachments,
      mentioned_users: message.mentioned_users,
      parent_id: message.parent?.id,
      parent: message.parent,
      text: message.text,
    };

    if (giphyState) {
      updatedMessage = { ...updatedMessage, text: `/giphy ${message.text}` };
    }

    if (sendMessage) {
      sendMessage(updatedMessage);
      setGiphyState(false);
    }
  };

  return (
    <GiphyContext.Provider value={{ giphyState, setGiphyState }}>
      <Container>
        <Window>
          <TeamChannelHeader setIsEditing={setIsEditing} /> {/*custom header*/}
          <MessageList />
          <MessageInput overrideSubmitHandler={overrideSubmitHandler} />
        </Window>
        <Thread />
      </Container>
    </GiphyContext.Provider>
  );
};

export default ChannelInner;
