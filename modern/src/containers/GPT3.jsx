import React from "react";
import styled from "styled-components";
import { customCss, phone } from "../responsive";
import Feature from "../components/Feature";
import { featureData } from "../data";

const Container = styled.div`
  margin: 0rem 6rem;
  padding: 6rem 3rem;
  border-radius: 5px;
  ${phone({ margin: "0 2rem" })}
  background: var(--color-footer);

  /* ff 3.6+ */
  background: -moz-radial-gradient(
    circle at 30% -100%,
    #042c54 25%,
    rgba(4, 44, 84, 1) 85%,
    rgba(27, 120, 222, 1) 100%
  );

  /* safari 5.1+,chrome 10+ */
  background: -webkit-radial-gradient(
    circle at 30% -100%,
    #042c54 25%,
    rgba(4, 44, 84, 1) 85%,
    rgba(27, 120, 222, 1) 100%
  );

  /* opera 11.10+ */
  background: -o-radial-gradient(
    circle at 30% -100%,
    #042c54 25%,
    rgba(4, 44, 84, 1) 85%,
    rgba(27, 120, 222, 1) 100%
  );

  /* ie 10+ */
  background: -ms-radial-gradient(
    circle at 30% -100%,
    #042c54 25%,
    rgba(4, 44, 84, 1) 85%,
    rgba(27, 120, 222, 1) 100%
  );

  /* global 92%+ browsers support */
  background: radial-gradient(
    circle at 30% -100%,
    #042c54 25%,
    rgba(4, 44, 84, 1) 85%,
    rgba(27, 120, 222, 1) 100%
  );

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
const WrapperTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 4rem 0 8rem 0;
  ${phone({ flexDirection: "column" })}
`;
const Title = styled.span`
  ${customCss({ color: "gradient-text" })};
  font-size: 34px;
  line-height: 45px;
  font-weight: 800;

  font-family: var(--font-family);
  
`;
const Text = styled.span`
  color: var(--color-subtext);
  font-weight: 500;

  line-height: 30px;
  cursor: pointer;
  font-size: 16px;

  font-family: var(--font-family);
`;
const WrapperFeature = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: space-between;
  margin-right: -4rem;
`;
const Wrapper = styled.div`
  flex: 1;
  &:first-child{
  ${phone({ marginBottom: "2rem", textAlign: "center" })}
  }
  &:last-child {
    text-align: right;
  }
`;
const GPT3 = () => {
  return (
    <Container id="gpt3">
      <Feature
        title={featureData.data1.title}
        desc={featureData.data1.desc}
        direction="row"
      />
      <WrapperTitle>
        <Wrapper>
          <Title>The possibilities are beyond your imagination</Title>
        </Wrapper>
        <Wrapper>
          <Text>Explore The Library</Text>
        </Wrapper>
      </WrapperTitle>
      <WrapperFeature>
        <Feature
          title={featureData.data2.title}
          desc={featureData.data2.desc}
        />
        <Feature
          title={featureData.data3.title}
          desc={featureData.data3.desc}
        />
        <Feature
          title={featureData.data4.title}
          desc={featureData.data4.desc}
        />
      </WrapperFeature>
    </Container>
  );
};

export default GPT3;
