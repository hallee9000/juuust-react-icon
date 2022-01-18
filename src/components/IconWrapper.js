import React from 'react';
import styled from 'styled-components';

const IconWrapper = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  svg{
    margin: 8px 0;
  }
  
  span {
    line-height: '30px'
  }
`

export default ({children}) =>
  <IconWrapper>
    { children }
  </IconWrapper>
