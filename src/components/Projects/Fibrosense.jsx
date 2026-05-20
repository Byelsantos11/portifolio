import { Link } from 'react-router-dom';
import styles from './AllProjects.module.css';
import fibroImage from '../../assets/icons/logo_fibrosense.png';
import kotlinIcon from '../../assets/icons/icons8-kotlin-48.png';
import mongoIcon from '../../assets/icons/icons8-mongo-db-48.png';
import springBootIcon from '../../assets/icons/icons8-spring-boot-48.png';
import pythonIcon from '../../assets/icons/icons8-python-48.png';
import iaIcon from '../../assets/icons/icons8-machine-learning-48.png';

const tecnologias = [
  { nome: 'Kotlin', imagem: kotlinIcon },
  { nome: 'MongoDB', imagem: mongoIcon },
  { nome: 'Python', imagem: pythonIcon },
   { nome: 'Machine Learning', imagem: iaIcon }
];

const Fibrosense = () => {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.left}>
            <div>
              <h1 className={styles.title}>FibroSense</h1>
              <p className={styles.subtitle}>
               Projeto de monitoramento de saúde para pacientes com fibromialgia, desenvolvido como um aplicativo mobile que conecta profissionais da saúde e companheiros de apoio, utilizando sensores vestíveis e análise de dados em tempo real para acompanhar sintomas, bem-estar e informações de saúde dos usuários.
              </p>
            </div>

            <p className={styles.description}>
              O FibroSense oferece insights personalizados, alertas de saúde e um
              dashboard intuitivo voltado para pacientes e profissionais de saúde.
              Ele integra processamento de dados, notificações e visualização clara de métricas.
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
                <span>Funcionalidades:</span> monitoramento em tempo real, mapa corporal, botão de emergência, alertas personalizados e dashboard de métricas
              </li>
              <li className={styles.featureItem}>
                <span>Design:</span> interface amigável, dados claros e navegação intuitiva
              </li>

            </ul>

            <div className={styles.links}>
              <a
                href="https://github.com/Fibr0Sense/fibrosense.git"
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
              src={fibroImage}
              alt="FibroSense"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fibrosense;
