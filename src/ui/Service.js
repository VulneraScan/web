import React from "react";
import education from "../img/Cyber-security-Learning.png";
import entertainment from "../img/Penetration-testing.png";
import games from "../img/Risk-assessment.png";
import sports from "../img/Security-Audits.png";

import InnerHeaderBanner from "../components/InnerHeaderBanner";
import InnerHeader from "../components/InnerHeader";
import Footer from "../components/Footer";
import serviceHeader from '../img/services-header.jpg'

const Service = () => {
  return (
    <>
      <InnerHeader />
      <InnerHeaderBanner name={"Services"} img = {serviceHeader}/>

      <main id="main">
        <section id="services-list" className="services-list">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>
                <span style={{ color: "#155bd5" }}> GLOBAL LEADER</span> in Cybersecurity, offering Training, Testing, and Security Solutions.
              </h2>
            </div>

            <div
              className="row gy-5 pt-5 align-items-center"
              id="Cyber Security Learning"
            >
              <div
                className="col-lg-5 col-md-6 service-item"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img
                  src={education}
                  className="img-fluid"
                  alt=""
                  title="Cyber Security Learning"
                />
              </div>

              <div
                className="col-lg-7 col-md-6 service-item"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="icon flex-shrink-0">
                  <i className="bi bi-book" style={{ color: "#f57813" }}></i>
                </div>
                <div>
                  <h4 className="title"> Cyber Security Learning </h4>
                  <p className="description">
                    
                    Learn cybersecurity from the ground up — practical skills, 
                    expert guidance, and real-world training in one platform.
                  </p>
                  <p className="description">
                    Vulnerascan offers practical, career-focused cybersecurity training covering ethical hacking, network security, penetration testing, and compliance standards like ISO and NIST. Our courses are suitable for beginners to professionals.
                  </p>
                  <p className="description">
                    
                    We combine animated lessons, hands-on labs, assessments, and live expert sessions to ensure learners gain both knowledge and real-world skills.
                  </p>
                  <p className="description">
                    
                    <span className="fw-bold">
                      Our goal is to build job-ready cybersecurity professionals equipped to handle modern digital threats with confidence and competence.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-list light-bg" id="Penetration Testing">
          <div className="container" data-aos="fade-up">
            <div className="row gy-5 align-items-center ">
              <div
                className="col-lg-7 col-md-6 service-item "
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="icon flex-shrink-0">
                  <i
                    className="bi bi-shield-lock"
                    style={{ color: "#15a04a" }}
                  ></i>
                </div>
                <div>
                  <h4 className="title"> Penetration Testing </h4>
                  <p className="description">
                    Our penetration testing service helps organizations proactively
                    detect, analyze, and remediate security flaws in their systems, 
                    networks, and applications.
                   </p>
                  <p className="description">
                    
                    So every time an organization needs to uncover hidden vulnerabilities, our penetration testing is the way to go.
                  </p>
                </div>
              </div>

              <div
                className="col-lg-5 col-md-6 service-item order-first order-sm-last"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img src={entertainment} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="services-list ">
          <div className="container" id="Risk assessment">
            <div className="row gy-5  align-items-center">
              <div
                className="col-lg-5 col-md-6 service-item "
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img src={games} className="img-fluid" alt="" />
              </div>

              <div
                className="col-lg-7 col-md-6 service-item"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="icon flex-shrink-0">
                  <i
                    className="bi bi-exclamation-triangle"
                    style={{ color: "#f5cf13" }}
                  ></i>
                </div>
                <div>
                  <h4 className="title"> Risk assessment </h4>
                  <p className="description">
                    Comprehensive risk assessments to identify vulnerabilities, 
                    assess impact, and guide informed security decisions.
                  </p>
                  <p className="description">
                    If you're serious about understanding and minimizing digital threats, then your search for effective risk assessment ends here.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-list light-bg" id="Security Audits">
          <div className="container">
            <div className="row gy-5 align-items-center">
              <div
                className="col-lg-7 col-md-6 service-item"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="icon flex-shrink-0">
                  <i
                    className="bi bi-clipboard-check"
                    style={{ color: "#1335f5" }}
                  ></i>
                </div>
                <div>
                  <h4 className="title"> Security Audits </h4>
                  <p className="description">
                    Our security audit service evaluates your infrastructure, 
                    policies, and controls to detect gaps and strengthen your overall security posture.                 
                  </p>
                  <p className="description">
                    We analyze both technical and procedural layers of your system to uncover hidden risks, 
                    compliance issues, and areas for improvement.Our expert team ensures your environment 
                    aligns with industry standards like ISO, NIST, and GDPR, providing detailed insights 
                    and practical recommendations.
                  </p>
                  <p className="description">
                    By identifying weaknesses before they can be exploited, we help organizations 
                    build a resilient, secure, and audit-ready digital ecosystem.
                  </p>
                </div>
              </div>

              <div
                className="col-lg-5 col-md-6 service-item order-first order-sm-last"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img src={sports} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Service;
