import React from 'react'
import AOS from "aos";
import '../../node_modules/aos/dist/aos.css'
import about_img from '../img/about-image.jpg'
import manag_photo1 from '../img/team/mdsojib.png';
import manag_photo2 from '../img/team/rafid.png';
import InnerHeaderBanner from '../components/InnerHeaderBanner';
import InnerHeader from '../components/InnerHeader';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import abtHeader from '../img/about-header.jpg'
import { useEffect } from 'react';

const About = () => {
   useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
  
  return (
    <>
   <InnerHeader />
   <InnerHeaderBanner name={"About Us"} img = {abtHeader}/>

     <main id="main">   
      <section id="about" className="about">
         <div className="container" data-aos="fade-up">
            <div className="section-header">
               <h2>Helping Clients ACHIEVE their Vision</h2>
            </div>
            <div className="row gy-4 align-items-center" data-aos="fade-up">
               <div className="col-lg-6">
                  <img src={about_img} className="img-fluid" alt="Helping Clients achieve their Vision" title="Helping Clients achieve their Vision" />
               </div>
               <div className="col-lg-6">
                  <p> We started Vulnerascan in 2022 with a mission to help businesses and individuals strengthen their digital defenses through advanced cybersecurity services and professional training. From day one, we aimed to be more than just a service provider — we set out to become a trusted partner in securing digital growth.</p>
                  <p> The name Vulnerascan represents our core purpose: identifying and addressing vulnerabilities before they become threats. Over the past two years, we’ve built a platform that delivers real-world solutions including penetration testing, risk assessments, security audits, and hands-on cybersecurity learning programs.</p>
                  <p> Since launch, we've supported organizations across various sectors, trained hundreds of cybersecurity learners, and consistently adapted to the evolving threat landscape. Our client-first approach and focus on innovation have helped us create meaningful impact in both enterprise environments and learning communities.</p>
                  <p> At Vulnerascan, we believe growth must be shared. That's why we invest in our team, foster continuous learning, and support community initiatives focused on cyber awareness and education. We’re proud of how far we’ve come — and we’re even more excited about what’s ahead.</p>
               </div>
            </div>
         </div>
      </section>
    
      <div id="vision" className="vision aos-init" data-aos="fade-up" data-aos-delay="300">
         <div className="container">
            <div className="row gy-4">
               <div className="col-lg-4 aos-init">
                  <div className="card-item">
                     <div className="row">
                        <div className="col-xl-12">
                           <div className="card-body">
                              <h4 className="card-title"> Vision</h4>
                              <p>To become a global leader in cybersecurity solutions, empowering organizations to defend against evolving digital threats and building a safer, more secure digital world for all.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
              
               <div className="col-lg-4 aos-init">
                  <div className="card-item">
                     <div className="row">
                        <div className="col-xl-12">
                           <div className="card-body">
                              <h4 className="card-title"> Mission</h4>
                              <p>To proactively identify, assess, and neutralize vulnerabilities through innovative cybersecurity tools, expert insights, and client-focused services — delivering robust protection and peace of mind to businesses of all sizes.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
              
               <div className="col-lg-4 aos-init" data-aos="fade-up" data-aos-delay="300">
                  <div className="card-item">
                     <div className="row">
                        <div className="col-xl-12">
                           <div className="card-body">
                              <h4 className="card-title">Our Values</h4>
                              <p>We are driven by a strong commitment to security, a passion for innovation, unwavering integrity, seamless collaboration, and a dedication to excellence in delivering high-quality, trustworthy cybersecurity solutions.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
              
            </div>
         </div>
      </div>
  
      <section id="management" className="management light-bg aos-init" data-aos="fade-up" data-aos-delay="300">
         <div className="container">
            <div className="section-header">
               <h2>Our Team</h2>
               <p>Backed by strong expertise in cybersecurity, Vulnerascan’s leadership team is focused on delivering innovative, efficient, and cost-effective solutions. With a deep understanding of digital threats and industry needs, we aim to consistently exceed client expectations through trusted services and strategic insight.</p>
            </div>
            <div className="row member d-flex align-items-center ">
               <div className="col-md-2">
                  <div className="pic"><img src={manag_photo1} className="img-fluid" alt=""/></div>
               </div>
               <div className="col-md-10">
                  <div className="member-info">
                     <h4>MD SOJIB</h4>
                     <span>Founder & CEO</span>
                     <p>MD SOJIB is a visionary Technocrat with 5 years of hands-on experience in the field of Information Technology, specializing in Cybersecurity. He has worked with leading consulting firms and service industries, contributing to a wide range of IT solutions. His core expertise includes Network Security, Ethical Hacking, Security Audits, Risk Assessment, System Architecture, and Enterprise Security Solutions. Sojib is committed to building secure digital infrastructures and continuously evolving with the latest advancements in cybersecurity technologies.</p>
                     <div className="social">
                     <Link to="https://twitter.com/mdsojibcsr" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-twitter"></i>
                    </Link>                
                    <Link to="https://www.linkedin.com/in/mdsojibcsr" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-linkedin"></i>
                    </Link>
                    <Link to="https://github.com/mdsojibcsr" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-github"></i>
                    </Link>
                <Link to="https://facebook.com/mdsojibcsr" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-facebook"></i>
                    </Link>
                     </div>
                  </div>
               </div>
            </div>
            <div className="row member d-flex align-items-center mt-4">
               <div className="col-md-2">
                  <div className="pic"><img src={manag_photo2} className="img-fluid" alt="" /></div>
               </div>
               <div className="col-md-10">
                  <div className="member-info">
                     <h4>Rafid Al Haque</h4>
                     <span>Chief Technology Officer (CTO)</span>
                     <p>Rafid Al Haque is a cybersecurity researcher and infrastructure specialist currently leading the technical direction at VulneraScan. He has a strong foundation in Linux security, DevSecOps, and source code auditing, which enables him to design scalable and secure systems tailored to modern defense needs. </p>
                     <p> With a blend of hands-on experience and strategic foresight, Rafid focuses on building tools that address real-world cybersecurity threats. His work empowers defenders by creating practical solutions that stay ahead of evolving attack landscapes.</p>
                     <div className="social">
                        <Link to="https://twitter.com/rafidalhaque" target="_blank" rel="noopener noreferrer"> <i className="bi bi-twitter"></i> </Link>
                        <Link to ="https://www.linkedin.com/in/rafidalhaque/"> <i className="bi bi-linkedin" target="_blank"></i> </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   
   </main>
   <Footer/>
    
    </>
  )
}

export default About
