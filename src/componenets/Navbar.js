import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>The List</h1>
      <p> Number of book in the list: {books.length}</p>
    </div>
  );
};

export default Navbar;
