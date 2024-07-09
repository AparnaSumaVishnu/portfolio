import React from 'react';
import './certifications.css';
import Certificate from '../../assets/certificate.png';

const Certifications = () => {
  return (
    <section id='certificates'>
      <h1 className='cerificatesTitle'>Certificates</h1>
      <span className='certificatesDesc'>
        I have received certificates which is displayed below.
      </span>
      <div className='certificatesImgs'>
        <div className='certificateItem'>
          <img src={Certificate} alt='' className='certificatesImg' />
            <h4>Coursera Python for Datascience and AI</h4>
            <p>Completed IBM Python for Datascience and AI powered by Coursera.</p>
        </div>
        <div className='certificateItem'>
          <img src={Certificate} alt='' className='certificatesImg' />
          <h4>Coursera Cybersecurity for Everyone</h4>
            <p>Completed University of Maryland Cybersecurity for Everyone powered by Coursera.</p>
        </div>
        <div className='certificateItem'>
          <img src={Certificate} alt='' className='certificatesImg' />
          <h4>Certificate for one day workshop</h4>
            <p>Completed one day workshop in Software Development from IROHUB INFOTECH Cochin on 20-04-2024.</p>
        </div>
        </div>
        <div className='certificatesImgs2'>
        <div className='certificateItem'>
          <img src={Certificate} alt='' className='certificatesImg' />
          <h4>Six months internship Certificate</h4>
            <p>Completed six months internship in full stack web development from September 2023 to March 2024.</p>
        </div>
        <div className='certificateItem'>
          <img src={Certificate} alt='' className='certificatesImg' />
          <h4>Upcode Bootcamp Certificate</h4>
            <p>Completed two weeks bootcamp program in software development conducted by Upcode Software Labs from 25th May to 08th June 2024.</p>
        </div>
      </div>
    </section>
  );
}

export default Certifications