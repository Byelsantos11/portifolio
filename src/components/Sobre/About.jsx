import React from 'react';
import styles from './About.module.css';
import java from '../../assets/icons/java.png';
import javascript from '../../assets/icons/js.png';
import node from '../../assets/icons/node-js.png';
import react from '../../assets/icons/react.png';
import mysql from '../../assets/icons/mysql.png';
import sql from '../../assets/icons/servidor-sql.png';
import docker from '../../assets/icons/docker.png';
import SpringBoot from '../../assets/icons/icons8-spring-boot-48.png';


const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <h2>Sobre Mim</h2>
        <p>
        Sou um desenvolvedor apaixonado por tecnologia, com foco principal em backend, mas que já se aventurou em diversos projetos full stack, sempre buscando entender o todo e entregar soluções completas. Minha curiosidade pela área começou quando entrei na faculdade — foi ali que descobri a imensidão da tecnologia e percebi que era exatamente isso que eu queria para minha vida.
        Desde então, venho me dedicando a aprender, criar e evoluir constantemente. 
        Sou movido pela vontade de resolver problemas reais, construir aplicações robustas e entender cada detalhe do que acontece “por baixo dos panos”. Hoje, sou completamente encantado pela área de TI e estou em busca da minha oportunidade para expandir meus conhecimentos, crescer profissionalmente e contribuir com projetos que façam a diferença.
        </p>
        
        <h3>Minhas Habilidades (Skills)</h3>  
        <ul className={styles.skills}>
          <li>
          <img src={java} alt="Java" />
          <span>Java</span>
          </li>

          <li>
          <img src={SpringBoot} alt="SpringBoot" />
          <span>SpringBoot</span>
          </li>

          <li>
            <img src={javascript} alt="JavaScript"/>
            <span>Javascript</span>
          </li> 
          <li>
          <img src={node} alt="Node.js"/>
          <span>Node.Js</span>
          </li>

          <li>
          <img src={react} alt="React"/>
          <span>React</span>
          </li>

          <li>
          <img src={mysql} alt="MySQL"/>
          <span>MySQL</span>
          </li>

          <li>
          <img src={sql} alt="SQL"/>
          <span>SQL</span>
          </li>

          <li>
          <img src={docker} alt="SQL"/>
          <span>Docker</span>
          </li>

        </ul>
      </div>
    </section>
  );
};

export default About;