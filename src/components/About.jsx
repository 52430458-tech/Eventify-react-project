import React from "react";
import { Link } from "react-router-dom";

function About() {
  const pastEvents = [
    {
      name: "Music Festival",
      location: "Beirut, Lebanon",
      image:
        "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=700",
      description:
        "An unforgettable night filled with live music and amazing performances.",
    },
    {
      name: "Technology Conference",
      location: "Tripoli, Lebanon",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=700",
      description:
        "Bringing technology enthusiasts and professionals together.",
    },
    {
      name: "Art Exhibition",
      location: "Beirut, Lebanon",
      image:
        "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?w=700",
      description: "Celebrating creativity and showcasing talented artists.",
    },
    {
      name: "Summer Beach Party",
      location: "Batroun, Lebanon",
      image:
        "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=700",
      description:
        "A summer celebration with music, lights, and great memories.",
    },
  ];

  return (
    <div className="about-page">
      <div className="about-header">
        <span className="section-label">WHO WE ARE</span>
        <h1>About Eventify</h1>
        <p>We bring people together through unforgettable experiences.</p>
      </div>

      <div className="about-content">
        <div className="about-text">
          <h2>Creating Moments That Matter</h2>
          <p>
            Eventify is a platform dedicated to discovering and organizing
            amazing events. From music festivals to technology conferences, we
            help people connect and create unforgettable memories.
          </p>
          <p>
            Our goal is to make finding and attending events simple, exciting,
            and accessible to everyone.
          </p>
          <Link to="/events" className="about-btn">
            Explore Events
          </Link>
        </div>

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800"
            alt="Event audience"
          />
        </div>
      </div>

      <div className="past-events-section">
        <span className="section-label">OUR EXPERIENCE</span>
        <h2>Our Events in Action</h2>
        <p className="past-events-intro">
          A look back at the experiences and moments we create.
        </p>

        <div className="past-events-grid">
          {pastEvents.map((event, index) => (
            <div className="past-event-card" key={index}>
              <img src={event.image} alt={event.name} />

              <div className="past-event-info">
                <h3>{event.name}</h3>
                <span>📍 {event.location}</span>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mission-section">
        <h2>Our Mission</h2>
        <p>
          To connect people through meaningful events and make every experience
          memorable.
        </p>
      </div>

      <div className="about-stats">
        <div className="stat-box">
          <h2>100+</h2>
          <p>Events Organized</p>
        </div>
        <div className="stat-box">
          <h2>500+</h2>
          <p>Happy Attendees</p>
        </div>
        <div className="stat-box">
          <h2>20+</h2>
          <p>Event Partners</p>
        </div>
      </div>
    </div>
  );
}

export default About;
