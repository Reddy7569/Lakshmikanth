import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faHackerrank } from '@fortawesome/free-brands-svg-icons';
import Profilepic from '../assets/myProfile.png';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <img className="about-image" src={Profilepic} alt="About Me" />
      <div className="about-text-wrapper">
        <h2 className="about-title">About Me</h2>
        <p className="about-description">
          I’m a passionate Full Stack Developer with expertise in Python and modern web technologies. I have a strong foundation in Python (Flask/Django) for back-end development and JavaScript, HTML, CSS, and React for building dynamic front-end interfaces. I enjoy designing and implementing efficient, scalable solutions to solve real-world problems and am always eager to learn new tools and technologies.

Whether it’s creating responsive, user-friendly front-end experiences or managing databases and server-side logic to build robust back-end services, I focus on delivering clean, maintainable, and performant applications. I am a firm believer in the power of collaboration and thrive in team environments where innovative ideas can be brought to life.
        </p>

        <div className="social-icons">
          <a href="https://www.linkedin.com/in/lakshmikanth-reddy-b637a3255/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/Reddy7569/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.hackerrank.com/profile/lakshmikanthre14" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faHackerrank} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

