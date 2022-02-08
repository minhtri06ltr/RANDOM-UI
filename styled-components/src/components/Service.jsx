import styled from "styled-components";
import stand from "../assets/img/stand.png";
import Card from "./UI/Card";
import { useState } from "react";
import { smallPhone } from "../responsive";
const Container = styled.div`
  display: flex;
  height: 100%;
  ${smallPhone({ flexDirection: "column" })}
`;
const Left = styled.div`
  width: 50%;
  position: relative;
  ${smallPhone({ display: "none" })}
`;
const Right = styled.div`
  width: 50%;
  ${smallPhone({ width: "100%" })}
`;
const Wrapper = styled.div`
  padding: 5rem;
  display: flex;
  flex-direction: column;
  ${smallPhone({ padding: "2rem" })}
`;
const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
`;
const Desc = styled.p`
  font-size: 2rem;
  margin-top: 2rem;
  color: #555;
`;
const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
`;
const Button = styled.button`
  width: 18rem;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  color: white;
  font-size: 2rem;
  background-color: darkblue;
  padding: 1.5rem;
  margin-top: 5rem;
  display: flex;
  align-items: center;
`;
const Img = styled.img`
  display: ${(props) => props.open && "none"};
  height: 100%;
  margin-left: 10rem;
  margin-top: 0.5rem;
  transform: scale(1.1);
`;
const Video = styled.video`
  display: ${(props) => !props.open && "none"};
  height: 30rem;
  position: absolute;
  bottom: 0;
  left: 10%;
  transform: translateY(-50%);
  box-shadow: -1px 7px 38px -4px rgba(0, 0, 0, 0.67);
  -webkit-box-shadow: -1px 7px 38px -4px rgba(0, 0, 0, 0.67);
  -moz-box-shadow: -1px 7px 38px -4px rgba(0, 0, 0, 0.67);
  ${smallPhone({ left: "1%", height: "23rem" })}
`;
const Icon = styled.img`
  width: 2rem;
  margin-right: 1rem;
`;
const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;
const Service = () => {
  const [open, setOpen] = useState(false);
  const smallScreen = window.screen.width < 479 ? true : false;
  return (
    <Container>
      <Left>
        <Img open={open} src={stand} />
        <Video
          open={open}
          autoPlay
          loop
          controls
          src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761"
        />
      </Left>
      <Right>
        <Wrapper>
          <Title>Simple process to start</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, enim
            porro in error iusto officia cum, ullam minima fugit sit accusamus
            quo nihil blanditiis. Sequi a quisquam aperiam dignissimos tempora
            sint saepe aliquam ad tenetur?
          </Desc>
          <CardContainer>
            <Card />
            <Card />
            <Card />
          </CardContainer>
          <Button onClick={() => setOpen(!open)}>
            <Icon src="https://github.com/safak/youtube/blob/react-website/src/img/play.png?raw=true" />
            How it works
          </Button>
        </Wrapper>
      </Right>
      {smallScreen && open && (
        <Modal onClick={() => setOpen(false)}>
          <Video
            open={open}
            autoPlay
            loop
            controls
            src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761"
          />
        </Modal>
      )}
    </Container>
  );
};

export default Service;
