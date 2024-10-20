import React from 'react';
import '../css/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import pic from '../images/mits.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-column about">
          <h3>About Us</h3>
          <p>SkillForgePrep empowers learners with essential skills and expert interview preparation to succeed in today's job market. Our platform offers comprehensive courses and guidance to help you forge a successful career path.</p>
          <div className="social-icons">
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
        </div>

        <div className="footer-column links">
          <h3>Our Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        <div className="footer-column latest-posts">
          <h3>Latest Post</h3>
          <ul>
            <li>
              <img src={pic} alt="Post 1"/>
              <div>
                <p>Nothing impossible to need hard work</p>
                <span>7 March, 2020</span>
              </div>
            </li>
            <li>
              <img src={pic} alt="Post 2"/>
              <div>
                <p>Nothing impossible to need hard work</p>
                <span>7 March, 2020</span>
              </div>
            </li>
          </ul>
        </div>

        <div className="footer-column contact">
          <h3>Contact Us</h3>
          <ul>
            <li><i className="fas fa-phone"></i> +1 (444) 000-8888</li>
            <li><i className="fas fa-phone"></i> +91 7052 101 786</li>
            <li><i className="fas fa-envelope"></i> info@example.com</li>
            <li><i className="fas fa-envelope"></i> help@example.com</li>
            <li><i className="fas fa-map-marker-alt"></i> 1247/Plot No. 39, 15th Phase, LHB Colony, Kanpur</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © SkillForgePrep 2024. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
