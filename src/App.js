import React from 'react';
import styled from 'styled-components';
import Header from './components/Header'
import Content from './components/Content'

const GlobalContainer = styled.div `
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("https://images.unsplash.com/photo-1535189043414-47a3c49a0bed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1931&q=80");
  background-size: cover;
  opacity: 0.7;
  color: white;
`

const App = () => {
  return (
    <GlobalContainer>
      <Header></Header>
      <Content></Content>
    </GlobalContainer>
  )
};

export default App;