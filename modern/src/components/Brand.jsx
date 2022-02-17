import React from "react";
import styled from "styled-components";
import dropbox from "../assets/img/dropbox.png";
import google from "../assets/img/google.png";
import shopify from "../assets/img/shopify.png";
import slack from "../assets/img/slack.png";
import atlassian from "../assets/img/atlassian.png";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 4rem 0;
`;
const Img = styled.img`
  margin: 2rem;
  display: block;
  cursor: pointer;
`;
const Brand = () => {
  return (
    <Container>
      <Img src={google} />
      <Img src={slack} />
      <Img src={atlassian} />
      <Img src={dropbox} />
      <Img src={shopify} />
    </Container>
  );
};

export default Brand;
