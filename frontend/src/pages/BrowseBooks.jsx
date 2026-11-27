import BookList from "../components/Booklist";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
function BrowseBooks() {
     const [books, setBooks] = useState([]);
const [searchTerm, setSearchTerm] = useState(""); 
useEffect(() => {
  axios.get("http://localhost/BookLoop/backend/api/get_books.php")
    .then((response) => {
      setBooks(response.data);
    })
    .catch((error) => {
      console.log("Error fetching books:", error);
    });
}, []);

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
      <Footer></Footer>
    </div>
  );
}

export default BrowseBooks;
