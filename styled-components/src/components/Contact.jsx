import styled from "styled-components";
import { smallPhone } from "../responsive";
const Container = styled.div`
  height: 90%;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  padding: 2rem;
  align-items: center;
  justify-content: center;
  ${smallPhone({ flexDirection: "column", padding: "0" })}
`;
const FormContainer = styled.div`
  width: 50%;
  ${smallPhone({ width: "100%" })}
`;
const Title = styled.h1`
  margin: 0rem 0rem 5rem 10rem;
  ${smallPhone({
    margin: "5rem 0rem 2rem 0rem",
    display: "block",
    textAlign: "center",
  })}
`;
const Form = styled.form`
  height: 25rem;
  display: flex;
  align-items: center;

  justify-content: center;
  ${smallPhone({ flexDirection: "column" })}
`;
const LeftForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-right: 3rem;
  justify-content: space-between;
  ${smallPhone({ margin: "1rem 0" })}
`;
const RightForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Input = styled.input`
  width: 20rem;
  padding: 2rem;
  ${smallPhone({ padding: "1rem", marginBottom: "1rem", border: "1px solid" })}
`;
const TextArea = styled.textarea`
  width: 20rem;
  padding: 2rem;
  height: 60%;
  ${smallPhone({ border: "1px solid" })}
`;
const Button = styled.button`
  border: none;
  padding: 1.5rem 2rem;
  background-color: darkblue;
  color: white;
  font-size: 2rem;

  margin-top: 2rem;
  cursor: pointer;
  border-radius: 2rem;
  ${smallPhone({ padding: "0.5rem", fontSize: "1.4rem" })}
`;
const AddressContainer = styled.div`
  width: 50%;
  display: flex;
  margin: 10rem 0rem 0rem 15rem;
  align-items: stretch;
  position: relative;
  flex-direction: column;
  ${smallPhone({ margin: "6rem 0 0 0", width: "100%", alignItems: "center" })}
`;
const AddressItem = styled.div`
  display: flex;
  margin-bottom: 5rem;
  align-items: center;
`;
const Icon = styled.img`
  margin-right: 2rem;
  width: 2rem;
`;
const Text = styled.span`
  font-size: 2rem;
  margin-right: 1.5rem;
  ${smallPhone({ fontSize: "1.6rem" })}
`;
const Blob = styled.svg`
  position: absolute;
  z-index: -1;
  top: 0;
  transform: translate(-15%, -25%) scale(1.3);
  left: 0;
  opacity: 0.4;
  ${smallPhone({ transform: "translate(3%, -16%) scale(1.1)" })}
`;
const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <FormContainer>
          <Title>
            Questions? <br /> Let's Get In Touch
          </Title>
          <Form>
            <LeftForm>
              <Input placeholder="Your name" />
              <Input placeholder="Your email" />
              <Input placeholder="Subject" />
            </LeftForm>
            <RightForm>
              <TextArea placeholder="Your message" />
              <Button>Send</Button>
            </RightForm>
          </Form>
        </FormContainer>
        <AddressContainer>
          <AddressItem>
            <Icon src="https://github.com/safak/youtube/blob/react-website/src/img/map.png?raw=true" />
            <Text>2/19 Hoc Mon, TP HCM, VN</Text>
          </AddressItem>
          <AddressItem>
            <Icon src="https://github.com/safak/youtube/blob/react-website/src/img/phone.png?raw=true" />
            <Text>+84 3679 0 7374</Text>
          </AddressItem>
          <AddressItem>
            <Icon src="https://github.com/safak/youtube/blob/react-website/src/img/send.png?raw=true" />
            <Text>minhtri03hll@gmail.com</Text>
          </AddressItem>
          <Blob viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#FF0066"
              d="M34.5,-70.2C37.2,-58.1,27,-33.9,20.2,-20.1C13.3,-6.4,10,-3.2,18,4.6C26,12.4,45.3,24.8,46.1,28.2C47,31.6,29.4,26,18.6,32.1C7.9,38.2,3.9,56.1,-2.5,60.5C-9,64.9,-18,55.9,-24.3,47.2C-30.6,38.5,-34.1,30.1,-42.5,22.3C-51,14.5,-64.4,7.2,-69,-2.7C-73.7,-12.6,-69.6,-25.2,-62.1,-34.5C-54.5,-43.8,-43.3,-49.8,-32.4,-57.2C-21.5,-64.7,-10.7,-73.5,2.6,-78C15.8,-82.4,31.7,-82.4,34.5,-70.2Z"
              transform="translate(100 100)"
            />
          </Blob>
        </AddressContainer>
      </Wrapper>
    </Container>
  );
};

export default Contact;
