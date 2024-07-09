import React from 'react';
import './skills.css';
import Skills from '../../assets/skills.png';
const skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'><h6>Skills</h6></span>
        <span className='skillDesc'>I have developed skills by self-learning as well as from attending bootcamps, internships.</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={Skills} alt='Skills' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Programming Languages</h2>
        <p>I have knowledge in Python, Java, PHP.</p>
        </div>
        </div>
        <div className='skillBar'>
        <img src={Skills} alt='Skills' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Web Development Technologies</h2>
                    <p>I have practical knowledge in HTML, CSS, React, Bootstrap, Django, Flask, MySQL, JavaScript.</p>
                    </div>
                    </div>
                    <div className='skillBar'>
                    <img src={Skills} alt='Skills' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>Tools</h2>
                        <p>I have skills with using Postman, Firebase, Netlify, Git, GitHub, Visual Studio, Visual Studio Code, Windows OS, XAMPP, WAMP.</p>
                        </div>
                        </div>
                        <div className='skillBar'>
                        <img src={Skills} alt='Skills' className='skillBarImg'/>
                        <div className='skillBarText'>
                            <h2>Languages</h2>
                            <p>I can speak, write and read English, Hindi, Malayalam, Marathi.</p>
                            </div>
                            </div>
                            <div className='skillBar'>
                            <img src={Skills} alt='Skills' className='skillBarImg'/>
                            <div className='skillBarText'>
                                <h2>Other Skills</h2>
                                <p>Additionally, I Have knowledge in Datastructures and Algorithms in Java, Full-stack web development, Software Development Life Cycle.</p>
                                </div>
                                </div>
        </div>
    </section>
  );
}

export default skills