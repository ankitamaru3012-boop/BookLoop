import "./Sidebar.css";
import { Link } from "react-router-dom"; 

function Sidebar() {
  return (
    <aside className="sidebar">
      <h5>Explore</h5>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/browse-books">Browse Books</Link>
        </li>
        <li>Exchange</li>
        <li>Donation</li>
        <li>Low-cost Selling</li>
        <li>List a Book</li>
        <li>My Requests</li>
      </ul>
    </aside>
  );
}

export default Sidebar;
