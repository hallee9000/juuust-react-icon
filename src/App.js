import React, { useRef, useState } from "react";
import { message } from "antd";
import styled from "styled-components";

import * as icons from "./index";
import Header from "./components/Header";
import IconWrapper from "./components/IconWrapper";
import "antd/dist/antd.css";

const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-items: stretch;
  align-items: stretch;
  margin: 0;
  padding: 0;
  list-style: none;
  padding-top: 16px;
  box-sizing: border-box;
  max-height: calc(100% - 60px);
  overflow: hidden;
  overflow-y: auto;

  & > li {
    padding-top: 10px;
    box-sizing: border-box;
    cursor: pointer;

    a {
      color: rgb(39, 54, 102) !important;
    }

    span {
      user-select: none;
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.06);
      border-radius: 4px;
    }
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  height: 60px;
  line-height: 60px;
  font-size: 14px;
  padding: 0 40px;
  user-select: none;
  box-sizing: border-box;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.06);

  h1 {
    margin: 0;
  }

  > input {
    border-radius: 4px;
    background-color: #fff;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    height: 28px;
    line-height: 28px;
    outline: none;
    padding: 4px 15px;
    background-image: none;
    color: rgb(39, 54, 102);
    font-size: 12px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

    &::placeholder {
      color: #dcdfe6;
      font-style: italic;
    }
  }
`;

const sortIconKeys = Object.keys(icons).sort();
const List = () => {
  const [query, setQuery] = useState("");
  const iconKeysRef = useRef(sortIconKeys);

  const onQueryChange = (e) => {
    const v = e.target.value;
    setQuery(v);
    iconKeysRef.current = JSON.parse(JSON.stringify(sortIconKeys)).filter(
      (key) => !v || key.toLocaleLowerCase().includes(v.toLocaleLowerCase())
    );
  };

  return (
    <div
      style={{
        height: "100%",
        overflow: "hidden",
      }}
    >
      <HeaderWrapper>
        <Header />
        <input type="text" value={query} onChange={onQueryChange} placeholder="搜索点啥子..." />
      </HeaderWrapper>
      <Container>
        {iconKeysRef.current.map((key, index) => {
          const Icon = icons[key];
          return (
            <li key={index} onClick={() => handleCopyIcon(key)}>
              <IconWrapper>
                <Icon />
                <span>{key}</span>
              </IconWrapper>
            </li>
          );
        })}
      </Container>
    </div>
  );
};

// copy icon
function handleCopyIcon(str) {
  const el = document.createElement("textarea");
  el.value = str;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  message.success(str);
  document.body.removeChild(el);
}

export default List;
