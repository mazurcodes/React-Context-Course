import React, { Component } from "react";
import styled from "styled-components";
import { ThemeContext } from "../contexts/ThemeContext";

class BookList extends Component {
  static contextType = ThemeContext;
  render() {
    // ************  CODE  ***************
    const {isLightTheme, light, dark} = this.context;
    const theme = isLightTheme ? light : dark;


    // ************ STYLES ***************
    const BookListComp = styled.div`
      padding: 20px;
      margin-bottom: 20px;
      background-color: ${theme.bg};
      color: ${theme.syntax};
    `;
    const Ul = styled.ul`
      list-style: none;
      `;
    const Li = styled.li`
      padding: 10px;
      margin: 10px auto;
      border-radius: 10px;
      background-color: ${theme.ui};
    `;

    return (
      <BookListComp>
        <Ul>
          <Li>the way of the king</Li>
          <Li>the name of the wind</Li>
          <Li>the final empire</Li>
        </Ul>
      </BookListComp>
    );
  }
}
export default BookList;
