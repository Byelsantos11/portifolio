import { Link } from 'react-router-dom';
import styles from './AllProjects.module.css';
import bpgImage from '../../assets/icons/Bpg.jpg';
import jsIcon from '../../assets/icons/js.png';
import nodeIcon from '../../assets/icons/node-js.png';
import jwtIcon from '../../assets/icons/jwt.png';
import mysqlIcon from '../../assets/icons/mysql.png';

const tecnologias = [
  { nome: 'JavaScript', imagem: jsIcon },
  { nome: 'Node.js', imagem: nodeIcon },
  { nome: 'JWT', imagem: jwtIcon },
  { nome: 'MySQL', imagem: mysqlIcon },
];

const BpgStore = () => {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.left}>
            <div>
              <h1 className={styles.title}>BPG-Store</h1>
              <p className={styles.subtitle}>
                Sistema de gestão para lojas, com controle de estoque, clientes e serviços.
                A aplicação foi construída para facilitar operações empresariais com uma
                interface clara e recursos administrativos completos.
              </p>
            </div>

            <p className={styles.description}>
              O BPG-Store é um projeto full stack que une backend em Node.js com front-end funcional,
              proporcionando cadastro de produtos, gerenciamento de clientes, registro de vendas
              e relatórios de desempenho.
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
                <span>Funcionalidades:</span> cadastro de produtos, controle de estoque e gestão de vendas
              </li>
              <li className={styles.featureItem}>
                <span>Design:</span> interface intuitiva, layout limpo e navegação prática
              </li>
            </ul>

            <div className={styles.links}>
              <a
                href="https://github.com/Byelsantos11/BPG.git"
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
              src={bpgImage}
              alt="BPG-Store"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BpgStore;
