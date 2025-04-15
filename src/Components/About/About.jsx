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
          I'm a passionate web developer with experience in both front-end and back-end technologies. I have a strong foundation in JavaScript, HTML, CSS, and modern frameworks like React and Node.js. I enjoy building innovative and efficient solutions to solve real-world problems, and I am always eager to learn new skills and technologies. Whether it's creating dynamic, responsive user interfaces or working with databases to build scalable back-end services, I strive to deliver clean, maintainable, and user-friendly applications. I'm a firm believer in the power of collaboration and enjoy working in teams to bring ideas to life.
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

