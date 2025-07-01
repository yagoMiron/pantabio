import styles from "./styles.module.css";
import celula from "../../assets/img/Celula.png";
import sustentabilidade from "../../assets/img/NossaTecnologia1.png";
import crescimento from "../../assets/img/NossaTecnologia2.png";
import resistencia from "../../assets/img/NossaTecnologia3.png";
import eficiencia from "../../assets/img/NossaTecnologia4.png";

import diagonalArrow from "../../assets/icons/diagonal-arrow.svg";
import TecnologiaCard from "../TecnolodiaCard";

const Tecnologia = () => {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Nossa Tecnologia</h1>
      <div className={styles.text_area}>
        <div className={styles.subtitle_area}>
          <h3 className={styles.subtitle}>
            Nossas cepas são adaptadas ao clima, solo e ambiente da região do
            Pantanal e Cerrado
          </h3>
          <img src={diagonalArrow} alt="seta diagonal" />
        </div>
        <hr className={styles.separator} />
        <p className={styles.description}>
          Dessa forma, podendo assim expressar seu máximo potencial frente as
          adversidades encontradas no campo. Elas{" "}
          <strong>protegem as plantas</strong> competindo com patógenos e
          parasitando fungos prejudiciais, melhorando o solo, reciclando
          nutrientes, e também aumentando a retenção de água e favorecendo o
          crescimento das raízes.
        </p>
      </div>
      <div className={styles.card_area}>
        <TecnologiaCard
          title="Sustentabilidade"
          text="Reduz o uso de agroquímicos, preservando o meio ambiente único do Pantanal."
        >
          <img src={sustentabilidade} alt="Sustentabilidade" />
        </TecnologiaCard>
        <TecnologiaCard
          title="Crescimento Saudável"
          text="Estimula o desenvolvimento das plantas através da produção de fitohormônios."
        >
          <img src={crescimento} alt="Crescimento Saudável" />
        </TecnologiaCard>
      </div>
      <div className={styles.card_area + " " + styles.displaced_line}>
        <TecnologiaCard
          title="Resistência a Doenças"
          text="Combate patógenos com enzimas líticas e induz resistência sistêmica nas plantas."
        >
          <img src={resistencia} alt="Resistência a Doenças" />
        </TecnologiaCard>
        <TecnologiaCard
          title="Eficiência"
          text="Aumenta a produtividade e a qualidade das colheitas, tornando sua propriedade um modelo de agricultura sustentável."
        >
          <img src={eficiencia} alt="Eficiência" />
        </TecnologiaCard>
      </div>
      <div className={styles.absolute}>
        <img className={styles.celula} src={celula} alt="Celula vegetal" />
      </div>
    </div>
  );
};
export default Tecnologia;
