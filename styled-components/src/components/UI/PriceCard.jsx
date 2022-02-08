import styled from "styled-components";
import { smallPhone } from "../../responsive";

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
  ${smallPhone({ marginBottom: "1rem", padding: "1rem" })}
`;
const PriceContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Price = styled.span`
  font-weight: bold;
  font-size: 7rem;
  transform: translateY(-12%);
  ${smallPhone({ fontSize: "3rem" })}
`;
const Type = styled.button`
  padding: 1rem;
  margin: 1rem 0rem;
  border: 1.5px solid crimson;
  color: crimson;
  background-color: white;
  border-radius: 2rem;
  cursor: pointer;
  ${smallPhone({ display: "none" })}
`;
const List = styled.ul``;
const ListItem = styled.li`
  margin: 3rem 0;
  ${smallPhone({ margin: "1rem 0", fontSize: "1.2rem" })}
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
  ${smallPhone({ padding: "1rem", fontSize: "1.2rem" })}
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
