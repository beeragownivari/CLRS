import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/main.css';
import Header from './Navbar';
import Footer from './Footer';


const Main = () => {
  const navigate = useNavigate(); 
  const handleClick = (id) => {
    navigate('/internship');  
  };

  const FileUpload = (id) => {
    navigate('/fileUpload');  
  };

  
  return (
    
    <div className="App">
      <Header/>
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
     <Footer/>
     </div>
  );
};

export default Main;
