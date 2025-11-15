import React from 'react';
import styles from './Contact.module.css';
import github from '../../assets/icons/github.png';
import linkedin from '../../assets/icons/linkedin.png';

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <h2>Entre em Contato</h2>
        <p>
          Estou sempre aberto a novas oportunidades e conexões.
          Sinta-se à vontade para me contatar!
        </p>
        <div className={styles.contactLinks}>

          
        <a
            href="www.linkedin.com/in/gabryel-rodrigues-810466242"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactButton}
          >
            <img src={linkedin} alt="GitHub" className={styles.icon} />
            <span>Linkedin</span>
          </a>

          <a
            href="https://github.com/Byelsantos11"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactButton}
          >
            <img src={github} alt="GitHub" className={styles.icon} />
            <span>GitHub</span>
          </a>

        </div>
        <div className={styles.footer}>
          <p>© 2025 Gabryel Rodrigues. Todos os direitos reservados.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;