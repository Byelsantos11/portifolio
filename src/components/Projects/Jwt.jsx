import { Link } from 'react-router-dom';
import styles from './AllProjects.module.css';
import jwtImage from '../../assets/icons/jwt.png';
import javaIcon from '../../assets/icons/java.png';
import springBootIcon from '../../assets/icons/icons8-spring-boot-48.png';
import mysqlIcon from '../../assets/icons/mysql.png';

const tecnologias = [
  { nome: 'Java', imagem: javaIcon },
  { nome: 'Spring Boot', imagem: springBootIcon },
  { nome: 'JWT', imagem: jwtImage },
  { nome: 'MySQL', imagem: mysqlIcon },
];

const JwtProject = () => {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.left}>
            <div>
              <h1 className={styles.title}>Token-JWT</h1>
              <p className={styles.subtitle}>
                Projeto de autenticação com Spring Boot e Spring Security, usando tokens JWT
                para proteger rotas e validar acesso de usuários.
              </p>
            </div>

            <p className={styles.description}>
              Este sistema administrativo mostra um fluxo completo de login e proteção de
              recursos, com geração e validação de tokens JWT, controle de usuários e
              gerenciamento de permissões.
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
                <span>Funcionalidades:</span> autenticação JWT, proteções de rota e dashboard administrativo
              </li>
              <li className={styles.featureItem}>
                <span>Design:</span> interface funcional com foco em segurança e usabilidade
              </li>
            </ul>

            <div className={styles.links}>
              <a
                href="https://github.com/Byelsantos11/Token-JWT.git"
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
              src={jwtImage}
              alt="Token JWT"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JwtProject;
