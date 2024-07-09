import React from 'react';
import './Intro.css';
import btnImg from '../../assets/hireme.png';
import { Link as ScrollLink } from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="IntroText">I'm <span className="IntroName">Aparna</span> <br/>recent graduate</span>
                <p className="IntroPara">I am a fresher with 6 months internship experience in full-stack web development<br/>aspiring to become a full-time software developer.</p>
                <ScrollLink to="contactPage" smooth={true} duration={500} offset={-70} spy={true} exact="true" className="scrollLink">
          <button className="btn">
            <img src={btnImg} alt="Hire Me" className="btnImg" />
            Hire Me
          </button>
        </ScrollLink>
            </div> 
        </section>
    );
}

export default Intro;
