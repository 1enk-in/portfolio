import React from 'react';
import './SkillsModal.css';
import {
  FaHtml5, FaCss3Alt, FaJs, FaPython, FaJava, FaReact, FaBootstrap, FaGitAlt,
  FaGithub, FaLinux, FaSass, FaJira, FaNodeJs, FaFigma,
  FaFileWord, FaFileExcel, FaFilePowerpoint, FaEnvelope, FaChartBar
} from 'react-icons/fa';
import {
  SiTailwindcss, SiMysql, SiMongodb, SiExpress, SiJquery,
  SiAdobephotoshop, SiAdobeindesign,
} from 'react-icons/si';
import { IoClose } from 'react-icons/io5';

const skills = [
  { icon: FaHtml5, name: 'HTML5', color: '#E44D26' },
  { icon: FaCss3Alt, name: 'CSS3', color: '#264DE4' },
  { icon: FaSass, name: 'Sass', color: '#CD6799' },
  { icon: FaJs, name: 'JavaScript', color: '#F0DB4F' },
  { icon: FaJava, name: 'Java', color: '#007396' },
  { icon: FaPython, name: 'Python', color: '#3776AB' },
  { icon: SiJquery, name: 'jQuery', color: '#0769AD' },
  { icon: FaBootstrap, name: 'Bootstrap', color: '#563D7C' },
  { icon: FaReact, name: 'React', color: '#61DAFB' },
  { icon: SiExpress, name: 'Express', color: '#000000' },
  { icon: FaNodeJs, name: 'Node.js', color: '#68A063' },
  { icon: SiTailwindcss, name: 'Tailwind CSS', color: '#38BDF8' },
  { icon: SiMysql, name: 'MySQL', color: '#00758F' },
  { icon: FaChartBar, name: 'Power BI', color: '#F2C811' },
  { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
  { icon: FaGitAlt, name: 'Git', color: '#F1502F' },
  { icon: FaGithub, name: 'GitHub', color: '#181717' },
  { icon: FaFileWord, name: 'Word', color: '#2B579A' },
  { icon: FaFileExcel, name: 'Excel', color: '#217346' },
  { icon: FaFilePowerpoint, name: 'PowerPoint', color: '#D24726' },
  { icon: FaEnvelope, name: 'Outlook', color: '#0072C6' },
  { icon: FaFigma, name: 'Figma', color: '#F24E1E' },
  { icon: SiAdobephotoshop, name: 'Photoshop', color: '#31A8FF' },
  { icon: SiAdobeindesign, name: 'InDesign', color: '#FF3366' },
  { icon: FaLinux, name: 'Linux', color: '#FCC624' },
  { icon: FaJira, name: 'Jira', color: '#0052CC' },
];

export default function SkillsModal({ show, onClose }) {
  if (!show) return null;

  return (
    <div className="skills-modal-overlay" onClick={onClose}>
      <div className="skills-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose} aria-label="Close Skills Modal">
          <IoClose size={24} />
        </button>
        <h3 className="modal-title">My Skills</h3>
        <div className="skills-grid">
          {skills.map(({ icon: Icon, name, color }, index) => (
            <div
              className="skill-icon"
              key={index}
              title={name}
              style={{ '--icon-color': color }}
            >
              <Icon className="skill-icon-svg" />
              <span className="skill-name">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
