import React from 'react'
import { Link } from 'react-router-dom'

import dashboard from '../img/revenue-dashboard.png'

const Revenue = () => {
  return (
    <>
        <section id="features" className="features">
        <div className="details">
          <div className="container" data-aos="fade-up" data-aos-delay="300">
            <div className="row">
              <div className="col-md-7">
                <h4>Drive revenue and optimise your Business</h4>
                <p>With 2 years of dedicated service in cybersecurity, Vulnerascan has established itself as a trusted partner in delivering cutting-edge protection and training solutions. Our unified expertise spans penetration testing, security audits, risk assessments, and professional upskilling—designed to meet the evolving security needs of modern businesses.</p>
                <p> We stay aligned with emerging threat landscapes and latest security technologies, ensuring measurable business impact and peace of mind for our clients. Our commitment to continuous innovation has helped organizations strengthen digital resilience and protect critical assets.</p>
                <p> At Vulnerascan, we don’t just secure systems—we unlock growth by identifying vulnerabilities, enabling compliance, and building a culture of cyber-awareness through impactful learning and tailored services. </p>
                <Link to="/about" className="btn-get-started">Read More</Link>
              </div>
              <div className="col-lg-5 position-relative" data-aos="fade-up" data-aos-delay="200">
                <div className="phone-wrap">
                  <img src={dashboard} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Revenue
