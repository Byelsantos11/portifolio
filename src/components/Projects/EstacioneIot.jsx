import { Link } from 'react-router-dom';
import styles from './AllProjects.module.css';
import estacioneImage from '../../assets/icons/logo-estacioneIot.png';
import javaIcon from '../../assets/icons/java.png';
import webIcon from '../../assets/icons/js.png';
import frontendIcon from '../../assets/icons/react.png';
import iaIcon from '../../assets/icons/internet-das-coisas.png';
import cplusplusIcon from '../../assets/icons/c-.png';


const tecnologias = [
  { nome: 'Java', imagem: javaIcon },
  { nome: 'C++', imagem: cplusplusIcon },
  { nome: 'Frontend', imagem: webIcon },
  { nome: 'IOT', imagem: iaIcon },
];

const EstacioneIot = () => {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.left}>
            <div>
              <h1 className={styles.title}>Estacione IoT</h1>
              <p className={styles.subtitle}>
             O EstacioneIoT é um sistema de monitoramento inteligente de vagas de estacionamento utilizando Internet das Coisas (IoT). O objetivo do projeto é detectar automaticamente a ocupação das vagas por meio de sensores de movimento, permitindo que usuários visualizem em tempo real quais vagas estão livres ou ocupadas. </p>
            </div>

            <p className={styles.description}>
             O sistema integra dispositivos IoT com uma aplicação web, fornecendo informações atualizadas sobre o estado do estacionamento de forma simples e eficiente.
            </p>

            <ul className={styles.featureList}>
              <li className={styles.featureItem}>
                <span>Tecnologias:</span>
                <div className={styles.techList}>
                  {tecnologias.map((tecnologia) => (
                    <div key={tecnologia.nome} className={styles.techItem}>
                      <img
                        src={tecnologia.imagem}
                        alt={tecnologia.nome}
                        className={styles.techIcon}
                      />
                      <span>{tecnologia.nome}</span>
                    </div>
                  ))}
                </div>
              </li>
              <li className={styles.featureItem}>
                <span>Funcionalidades:</span> monitoramento em tempo real, detecção automática de ocupação, visualização de vagas livres e ocupadas
              </li>
              <li className={styles.featureItem}>
                <span>Design:</span> interface amigável, dados claros e navegação intuitiva
              </li>

            </ul>

            <div className={styles.links}>
              <a
                href="https://github.com/Byelsantos11/Estacionamento-Iot.git"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkButton}
              >
                Ver no GitHub
              </a>
              <Link to="/" className={styles.secondaryButton}>
                Voltar ao portfólio
              </Link>
            </div>
          </div>

          <div className={styles.right}>
            <img
              className={styles.projectImage}
              src={estacioneImage}
              alt="Estacione IoT"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EstacioneIot;
