import React from 'react';
import styled from 'styled-components'
import * as icons from './icons'
import Header from './components/Header'
import IconWrapper from './components/IconWrapper'
import { useState } from 'react';

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

const Search = styled.input`
display: block;
width: 30%;
line-height: 40px;
border: 3px solid #444;
border-radius: 7px;
margin: 32px auto;
font-family: sans-serif;
text-indent: 10px;
`

function List() {

  const iconArray = Object.keys(icons)
    .map((key, index) => {
      const Icon = icons[key]
      return {
        name: key,
        icon: Icon
      }
    })

  const [iconsList, setIconList] = useState(iconArray);

  const filterIconList = (e) => {

    let filteredIconList = iconArray.filter(({ name }) => {
      return name.toLowerCase().includes(e.target.value.toLowerCase())
    });

    setIconList(filteredIconList)
  }

  return (
    <div>
      <Header/>
      <Search type="text" onChange={filterIconList} placeholder="Search"/>
      <Container>
        {/* <NotificationOffeDuotoneF/> */}
        {
          iconsList.map(({icon, name}, index) => {
              const Icon = icon;

              return <li key={index}>
                <IconWrapper>
                  <Icon size="60" color="#333"/>
                  <span>{name}</span>
                </IconWrapper>
              </li>
            })
        }
      </Container>
    </div>
  )
}

export default List;
