import styled from "styled-components";

const Container = styled.div`
  height: 10%;
  background-color: #111;
  color: lightgray;
`;
const Wrapper = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
`;
const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
`;
const ListItem = styled.li`
  margin-right: 2rem;
  cursor: pointer;
`;
const Copyright = styled.span`
  font-weight: bold;
`;
const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <List>
          <ListItem>Guide</ListItem>
          <ListItem>Support</ListItem>
          <ListItem>API</ListItem>
          <ListItem>Community</ListItem>
        </List>
        <Copyright>Lama Dev </Copyright>
      </Wrapper>
    </Container>
  );
};

export default Footer;
