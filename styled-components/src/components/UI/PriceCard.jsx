import styled from "styled-components";

const Container = styled.div`
  padding: 2rem;
  box-shadow: 5px 1px 24px -4px rgba(0, 0, 0, 0.33);
  -webkit-box-shadow: 5px 1px 24px -4px rgba(0, 0, 0, 0.33);
  -moz-box-shadow: 5px 1px 24px -4px rgba(0, 0, 0, 0.33);
  background-color: white;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;

  align-items: center;
`;
const PriceContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Price = styled.span`
  font-weight: bold;
  font-size: 7rem;
  transform: translateY(-12%);
`;
const Type = styled.button`
  padding: 1rem;
  margin: 1rem 0rem;
  border: 1.5px solid crimson;
  color: crimson;
  background-color: white;
  border-radius: 2rem;
  cursor: pointer;
`;
const List = styled.ul``;
const ListItem = styled.li`
  margin: 3rem 0;
`;
const Button = styled.button`
  border: none;
  background-color: darkblue;
  color: white;
  font-size: 1.6rem;
  padding: 1.5rem;
  border-radius: 1rem;
  cursor: pointer;
  font-weight: bold;
`;
const PriceCard = ({ price, type }) => {
  return (
    <Container>
      <PriceContainer>
        $<Price>{price}</Price>/month
      </PriceContainer>
      <Type>{type} Plan</Type>
      <List>
        <ListItem>200 Hand-Crafted Templates</ListItem>
        <ListItem>Exclusive Support</ListItem>
        <ListItem>50+ PreBuilt Websites</ListItem>
        <ListItem>Premium Plugins</ListItem>
      </List>
      <Button>Join Now</Button>
    </Container>
  );
};

export default PriceCard;
