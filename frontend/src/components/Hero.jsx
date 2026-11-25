import "./Hero.css"
function Hero(){

    return(<section className="hero-section">
      <div className="hero-content">
        <h1>Every Book Deserves Another Chapter</h1>

        <p>
          Discover, exchange, donate or sell books.
          Give your old books a new home and find your next favourite read.
        </p>

        <button className="btn btn-search">
          Explore Books
        </button>
      </div>
    </section>
  );

}
export default Hero;