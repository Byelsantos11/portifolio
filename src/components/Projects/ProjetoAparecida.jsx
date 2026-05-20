import { Link } from 'react-router-dom';
import styles from './AllProjects.module.css';
import aparecidaImage from '../../assets/icons/aparecida.jpg';
import javaIcon from '../../assets/icons/java.png';
import springBootIcon from '../../assets/icons/icons8-spring-boot-48.png';
import jsIcon from '../../assets/icons/js.png';
import mysqlIcon from '../../assets/icons/mysql.png';

const tecnologias = [
  { nome: 'Java', imagem: javaIcon },
  { nome: 'Spring Boot', imagem: springBootIcon },
  { nome: 'JavaScript', imagem: jsIcon },
  { nome: 'MySQL', imagem: mysqlIcon },
];

const ProjetoAparecida = () => {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.left}>
            <div>
              <h1 className={styles.title}>Projeto Aparecida</h1>
              <p className={styles.subtitle}>
                Sistema completo para igrejas e peregrinos, com controle de viagens,
                gerenciamento de passageiros e dashboard administrativo.
              </p>
            </div>

            <p className={styles.description}>
              O Projeto Aparecida foi desenvolvido para facilitar a organização de viagens
              e compra de passagens com segurança e eficiência. O foco está em usabilidade,
              rastreamento de assentos e processos administrativos centralizados.
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
                <span>Funcionalidades:</span> cadastro e controle de passageiros, dashboard de viagens e mapa de assentos
              </li>
              <li className={styles.featureItem}>
                <span>Design:</span> interface limpo, navegação clara e foco em eficiência operacional
              </li>
            </ul>

            <div className={styles.links}>
              <a
                href="https://github.com/Byelsantos11/Projeto-Aparecida.git"
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
              src={aparecidaImage}
              alt="Projeto Aparecida"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjetoAparecida;