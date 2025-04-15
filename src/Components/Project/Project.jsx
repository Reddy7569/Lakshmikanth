import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import bankingImg from './ProjectImages/banking.jpeg';
import digitaTimer from './ProjectImages/digitaltimer.jpeg';
import emojiGame from './ProjectImages/emojigame.jpeg';
import matchGame from './ProjectImages/matchgame.jpeg';
import naturePhoto from './ProjectImages/naturephoto.jpeg';
import nxtWatch from './ProjectImages/nxtwatch.jpeg';
import passwordManager from './ProjectImages/passwordmanager.jpeg';
import primeVideo from './ProjectImages/primevideo.jpeg';
import './Project.css';

const ProjectItem = ({ image, link, title, description }) => (
  <div className="project-item">
    <a target="_blank" href={link} className="image-container">
      <img src={image} alt={title} className="projectimage" />
      <div className="icon-overlay">
        <FontAwesomeIcon icon={faEye} className="fa-eye-icon" />
      </div>
    </a>
    <h3 className="project-discription-heading">{title}</h3>
    <p className="project-discription">{description}</p>
  </div>
);

const Project = () => {
  const projects = [
    {
      image: bankingImg,
      link: 'https://reddy7569.github.io/money-manager/',
      title: 'Money Manager',
      description: 'Web Development',
    },
    {
      image: digitaTimer,
      link: 'https://reddy7569.github.io/digital-timer/',
      title: 'Digital Timer',
      description: 'Web Development',
    },
    {
      image: emojiGame,
      link: 'https://reddy7569.github.io/emoji-game/',
      title: 'Emoji Game',
      description: 'Web Development',
    },
    {
      image: matchGame,
      link: 'https://reddy7569.github.io/match-game/',
      title: 'Match Game',
      description: 'Web Development',
    },
    {
      image: naturePhoto,
      link: 'https://reddy7569.github.io/gallery-app/',
      title: 'Nature Photos',
      description: 'Web Development',
    },
    {
      image: nxtWatch,
      link: 'https://reddy7569.github.io/nxt-watch-app/',
      title: 'Youtube Clone',
      description: 'Web Development',
    },
    {
      image: passwordManager,
      link: 'https://reddy7569.github.io/password-manager/',
      title: 'Password Manager',
      description: 'Web Development',
    },
    {
      image: primeVideo,
      link: 'https://reddy7569.github.io/prime-video/',
      title: 'Prime Clone',
      description: 'Web Development',
    },
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-heading">Projects</h1>
      <p className="projects-content">
        See My Works Which Will Amaze You!<br />
        We develop the best quality website that serves for the long-term. Well-documented, clean, easy and elegant interface helps any non-technical clients.
      </p>
      <div className="project-items">
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            image={project.image}
            link={project.link}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
