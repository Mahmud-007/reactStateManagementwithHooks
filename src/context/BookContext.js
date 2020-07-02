import React, { createContext, useState } from "react";
import uuid from "react-uuid";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Turning Point",
      author: "A P J Abdul Kalam",
    },
    {
      id: 2,
      title: "C programming",
      author: "Tamim Shahriar Subeen",
    },
  ]);
  const addBook = (title, author) => {
    setBooks([...books, { id: uuid(), title, author }]);
  };
  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
