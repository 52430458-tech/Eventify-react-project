import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* Hero Section */}

      <div className="hero">
        <div className="hero-content">
          <span className="hero-label">YOUR NEXT EXPERIENCE STARTS HERE</span>

          <h1>
            Discover Events.
            <br />
            Create <span>Memories.</span>
          </h1>

          <p>
            Find amazing events, connect with new people, and experience
            unforgettable moments.
          </p>

          <div className="hero-buttons">
            <Link to="/events" className="hero-btn">
              Explore Events →
            </Link>

            <Link to="/about" className="hero-secondary">
              Learn More
            </Link>
          </div>

          <div className="hero-bottom">
            <div>
              <h3>100+</h3>
              <p>Events</p>
            </div>

            <div>
              <h3>500+</h3>
              <p>Happy Users</p>
            </div>

            <div>
              <h3>20+</h3>
              <p>Categories</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Events */}

      <div className="featured">
        <span className="section-label">DON'T MISS OUT</span>

        <h2>Explore Featured Events</h2>

        <p>Discover exciting experiences and find your next favorite event.</p>

        <div className="event-container">
          {/* Music Festival */}

          <div className="event-card">
            <div className="event-image">
              <img
                src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=700"
                alt="Music festival"
              />

              <span className="event-category">Music</span>
            </div>

            <div className="event-card-content">
              <p className="event-date">NOVEMBER 15, 2026</p>

              <h3>Music Festival</h3>

              <p>
                Enjoy an amazing night filled with live music and unforgettable
                performances.
              </p>

              <Link to="/details/1">View Details →</Link>
            </div>
          </div>

          {/* Technology Conference */}

          <div className="event-card">
            <div className="event-image">
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=700"
                alt="Technology conference"
              />

              <span className="event-category">Technology</span>
            </div>

            <div className="event-card-content">
              <p className="event-date">NOVEMBER 20, 2026</p>

              <h3>Technology Conference</h3>

              <p>
                Discover new innovations, meet professionals, and explore the
                future of technology.
              </p>

              <Link to="/details/2">View Details →</Link>
            </div>
          </div>

          {/* Art Exhibition */}

          <div className="event-card">
            <div className="event-image">
              <img
                src="https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?w=700"
                alt="Art exhibition"
              />

              <span className="event-category">Art</span>
            </div>

            <div className="event-card-content">
              <p className="event-date">NOVEMBER 25, 2026</p>

              <h3>Art Exhibition</h3>

              <p>
                Explore creativity, discover talented artists, and enjoy
                beautiful artwork.
              </p>

              <Link to="/details/3">View Details →</Link>
            </div>
          </div>
        </div>

        <Link to="/events" className="all-events-btn">
          View All Events →
        </Link>
      </div>
    </div>
  );
}

export default Home;
