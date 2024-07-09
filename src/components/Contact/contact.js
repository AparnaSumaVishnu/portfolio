import {useRef} from 'react';
import './contact.css';
import linkedinIcon from '../../assets/linkedinIcon.webp'; // LinkedIn icon from assets
import githubIcon from '../../assets/githubIcon.jpg'; // GitHub icon from assets
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_zyyccob', 'template_dp7anob', form.current, {
        publicKey: 'c3Foa6Be3TeoFNyaF',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },(error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset()
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/aparna-vishnu-b3745528b', '_blank'); // Replace with your LinkedIn profile URL
  };

  const handleGitHubClick = () => {
    window.open('https://github.com/AparnaSumaVishnu', '_blank'); // Replace with your GitHub profile URL
  };

  return (
    <section id='contactPage'>
      <div id='contact'>
        <h6 className='contactPageTitle'>Contact Me</h6>
        <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
        <form ref={form} onSubmit={sendEmail} className='contactForm'>
          <input type='text' className='name' placeholder='Your Name' name='user_name' required/>
          <input type='email' className='email' placeholder='Your Email' name='user_email' required/>
          <textarea className='msg' name='message' rows='5' placeholder='Your Message' required></textarea>
          <button type='submit' value='Send' className='submitBtn'>Submit</button>
          <div className='links'>
            <img src={linkedinIcon} alt='LinkedIn' className='link' onClick={handleLinkedInClick} />
            <img src={githubIcon} alt='GitHub' className='link' onClick={handleGitHubClick} />
            {/* Add other social media icons or links here */}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
