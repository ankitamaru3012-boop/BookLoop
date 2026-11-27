
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import books from "../data/book";
import { useState } from "react";
import { useEffect } from "react";
import BookList from "../components/Booklist";
import axios from "axios";
function Home() {
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
  
  console.log(books);
  return (
    
    
    <div className="home-page">
      <Header></Header>
      <SearchBar onSearchChange={setSearchTerm} />
     <div className="container-fluid mt-4">
  <div className="row">
    <div className="col-md-2">
      <Sidebar />
    </div>

    <div className="col-md-10">
      <Hero />
    </div>
  </div>
</div>
<BookList books={filteredBooks} />
    <Footer></Footer>
    </div>
  );
}

export default Home;