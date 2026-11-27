import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "./ListBook.css";
import { useState } from "react";
function ListBook() {
   const [imagePreview,setImagePreview]=useState(null);
   function handleImageChange(event) {
  const file = event.target.files[0];

  if (file) {
    setImagePreview(URL.createObjectURL(file));
  }
}
  return (
    <div>
      <Header />

      <div className="container-fluid mt-4">
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-2">
            <Sidebar />
          </div>

          {/* Main Content */}
          <div className="col-md-10">
            <div className="list-book-container">
              <h2>List Your Book</h2>
              <p>Give your book a new home. Share it with the community!</p>

              <div className="list-book-card">
                <h4>Book Information</h4>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label>Book Title</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. Atomic Habits"
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label>Author</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter author name"
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label>Category</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. Self-Help"
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label>Listing Type</label>
                    <select className="form-select">
                      <option value="">Select listing type</option>
                      <option value="Exchange">Exchange</option>
                      <option value="Donation">Donation</option>
                      <option value="Selling">Selling</option>
                    </select>
                  </div>

                  <div className="col-12 mb-3">
                    <label>Description</label>
                    <textarea
                      className="form-control"
                      rows="4"
                      placeholder="Tell us something about your book..."
                    />
                  </div>

                  <div className="col-12 mb-3">
                    <label htmlFor="image">Book Cover Image</label>

                    <div className="image-upload">
                      <input
                        type="file"
                        id="image"
                        className="form-control"
                        accept="image/*"
                        onChange={handleImageChange}
                      />
                      <p className="mt-2">
                        Upload a clear picture of your book cover.
                      </p>
                      {imagePreview && (
                        <div className="mt-3">
                          <img src={imagePreview} alt="Book Preview" width="150" />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label>Price (₹)</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Enter price"
                      min={0}
                    />
                  </div>
                </div>

                <button className="add-book-btn">Add Book</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListBook;
