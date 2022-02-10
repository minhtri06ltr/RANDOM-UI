import styled from "styled-components";

const Container = styled.div`
  height: 49.5vh;

  margin-bottom: 3rem;
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
const Card = () => {
  return (
    <Container>
      <Top>
        <Avatar src="https://images.unsplash.com/photo-1619443492967-f04dfa229b14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" />
        <Name>John Keller</Name>
      </Top>
      <Center>
        <Img src="https://images.unsplash.com/photo-1464817739973-0128fe77aaa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
      </Center>
      <Bottom>
        <React>
          <ReactItem>
            <i class="fa-regular fa-heart"></i>
          </ReactItem>
          <ReactItem>
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </ReactItem>
        </React>
      </Bottom>
    </Container>
  );
};

export default Card;
