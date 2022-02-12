import styled from "styled-components";
import { useState } from "react";
import { smallPhone } from "../responsive";

const Container = styled.div`
  height: 49.5vh;
  padding: 0 7rem;
  margin-bottom: 3rem;
  ${smallPhone({ padding: "0 2rem" })}
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem;
  height: 10%;
`;
const Avatar = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 2rem;
`;
const Name = styled.span`
  font-size: 1.3rem;
  font-weight: bold;
`;
const Center = styled.div`
  height: 80%;
`;
const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const Bottom = styled.div`
  height: 10%;
  margin: 1rem;
`;
const React = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ReactItem = styled.div`
  font-size: 1.5rem;
  &:first-child {
    margin-right: 2rem;
  }
  cursor: pointer;
`;
const Card = ({ avatar, img, name, socket }) => {
  const [liked, setLiked] = useState(false);
  const handleReact = (type) => {
    socket.emit("sendNotification", {
      senderName: localStorage.getItem("username"),
      receiverName: name,
      type: type,
    });
  };
  return (
    <>
      <Container>
        <Top>
          <Avatar src={avatar} />
          <Name>{name}</Name>
        </Top>
        <Center>
          <Img src={img} />
        </Center>
        <Bottom>
          <React>
            <ReactItem
              onClick={() => {
                setLiked(!liked);
                !liked && handleReact("like");
              }}
            >
              {liked ? (
                <i className="fa-solid fa-heart" style={{ color: "red" }}></i>
              ) : (
                <i className="fa-regular fa-heart"></i>
              )}
            </ReactItem>
            <ReactItem onClick={() => handleReact("share")}>
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </ReactItem>
          </React>
        </Bottom>
      </Container>
    </>
  );
};

export default Card;
