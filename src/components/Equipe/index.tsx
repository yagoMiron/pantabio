import styles from "./styles.module.css";
import equipe1 from "../../assets/img/IconCarlos.png";
import equipe2 from "../../assets/img/IconMateus.png";
import equipe3 from "../../assets/img/IconMercia.png";
import equipe4 from "../../assets/img/IconTiago.png";

import patrocinador1 from "../../assets/img/Parceiros1.svg";
import patrocinador2 from "../../assets/img/Parceiros2.svg";
import patrocinador3 from "../../assets/img/Parceiros3.svg";
import patrocinador4 from "../../assets/img/Parceiros4.svg";

const pessoas = [
  {
    nome: "Tiago Calves Nunes",
    foto: equipe4,
    descricao: "Dr. em Produção Vegeral CEO",
  },
  {
    nome: "Mércia Ikarugi B. Celoto",
    foto: equipe3,
    descricao: "Dra. em Agronomia",
  },
  {
    nome: "Mateus Lopes Gomes",
    foto: equipe2,
    descricao: "Engenheiro agrônomo",
  },
  {
    nome: "Carlos Eduardo B. Vieira Lima",
    foto: equipe1,
    descricao: "Graduando em agronomia",
  },
];

export default function CardsGrid() {
  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Conheça nossa equipe</h1>
      <div className={styles.grid}>
        {pessoas.map((pessoa, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.fotoContainer}>
              <img
                src={pessoa.foto}
                alt={pessoa.nome}
                className={styles.foto}
              />
            </div>
            <div className={styles.info}>
              <span className={styles.nome}>{pessoa.nome}</span>
              <div className={styles.linha}></div>
              <p className={styles.subtexto}>{pessoa.descricao}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Seção patrocinadores */}
      <section className={styles.patrocinadoresSection}>
        <div className={styles.patrocinadoresHeader}>
          <h2>Conheça nossos parceiros</h2>
          <div className={styles.divisor}></div>
        </div>
        <div className={styles.patrocinadoresContainer}>
          <img src={patrocinador1} alt="Patrocinador 1" />
          <img src={patrocinador2} alt="Patrocinador 2" />
          <img src={patrocinador3} alt="Patrocinador 3" />
          <img src={patrocinador4} alt="Patrocinador 4" />
        </div>
        <div className={styles.divisor2}></div>
      </section>
    </div>
  );
}
