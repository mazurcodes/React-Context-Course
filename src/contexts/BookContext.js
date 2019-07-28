import React, { useState, createContext } from 'react'

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    {title: "the way of the king", id: 1},
    {title: "the name of the wind", id: 2},
    {title: "the final empire", id: 3},
    {title: "the final empire", id: 4},
    {title: "the final empire", id: 5},
  ])
  const addBook = (title) => {
    const id = Date.now();
    setBooks([...books, {title, id}]);
  }
  return (
    <BookContext.Provider value={{books, addBook}}>
      {props.children}
    </BookContext.Provider>
  )
}

export default BookContextProvider;