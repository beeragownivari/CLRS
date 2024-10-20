import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import '../css/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const dashboard = location.pathname === '/dashboard';
  console.log(dashboard);

  const handleHome = () => {
    Navigate('/');
  }

  return (
    <header>
      <div class="overlap">
        <div className="header-top">
          <div className="social-media">
            <span>Follow us:</span>
            <a href="https://www.facebook.com" className="social-icon">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://www.twitter.com" className="social-icon">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.instagram.com/mahesh_________gowda/" className="social-icon" target="_blank">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.linkedin.com/in/mahesh-beeragownivari-329005293/" className="social-icon" target="_blank" >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
          <div className="contact-info">
            <FontAwesomeIcon icon={faPhone} />
            <span className="phone">  +91 6281588540</span>
            <span className="email">beeragownivarimahesh@gmail.com</span>
          </div>
        </div>

        <div className="header-bottom">
          <div className="logo">
            <h1>
              <span className="logo-icon">🎓</span>
              <a href="/" className="projectName">SkillForgePrep</a>
            </h1>
          </div>
          <nav className="navbar">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#course">Courses</a></li>
              <li><a href="#">Pages</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#contactus">Contact</a></li>
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
      </div>
    </header>
  );
};

export default Header;
