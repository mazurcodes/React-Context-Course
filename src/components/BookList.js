import React, { useContext } from "react";
import styled from "styled-components";
import { ThContext } from "../contexts/ThContext";
import { BookContext } from "../contexts/BookContext";

function BookList() {
  const {isLightTheme, light, dark} = useContext(ThContext);
  const theme = isLightTheme ? light : dark;
  // console.log(BookContext);
  const {books} = useContext(BookContext);

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

  const listOfBooks = books.map((book) => <Li key={book.id}>{book.title}</Li>);
  return (
    <BookListComp>
      <Ul>
        {listOfBooks}
      </Ul>
    </BookListComp>
  );
}

export default BookList;
