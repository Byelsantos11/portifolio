import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const sections = [
    { label: "Sobre", id: "about" },
    { label: "Projetos", id: "projects" },
    { label: "Contato", id: "contact" }
  ];

  return (
    <nav className={styles.navbar}>
      <h3 className={styles.logo}>GR</h3>
      <ul className={styles.navLinks}>
        {sections.map((sec) => (
          <li key={sec.id}>
            <a href={`#${sec.id}`}>{sec.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
