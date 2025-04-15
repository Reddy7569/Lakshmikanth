import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import './Resume.css';
import html from './SkillsImages/html5.png';
import css from './SkillsImages/css3.png';
import javascript from './SkillsImages/javascript.png';
import react from './SkillsImages/react.png';
import node from './SkillsImages/node-js.png'
import mongo from './SkillsImages/mongodb.png'
import mqsql from './SkillsImages/mysql.png'
import sqlite from './SkillsImages/sqlite.png'
import python from './SkillsImages/python-logo.png'
import git from './SkillsImages/git.png'
import github from './SkillsImages/github-logo.png'
import bootstrap from './SkillsImages/bootstrap.png'

const Resume = () => (
  <div className="resume-container">
    <h1 className="resume-heading">Resume</h1>
    
    <section>
      <h4 className="section-heading">Education</h4>
      {[
        { title: 'Bachelors of Science', year: '2021 - 2024', school: 'Sri Krishnadevaraya University' },
        { title: 'Secondary Education', year: '2018 - 2020', school: 'Sri Vignan Junior College' },
      ].map((edu, idx) => (
        <div key={idx} className="resume-item">
          <FontAwesomeIcon icon={faGraduationCap} />
          <div>
            <span>{edu.title}</span> <br />
            <span>{edu.year}</span>
            <p>{edu.school}</p>
          </div>
        </div>
      ))}
    </section>

    <section>
      <h4 className="section-heading">Experience</h4>
      {[
        { title: 'Full Stack Development Intern', year: 'Jan 2024 - May 2024', company: 'A.K Technologies Pvt Ltd' },
      ].map((exp, idx) => (
        <div key={idx} className="resume-item">
          <FontAwesomeIcon icon={faLaptopCode} />
          <div>
            <span>{exp.title}</span> <br />
            <span>{exp.year}</span>
            <p>{exp.company}</p>
          </div>
        </div>
      ))}
    </section>

    <section>
      <h4 className="section-heading">Skills</h4>
      <div className="skills">
        {[html, css, javascript, react,python,sqlite,mqsql,bootstrap,mongo,node,git,github].map((skill, idx) => (
          <div key={idx} className="skill">
            <img src={skill} alt={`skill-${idx}`} />
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Resume;
