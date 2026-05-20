import { Link } from 'react-router-dom';
import styles from './AllProjects.module.css';
import brinquedo from '../../assets/icons/brinquedo.jpg';
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

const LojaBrinquedo = () => {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.left}>
            <div>
              <h1 className={styles.title}>Loja de Brinquedos</h1>
              <p className={styles.subtitle}>
                Este projeto é uma aplicação web completa para venda de brinquedos.
                Possui frontend moderno, backend em Spring Boot e banco de dados MySQL,
                oferecendo cadastro de produtos, gerenciamento de estoque e uma experiência
                visual limpa para o usuário.
              </p>
            </div>

            <p className={styles.description}>
              A Loja de Brinquedos foi desenvolvida para demonstrar integração entre uma
              interface interativa e um servidor robusto. O objetivo é apresentar um
              front-end responsivo aliado a um back-end sólido, com foco em manutenção,
              performance e facilidade de uso.
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
                <span>Funcionalidades:</span> catálogo de produtos, carrinho e controle de estoque
              </li>
              <li className={styles.featureItem}>
                <span>Design:</span> layout responsivo e navegação intuitiva
              </li>
            </ul>

            <div className={styles.links}>
              <a
                href="https://github.com/Byelsantos11/Loja-Brinquedos.git"
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
              src={brinquedo}
              alt="Loja de Brinquedos"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LojaBrinquedo;