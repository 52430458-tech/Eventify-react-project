import React from "react";
import { useParams, Link } from "react-router-dom";

function EventDetails() {
  const { id } = useParams();

  const events = [
    {
      id: 1,
      name: "Music Festival",
      category: "Music",
      date: "November 15, 2026",
      location: "Beirut",
      price: "$25",
      time: "7:00 PM - 11:00 PM",
      image:
        "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1200",
      description:
        "Enjoy an amazing night of live music, great performances, and unforgettable memories. Join music lovers for an exciting evening filled with talented artists, amazing sounds, and an unforgettable atmosphere.",
      organizer: "Eventify Team",
    },
    {
      id: 2,
      name: "Technology Conference",
      category: "Technology",
      date: "November 20, 2026",
      location: "Tripoli",
      price: "$15",
      time: "9:00 AM - 5:00 PM",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200",
      description:
        "Discover the latest technology trends and connect with developers and professionals. Learn about innovation, software development, artificial intelligence, and the future of technology.",
      organizer: "Eventify Team",
    },
    {
      id: 3,
      name: "Art Exhibition",
      category: "Art",
      date: "November 25, 2026",
      location: "Beirut",
      price: "$10",
      time: "4:00 PM - 9:00 PM",
      image:
        "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?w=1200",
      description:
        "Explore creative artwork and discover talented artists in an inspiring environment. Experience beautiful paintings, creative installations, and unique artistic expressions.",
      organizer: "Eventify Team",
    },
    {
      id: 4,
      name: "Football Tournament",
      category: "Sports",
      date: "December 2, 2026",
      location: "Tripoli",
      price: "$20",
      time: "3:00 PM - 8:00 PM",
      image:
        "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=1200",
      description:
        "Watch exciting football matches and enjoy an unforgettable sports experience. Support your favorite teams and enjoy an exciting day of competition.",
      organizer: "Eventify Team",
    },
    {
      id: 5,
      name: "Summer Beach Party",
      category: "Music",
      date: "December 5, 2026",
      location: "Batroun",
      price: "$30",
      time: "6:00 PM - 12:00 AM",
      image:
        "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=1200",
      description:
        "Enjoy a summer celebration with music, lights, dancing, and great memories. Spend an amazing evening enjoying music and a beautiful beach atmosphere.",
      organizer: "Eventify Team",
    },
    {
      id: 6,
      name: "Business Innovation Summit",
      category: "Technology",
      date: "December 10, 2026",
      location: "Beirut",
      price: "$40",
      time: "10:00 AM - 4:00 PM",
      image:
        "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1200",
      description:
        "Meet business leaders, discover innovative ideas, and learn about the future of technology and business. Connect with professionals and explore new opportunities.",
      organizer: "Eventify Team",
    },
    {
      id: 7,
      name: "Photography Workshop",
      category: "Art",
      date: "December 15, 2026",
      location: "Tripoli",
      price: "$15",
      time: "2:00 PM - 6:00 PM",
      image:
        "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1200",
      description:
        "Improve your photography skills and learn creative techniques. Discover how to capture beautiful moments and develop your photography style.",
      organizer: "Eventify Team",
    },
    {
      id: 8,
      name: "Basketball Championship",
      category: "Sports",
      date: "December 20, 2026",
      location: "Beirut",
      price: "$20",
      time: "5:00 PM - 9:00 PM",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1200",
      description:
        "Watch exciting basketball games and support your favorite teams in an unforgettable championship. Enjoy the energy, competition, and excitement of live basketball.",
      organizer: "Eventify Team",
    },
    {
      id: 9,
      name: "Live Jazz Night",
      category: "Music",
      date: "December 25, 2026",
      location: "Byblos",
      price: "$35",
      time: "8:00 PM - 11:00 PM",
      image:
        "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=1200",
      description:
        "Experience a beautiful evening of live jazz music, talented musicians, and a relaxing atmosphere. Enjoy an unforgettable night of great performances.",
      organizer: "Eventify Team",
    },
    {
      id: 10,
      name: "Creative Design Workshop",
      category: "Art",
      date: "December 28, 2026",
      location: "Beirut",
      price: "$20",
      time: "11:00 AM - 3:00 PM",
      image:
        "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1200",
      description:
        "Explore your creativity, learn new design skills, and create your own artistic projects. Discover new techniques and get inspired by other creative people.",
      organizer: "Eventify Team",
    },
  ];

  const event = events.find((item) => item.id === Number(id));

  if (!event) {
    return (
      <div className="details-page">
        <div className="event-not-found">
          <h1>Event Not Found</h1>
          <p>Sorry, we couldn't find this event.</p>
          <Link to="/events" className="details-back-btn">
            ← Back to Events
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="details-page">
      <div className="details-main">
        <div className="details-breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/events">Events</Link>
          <span>/</span>
          <span>{event.name}</span>
        </div>

        <div className="details-hero">
          <img src={event.image} alt={event.name} />

          <div className="details-hero-overlay">
            <span className="details-category">{event.category}</span>

            <h1>{event.name}</h1>

            <p>Make memories. Experience something amazing.</p>
          </div>
        </div>

        <div className="details-layout">
          <div className="details-left">
            <div className="details-description">
              <span className="details-small-title">ABOUT THIS EVENT</span>

              <h2>Event Overview</h2>

              <p>{event.description}</p>
            </div>

            <div className="details-information">
              <span className="details-small-title">EVENT INFORMATION</span>

              <h2>Everything You Need to Know</h2>

              <div className="details-info-grid">
                <div className="details-info-card">
                  <div className="details-info-icon">📅</div>
                  <div>
                    <span>Date</span>
                    <h3>{event.date}</h3>
                  </div>
                </div>

                <div className="details-info-card">
                  <div className="details-info-icon">🕒</div>
                  <div>
                    <span>Time</span>
                    <h3>{event.time}</h3>
                  </div>
                </div>

                <div className="details-info-card">
                  <div className="details-info-icon">📍</div>
                  <div>
                    <span>Location</span>
                    <h3>{event.location}, Lebanon</h3>
                  </div>
                </div>

                <div className="details-info-card">
                  <div className="details-info-icon">👤</div>
                  <div>
                    <span>Organizer</span>
                    <h3>{event.organizer}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="details-booking-card">
            <span className="details-small-title">TICKET INFORMATION</span>

            <h2>Join This Event</h2>

            <p className="details-booking-description">
              Don't miss this experience. Get in touch with us about your
              ticket.
            </p>

            <div className="details-price">
              <span>Ticket Price</span>
              <h1>{event.price}</h1>
            </div>

            <Link to="/contact" className="details-book-btn">
              Book Your Ticket →
            </Link>

            <p className="details-booking-note">
              Contact our team for booking information.
            </p>

            <div className="details-booking-divider"></div>

            <div className="details-booking-feature">
              <span>✓</span>
              Event information
            </div>

            <div className="details-booking-feature">
              <span>✓</span>
              Direct support
            </div>

            <div className="details-booking-feature">
              <span>✓</span>
              Easy contact
            </div>
          </div>
        </div>

        <Link to="/events" className="details-back-btn">
          ← Back to All Events
        </Link>
      </div>
    </div>
  );
}

export default EventDetails;
