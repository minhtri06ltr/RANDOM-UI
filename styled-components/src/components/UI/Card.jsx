import styled from "styled-components";

const Container = styled.div`
  width: 15rem;
  padding: 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 5px 1px 24px -4px rgba(0, 0, 0, 0.33);
  -webkit-box-shadow: 5px 1px 24px -4px rgba(0, 0, 0, 0.33);
  -moz-box-shadow: 5px 1px 24px -4px rgba(0, 0, 0, 0.33);
`;
const Img = styled.img`
  width: 2rem;
`;
const Text = styled.span`
  margin-top: 1rem;
  text-align: center;
`;

const Card = () => {
  return (
    <Container>
      <Img src="https://raw.githubusercontent.com/safak/youtube/react-website/src/img/search.png" />
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. </Text>
    </Container>
  );
};

export default Card;
