
import "./BookList.css";

function BookList({ books }) {
  return (
    <section className="container my-2">
      <h2 className="book-section-title">Books For You</h2>
      <p className="book-section-subtitle">
        Discover your next favourite read from our community.
      </p>

      <div className="row g-4">
        {books.map((book) => (
          <div className="col-md-4" key={book.book_id}>
            <div className="bookcard h-100">

              <div className="book-cover">
                <span className="book-category">
                  {book.category}
                </span>
                <div className="book-cover-icon">📖</div>
              </div>

              <div className="book-info">
                <h5>{book.title}</h5>
                <p className="book-author">By {book.author}</p>

                <div className="book-type">
                  {book.book_type}
                </div>

                <div className="book-bottom">
                  <span className="book-price">
                   {Number(book.price) === 0 ? "Free" : `₹${book.price}`}
                  </span>
                  <span className="book-label">Available</span>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BookList;
