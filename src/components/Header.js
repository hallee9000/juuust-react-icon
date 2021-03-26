import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  font-family: sans-serif;
  padding: 0 40px;
  background-color: #4400FF;
  color: white;

  h1{
    margin: 0;
    padding: 20px;
  }
`

export default () =>
  <Header>
    <h1>Shift Icons</h1>
  </Header>
