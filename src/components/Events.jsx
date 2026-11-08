import React, { useState } from "react";
import { Link } from "react-router-dom";

function Events() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const events = [
    {
      id: 1,
      name: "Music Festival",
      category: "Music",
      date: "November 15, 2026",
      location: "Beirut",
      price: "$25",
      image:
        "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800",
      time: "7:00 PM - 11:00 PM",
      description:
        "Enjoy an amazing night of live music, great performances, and unforgettable memories.",
    },
    {
      id: 2,
      name: "Technology Conference",
      category: "Technology",
      date: "November 20, 2026",
      location: "Tripoli",
      price: "$15",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
      time: "9:00 AM - 5:00 PM",
      description:
        "Discover the latest technology trends and connect with developers and professionals.",
    },
    {
      id: 3,
      name: "Art Exhibition",
      category: "Art",
      date: "November 25, 2026",
      location: "Beirut",
      price: "$10",
      image:
        "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?w=800",
      time: "4:00 PM - 9:00 PM",
      description:
        "Explore creative artwork and discover talented artists in an inspiring environment.",
    },
    {
      id: 4,
      name: "Football Tournament",
      category: "Sports",
      date: "December 2, 2026",
      location: "Tripoli",
      price: "$20",
      image:
        "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800",
      time: "3:00 PM - 8:00 PM",
      description:
        "Watch exciting football matches and enjoy an unforgettable sports experience.",
    },
    {
      id: 5,
      name: "Summer Beach Party",
      category: "Music",
      date: "December 5, 2026",
      location: "Batroun",
      price: "$30",
      image:
        "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800",
      time: "6:00 PM - 12:00 AM",
      description:
        "Enjoy music, dancing, and an amazing party next to the Mediterranean Sea.",
    },
    {
      id: 6,
      name: "Business Innovation Summit",
      category: "Technology",
      date: "December 10, 2026",
      location: "Beirut",
      price: "$40",
      image:
        "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800",
      time: "10:00 AM - 4:00 PM",
      description:
        "Meet entrepreneurs and discover new ideas, business opportunities, and innovations.",
    },
    {
      id: 7,
      name: "Photography Workshop",
      category: "Art",
      date: "December 15, 2026",
      location: "Tripoli",
      price: "$15",
      image:
        "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800",
      time: "2:00 PM - 6:00 PM",
      description:
        "Learn photography techniques and improve your creative skills with professionals.",
    },
    {
      id: 8,
      name: "Basketball Championship",
      category: "Sports",
      date: "December 20, 2026",
      location: "Beirut",
      price: "$20",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800",
      time: "5:00 PM - 9:00 PM",
      description:
        "Watch exciting basketball games and support your favorite teams.",
    },
    {
      id: 9,
      name: "Live Jazz Night",
      category: "Music",
      date: "December 25, 2026",
      location: "Byblos",
      price: "$35",
      image:
        "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800",
      time: "8:00 PM - 11:00 PM",
      description:
        "Experience a relaxing evening with live jazz music and talented musicians.",
    },
    {
      id: 10,
      name: "Creative Design Workshop",
      category: "Art",
      date: "December 28, 2026",
      location: "Beirut",
      price: "$20",
      image:
        "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800",
      time: "11:00 AM - 3:00 PM",
      description:
        "Explore your creativity and learn new design techniques in an interactive workshop.",
    },
  ];

  const filteredEvents = events.filter((event) => {
    const matchesSearch = event.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory = category === "All" || event.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="events-page">
      <div className="events-header">
        <span className="section-label">DISCOVER EXPERIENCES</span>
        <h1>Find Your Next Experience</h1>
        <p>Explore exciting events, meet new people, and create memories.</p>
      </div>

      <div className="events-search">
        <input
          type="text"
          placeholder="Search events..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="category-buttons">
        {["All", "Music", "Technology", "Art", "Sports"].map((item) => (
          <button
            key={item}
            className={category === item ? "active-category" : ""}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="events-results">
        <h2>Upcoming Events</h2>
        <p>{filteredEvents.length} events available</p>
      </div>

      <div className="event-container">
        {filteredEvents.map((event) => (
          <div className="event-card" key={event.id}>
            <div className="pro-event-image">
              <img src={event.image} alt={event.name} />

              <span className="pro-event-category">{event.category}</span>

              <span className="pro-event-price">{event.price}</span>
            </div>

            <div className="pro-event-content">
              <p className="pro-event-date">📅 {event.date}</p>

              <h3>{event.name}</h3>

              <p className="pro-event-location">📍 {event.location}, Lebanon</p>

              <div className="pro-event-bottom">
                <div>
                  <small>Starting from</small>
                  <h3>{event.price}</h3>
                </div>

                <Link to={`/details/${event.id}`}>View Details →</Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <p className="no-events">No events found. Try another search.</p>
      )}
    </div>
  );
}

export default Events;
