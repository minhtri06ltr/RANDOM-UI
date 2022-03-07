import React from "react";
import { ChannelList } from "stream-chat-react";
import styled from "styled-components";
import { ChannelSearch } from "../index";
import TeamChannelList from "./TeamChannelList";
import TeamChannelPreview from "./TeamChannelPreview";

const Container = styled.div`
  flex: 1;
  background-color: #343434;
  overflow: auto;
`;
const Title = styled.span`
  @keyframes textclip {
    to {
      background-position: 200% center;
    }
  }
  font-size: 2em;
  color: #fff;
  font-weight: 700;
  font-family: "Josefin Sans", sans-serif;
  background: linear-gradient(to right, #095fab 10%, #25abe8 50%, #57d75b 60%);
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 1.5s linear infinite;
  display: block;
  text-align: center;
  padding: 0.7rem 0;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const SecondarySide = ({
  isCreating,
  setIsCreating,
  setCreateType,
  setIsEditing,
}) => {
  return (
    <Container>
      <Title>MESSAGE</Title>
      <ChannelSearch />
      <Wrapper>
        <ChannelList
          filters={{}}
          channelRenderFilterFn={() => {}}
          List={(listProps) => (
            <TeamChannelList
              isCreating={isCreating}
              setIsCreating={setIsCreating}
              setCreateType={setCreateType}
              setIsEditing={setIsEditing}
              type="team"
              {...listProps}
            />
          )}
          Preview={(previewProps) => (
            <TeamChannelPreview type="team" {...previewProps} />
          )}
        />
        <ChannelList
          filters={{}}
          channelRenderFilterFn={() => {}}
          List={(listProps) => (
            <TeamChannelList
              isCreating={isCreating}
              setIsCreating={setIsCreating}
              setCreateType={setCreateType}
              setIsEditing={setIsEditing}
              type="message"
              {...listProps}
            />
          )}
          Preview={(previewProps) => (
            <TeamChannelPreview type="message" {...previewProps} />
          )}
        />
      </Wrapper>
    </Container>
  );
};

export default SecondarySide;
