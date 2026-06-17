import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Projects.module.css';
import brinquedo from '../../assets/icons/brinquedo.jpg';
import aparecida from '../../assets/icons/aparecida.jpg';
import bpg from '../../assets/icons/Bpg.jpg';
import jwt from '../../assets/icons/jwt.png';
import fibro from '../../assets/icons/logo_fibrosense.png';
import estacione from '../../assets/icons/logo-estacioneIot.png';


const projectData = [
  {
    id: 1,
    title: "Loja de Brinquedos",
    description:
      "O projeto Loja-Brinquedos é uma aplicação web que permite aos usuários explorar uma variedade de brinquedos disponíveis para compra. A aplicação possui um backend desenvolvido em Spring Boot e um frontend construído com JavaScript, HTML e CSS. Os dados são armazenados em um banco de dados MySQL.",
    repoLink: "https://github.com/Byelsantos11/Loja-Brinquedos.git",
    page: "/loja-brinquedo",
    imageUrl: brinquedo
  },

  {
    id: 2,
    title: "Projeto Aparecida",
    description:
      "Sistema completo desenvolvido para igrejas que organizam viagens para Aparecida. A aplicação oferece controle detalhado de assentos, dashboard administrativo, gerenciamento de passageiros, cadastro de viagens, mapa interativo de poltronas e acompanhamento de pagamentos. Todo o backend foi desenvolvido em Java Spring Boot com banco de dados MySQL.",
    repoLink: "https://github.com/Byelsantos11/Projeto-Aparecida.git",
    page: "/projeto-aparecida",
    imageUrl: aparecida
  },

  {
    id: 3,
    title: "BPG-Store",
    description:
      "Sistema criado para auxiliar na gestão de uma loja, oferecendo controle de estoque, cadastro de clientes, gerenciamento de serviços de conserto, dashboard inteligente e autenticação via JWT. Construído com Node.js e MySQL, garantindo segurança e desempenho.",
    repoLink: "https://github.com/Byelsantos11/BPG.git",
    page: "/bpg-store",
    imageUrl: bpg
  },

  {
    id: 4,
    title: "Token-JWT",
    description:
      "Este projeto demonstra minha evolução no backend com Spring Boot e Spring Security, aplicando autenticação, autorização e proteção de rotas com tokens JWT. É um sistema administrativo criado para praticar habilidades recém-aprendidas e construir um fluxo completo de segurança e gestão de usuários.",
    repoLink: "https://github.com/Byelsantos11/Token-JWT.git",
    page: "/token-jwt",
    imageUrl: jwt
  },

  {
    id: 5,
    title: "FibroSense",
    description:
    "Projeto de monitoramento de saúde para pacientes com fibromialgia, utilizando sensores vestíveis para coletar dados em tempo real. O sistema oferece análise de dados, alertas personalizados e um dashboard intuitivo para pacientes e profissionais de saúde. Desenvolvido com Kotlin, MongoDB e integração com Smartwatch, visando melhorar a qualidade de vida dos pacientes e fornecer insights valiosos para o tratamento da fibromialgia.",
    repoLink: "https://github.com/Fibr0Sense/fibrosense.git",
    page: "/fibrosense",
    imageUrl: fibro
  },

    {
    id: 6,
    title: "EstacioneIot",
    description:
    "Projeto de monitoramento de estacionamento utilizando Internet das Coisas (IoT). O sistema oferece análise de dados, alertas personalizados e um dashboard intuitivo para usuários e profissionais de saúde. Desenvolvido com Kotlin, MongoDB e integração com Smartwatch, visando melhorar a qualidade de vida dos pacientes e fornecer insights valiosos para o tratamento da fibromialgia.",
    repoLink: "https://github.com/Byelsantos11/Estacionamento-Iot.git",
      page: "/estacione-iot",
    imageUrl: estacione
  }
];

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <h2>Meus Projetos</h2>

        <div className={styles.grid}>
          {projectData.map((project) => (
            <div key={project.id} className={styles.card}>
              
              <img
                src={project.imageUrl}
                alt={project.title}
                className={styles.cardImage}
              />

              <div className={styles.cardContent}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className={styles.links}>
                  {project.page ? (
                    <Link to={project.page} className={styles.projectLink}>
                      Ver projeto
                    </Link>
                  ) : (
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver projeto
                    </a>
                  )}
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver no GitHub
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
