import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/main.css';
import Header from './Navbar';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt, faTags, faTicketAlt, faCheckCircle, faPhoneAlt, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import 'animate.css';
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../css/bootstrap.min.css';
import aboutCompany from '../images/ecommerce.webp';
import CourseCard from './CourseCard';
import { courses } from '../data/course';
import '../css/CourseSection.css';
import { toast, Toaster } from 'react-hot-toast';

const Main = () => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate('/internship');
  };

  const FileUpload = (id) => {
    navigate('/fileUpload');
  };
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://embed.tawk.to/66afdab01601a2195ba0b50a/1i4fesh8q';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    const s0 = document.getElementsByTagName('script')[0];
    s0.parentNode.insertBefore(script, s0);
    return () => {
      s0.parentNode.removeChild(script);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    const yOffset = -80; // Adjust this value based on your navbar height
    const yPosition = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  
    window.scrollTo({ top: yPosition, behavior: 'smooth' });
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Reset the form
      } else {
        toast.success('Failed to send message.');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.success('An error occurred. Please try again.');
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="hero-section">
        <div className="personal">
          <h2>Internships</h2>
          <p>Details on internship preparation and job vacancies.</p>
          <button className="get-started" onClick={handleClick}>Get started</button>
        </div>
        <div className="business">
          <h2>Company's</h2>
          <p>List of companies, interview questions, and vacancies details</p>
          <button className="get-started" onClick={FileUpload} >Get started</button>
        </div>
      </div>
      <div className="container-fluid py-5" id="about">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-xl-5 animate__animated animate__fadeInLeft" data-wow-delay="0.1s">
              <div className="bg_light_rounded">
                <img
                  src={aboutCompany}
                  className="img_fluid_about_image"
                  style={{ marginBottom: '-7px' }}
                  alt="Image"
                />
                <img
                  src={aboutCompany}
                  className="img_fluid_about_image border-bottom border-5 border-primary"
                  style={{
                    borderTopRightRadius: '300px',
                    borderTopLeftRadius: '300px'
                  }}
                  alt="Image"
                />
              </div>
            </div>
            <div className="col-xl-7 animate__animated animate__fadeInRight" data-wow-delay="0.3s">
              <h5 className="sub-title pe-3">About the Website</h5>
              <h4 className="display-6 mb-4">Empowering Students through Internships and Skill Development.</h4>
              <p className="mb-4">
                SkillForgePrep is an online platform aimed at helping students and job seekers enhance their skills and prepare for careers in various industries. They typically focus on offering resources like internships, skill development programs, workshops, and training sessions that are relevant to current job markets.
              </p>
              <div className="row gy-4 align-items-center">
                <div className="col-12 col-sm-6 d-flex align-items-center">
                  <FontAwesomeIcon icon={faMapMarkedAlt} className="fa-3x text-secondary" />
                  <h5 className="ms-4">Nationwide  Opportunities.</h5>
                </div>
                <div className="col-12 col-sm-6 d-flex align-items-center">
                  <FontAwesomeIcon icon={faTags} className="fa-3x text-secondary" />
                  <h5 className="ms-4">Exclusive Opportunities & Preparations.</h5>
                </div>
                <div className="col-4 col-md-3">
                  <div className="bg-light text-center rounded p-3">
                    <div className="mb-2">
                      <FontAwesomeIcon icon={faTicketAlt} className="fa-4x text-primary" />
                    </div>
                    <h1 className="display-5 fw-bold mb-2">0</h1>
                    <p className="text-muted mb-0">Years of Experience</p>
                  </div>
                </div>
                <div className="col-8 col-md-9">
                  <div className="mb-5">
                    <p className="text-primary h6 mb-3">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-secondary me-2" />
                      Offer 100 % Genuine Assistance
                    </p>
                    <p className="text-primary h6 mb-3">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-secondary me-2" />
                      It’s Faster & Reliable Execution
                    </p>
                    <p className="text-primary h6 mb-3">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-secondary me-2" />
                      Accurate & Expert Advice
                    </p>
                  </div>
                  <div className="d-flex flex-wrap">
                    <div id="phone-tada" className="d-flex align-items-center justify-content-center me-4">
                      <a href="https://wa.me/6281588540" className="position-relative animate__animated animate__tada" target="_blank" data-wow-delay=".9s">
                        <FontAwesomeIcon icon={faPhoneAlt} className="text-primary fa-3x" />
                        <div className="position-absolute" style={{ top: '0', left: '25px' }}>
                          <FontAwesomeIcon icon={faCommentDots} className="text-secondary" />
                        </div>
                      </a>
                    </div>
                    <div className="d-flex flex-column justify-content-center">
                      <span className="text-primary">Have any questions?</span>
                      <span className="text-secondary fw-bold fs-5" style={{ letterSpacing: '2px' }}>
                        Free: +91 6281588540
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="course-section" id="course">
        <h2>Our Courses</h2>
        <div className="course-cards-container">
          {courses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
      <section className="services">
        <h3>Latest companies interview details and preparation list.</h3>
        <div className="service-items">
          <div className="service">
            <h4>Vision & Mission</h4>
            <p>To become a globally recognized research and academic institution and thereby contribute to technological.</p>
            <button className="learn-more">Learn More</button>
          </div>
          <div className="service">
            <h4>UGC-Autonomous</h4>
            <p>Autonomy may be defined as a functional status given to the Institutions, by the University Grants Commission (UGC) by giving greater flexibility.</p>
            <button className="learn-more">Learn More</button>
          </div>
          <div className="service">
            <h4>Accreditations and Rankings</h4>
            <p>MITS has been accredited with an "A+" Grade by NAAC, UGC-MHRD.</p>
            <button className="learn-more">Learn More</button>
          </div>
          <div className="service">
            <h4>Charities and Nonprofits</h4>
            <p>Discover how MITS can help your nonprofit organization.</p>
            <button className="learn-more">Learn More</button>
          </div>
        </div>

      </section>
      <div className="contact-section" id="contactus">
        <h2>Contact Us</h2>
        <p>We'd love to hear from you! Please fill out the form below.</p>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Send Message</button>
      </div>
      <Toaster position="top-right" />
      <Footer />
    </div>
  );
};

export default Main;
