import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";
import styled from "styled-components";
import { useState } from "react";
import { apiKey } from "./helper/apiUrl";
import {
  ChannelContainer,
  ChannelListContainer,
  Auth,
} from "./components/index";
import "stream-chat-react/dist/css/index.css";

const Container = styled.div`
  display: flex;
  max-height: 100vh;
  max-width: 100vw;
`;
const cookies = new Cookies();
const authToken = cookies.get("token");
const client = StreamChat.getInstance(apiKey);
//get info from stream chat
if (authToken) {
  //sign up user info to stream chat
  client.connectUser(
    {
      id: cookies.get("userId"),
      image: cookies.get("avatarURL"),
      name: cookies.get("username"),
      fullName: cookies.get("fullName"),
      hashedPassword: cookies.get("hashedPassword"),
      phoneNumber: cookies.get("phoneNumber"),
    },
    authToken
  );
}

const App = () => {
  const [createType, setCreateType] = useState("");
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  if (!authToken) {
    return <Auth />;
  }

  return (
    <Container>
      <Chat client={client} theme="team dark">
        <ChannelListContainer
          isCreating={isCreating}
          setIsCreating={setIsCreating}
          setCreateType={setCreateType}
          setIsEditing={setIsEditing}
        />
        <ChannelContainer
          isCreating={isCreating}
          setIsCreating={setIsCreating}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          createType={createType}
        />
      </Chat>
    </Container>
  );
};

export default App;
