import React from 'react';
import styled from 'styled-components';

const IconWrapper = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  span {
    line-height: 50px
  }
`

export default ({children}) =>
  <IconWrapper>
    { children }
  </IconWrapper>
