import styled from "styled-components";
import { smallPhone } from "../responsive";
import PriceCard from "./UI/PriceCard";

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  ${smallPhone({ flexDirection: "column" })}
`;
const Price = () => {
  return (
    <Container>
      <PriceCard price="10" type="Basic" />
      <PriceCard price="50" type="Premium" />
      <PriceCard price="100" type="Advance" />
    </Container>
  );
};

export default Price;
