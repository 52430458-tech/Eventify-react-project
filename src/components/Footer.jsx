import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            EVENT<span>IFY</span>
          </Link>

          <p>
            Discover amazing events, connect with people, and create
            unforgettable memories.
          </p>

          <div className="footer-socials">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Explore</h3>

          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/events">All Events</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div className="footer-contact">
          <h3>Get In Touch</h3>

          <p>✉ support@eventify.com</p>
          <p>📍 Tripoli, Lebanon</p>
          <p>Let's create something memorable together.</p>

          <Link to="/contact" className="footer-contact-btn">
            Contact Us →
          </Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Eventify. All rights reserved.</p>

        <p>Designed to create unforgettable experiences.</p>
      </div>
    </footer>
  );
}

export default Footer;
