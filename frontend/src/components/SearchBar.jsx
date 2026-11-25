import "./SearchBar.css";
function SearchBar({ onSearchChange }) {
  return (
    <div className="container my-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search books by title or author..."
              onChange={(e) => onSearchChange(e.target.value)}
            />

            <button className="btn btn-search">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;