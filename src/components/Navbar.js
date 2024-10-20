import React from 'react';
import { useLocation } from 'react-router-dom';
import '../css/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Header = () => {
  const location=useLocation();
const dashboard = location.pathname === '/dashboard';
console.log(dashboard);
  return (
    <header>
      <div className="header-top">
        <div className="social-media">
          <span>Follow us:</span>
            <a href="https://www.facebook.com" className="social-icon">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://www.twitter.com" className="social-icon">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.instagram.com" className="social-icon">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.linkedin.com" className="social-icon">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
        </div>
        <div className="contact-info">
          <span className="call-now">Call Now!</span>
          <span className="phone">+91 8555931427</span>
          <span className="email">bhagavancv@gmail.com</span>
        </div>
      </div>

      <div className="header-bottom">
        <div className="logo">
          <h1><span className="logo-icon">🎓</span> SkillForgePrep</h1>
        </div>
        <nav className="navbar">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Pages</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          </nav>
          {!dashboard && (
          <nav className="navbar">
          <ul>
          
              <div className="login">
              <Link to="/login" >Login</Link>
                </div>
                <div className="signup">
                <Link to="/signUp">Sign up</Link>
                </div>
        
         
          </ul>
        </nav>
         )}
      </div>
    </header>
  );
};

export default Header;
