import React, { useState, useEffect } from "react";
import { useChatContext } from "stream-chat-react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 0.4rem;
`;
const Input = styled.input`
  --text-color: white;
  border-radius: 5px;
  margin: 0 auto;
  width: 90%;
  display: block;
  background: url("https://img.icons8.com/hands/50/000000/experimental-search-hands.png")
    no-repeat scroll 0px 0px;
  padding: 1rem 1rem 1rem 3rem;
  outline: none;
  border: 1px solid var(--text-color);
  color: var(--text-color);
  font-weight: 500;
  font-size: 1rem;
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: var(--text-color);
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: var(--text-color);
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: var(--text-color);
  }
`;

const ChannelSearch = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const getChannels = async (text) => {
    try {
      //fetch channel
    } catch (error) {
      setQuery("");
      setLoading(false);
    }
  };
  const searchHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    setQuery(e.target.value);
    getChannels(e.target.value);
  };
  return (
    <Container>
      <Input type="text" placeholder="Search" />
    </Container>
  );
};

export default ChannelSearch;
