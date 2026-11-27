import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BrowseBooks from "./pages/BrowseBooks";
import ListBook from "./pages/ListBook";
function App() {
  return (
    <BrowserRouter>
      <div className="bookloop">
        <Routes>
          <Route path="/" element={<Home />} />
         <Route path="/browse-books" element={<BrowseBooks />} />
         <Route path="/list-book" element={<ListBook/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;