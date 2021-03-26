import React from 'react';
import styled from 'styled-components'
import * as icons from './icons'
import Header from './components/Header'
import IconWrapper from './components/IconWrapper'
// import {NotificationOffeDuotoneF} from './icons'


const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: stretch;
  align-items: stretch;
  margin: 0;
  padding: 0%;
  list-style: none;
  font-family: sans-serif;
`

class List extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Container>
          {/* <NotificationOffeDuotoneF/> */}
          {
            Object.keys(icons)
              .map((key, index) => {
                const Icon = icons[key]
                return <li key={index}>
                  <IconWrapper>
                    <Icon size="60"/>
                    <span>{key}</span>
                  </IconWrapper>
                </li>
              })
          }
        </Container>
      </div>
    )
  }
}

export default List;
