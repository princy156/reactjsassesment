import React from 'react';
import { Link } from 'react-router-dom'; // Import Link if you're using React Router

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>
              We are a car rental company that provides a wide range of vehicles for rent.
              Our goal is to provide excellent customer service and ensure that our customers have a great experience.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/cars">Cars</Link></li>
              <li><Link to="/booking">Booking</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>
              Phone: 123-456-7890<br />
              Email: <a href="mailto:info@example.com">info@example.com</a><br />
              Address: 123 Main St, Anytown, USA
            </p>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2023 Car Rental Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
