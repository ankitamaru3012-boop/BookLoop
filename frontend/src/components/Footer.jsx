
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div>
          <h3>BookLoop</h3>
          <p>Give Books a Second Life.</p>
          <p>
            Discover, exchange and share books
            with your community.
          </p>
        </div>

        <div>
          <h5>Explore</h5>
          <p>Browse Books</p>
          <p>Exchange</p>
          <p>Donation</p>
          <p>Low-cost Selling</p>
        </div>

        <div>
          <h5>Quick Links</h5>
          <p>List a Book</p>
          <p>My Requests</p>
          <p>About Us</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 BookLoop. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
