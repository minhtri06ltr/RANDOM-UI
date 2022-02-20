import React from "react";
import styled from "styled-components";
import Feature from "../components/Feature";
import { customCss, phone, pc, ipad } from "../responsive";
import { featureData } from "../data";

const Container = styled.div`
  padding: 0 6rem;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  margin-top: 15rem;
  ${pc({ flexDirection: "column" })}
  ${phone({ padding: "0 2rem" })}
`;
const Wrapper = styled.div`
  display: flex;

  flex-direction: column;
  &:first-child {
    margin-right: 8rem;
    flex: 4;
    margin-bottom: 8rem;
    ${ipad({ marginRight: "0" })};
  }
  &:last-child {
    margin-right: -3rem;
    flex: 6;
  }
`;
const Title = styled.span`
  ${customCss({ color: "gradient-text" })};
  line-height: 45px;
  font-weight: 800;
  font-size: 34px;
  display: block;
  margin-bottom: 3rem;
  font-family: var(--font-family);
  ${ipad({ textAlign: "center" })};
`;
const Text = styled.span`
  color: var(--color-subtext);
  font-weight: 500;

  line-height: 30px;
  cursor: pointer;
  font-size: 16px;

  font-family: var(--font-family);
  ${ipad({ textAlign: "center" })};
`;
const WrapperText = styled.div``;
const Features = () => {
  return (
    <Container>
      <Wrapper>
        <WrapperText>
          <Title>
            The Future is Now and You Just Need To Realize It. Step into Future
            Today & Make it Happen
          </Title>
        </WrapperText>
        <WrapperText>
          <Text>Request Eerly Access to Get Started</Text>
        </WrapperText>
      </Wrapper>
      <Wrapper>
        <Feature
          title={featureData.data5.title}
          desc={featureData.data5.desc}
          direction="row"
        />
        <Feature
          title={featureData.data6.title}
          desc={featureData.data6.desc}
          direction="row"
        />
        <Feature
          title={featureData.data7.title}
          desc={featureData.data7.desc}
          direction="row"
        />
        <Feature
          title={featureData.data8.title}
          desc={featureData.data8.desc}
          direction="row"
        />
      </Wrapper>
    </Container>
  );
};

export default Features;
