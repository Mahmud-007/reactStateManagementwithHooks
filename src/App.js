import React from "react";

import BookContextProvider from "./context/BookContext";
import Navbar from "./componenets/Navbar";
import BookList from "./componenets/BookList";
import BookForm from "./componenets/BookForm";
function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <BookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
