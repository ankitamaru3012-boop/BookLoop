import BookList from "../components/Booklist";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Sidebar from "../components/Sidebar";
import books from "../data/book";
import { useState } from "react";
function BrowseBooks() {
     const [searchTerm,setSearchTerm]=useState("");
  const filteredBooks = books.filter((book) =>
  book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
  book.author.toLowerCase().includes(searchTerm.toLowerCase())
);
  return (
    <div>
      <Header></Header>
     <SearchBar onSearchChange={setSearchTerm} />
      <div className="container-fluid mt-4">
        <div className="row">
  
          <div className="col-md-2 align-self-start">
            <Sidebar />
          </div>
          <div className="col-md-10">
            <BookList books={filteredBooks}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrowseBooks;
