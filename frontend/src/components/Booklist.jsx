import "./BookList.css"
function BookList({ books }) {
  return (
    <section className="container my-5">
      <h2>Available Books</h2>
      <p>Explore books shared by our community.</p>

      <div className="row g-4">
        {books.map((book) => (
          <div className="col-md-4" key={book.id}>
            <div className="card bookcard h-100 p-3">
              <h5>{book.title}</h5>
              <p>By {book.author}</p>
              <p>Category: {book.category}</p>
              <p>Type: {book.type}</p>

              <p>
                Price: {book.price === 0 ? "Free" : `₹${book.price}`}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BookList;
