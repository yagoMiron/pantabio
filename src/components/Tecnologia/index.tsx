import styles from "./styles.module.css";
import celula from "../../assets/img/Celula.png";
import diagonalArrow from "../../assets/icons/diagonal-arrow.svg";

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
      <div className={styles.absolute}>
        <img className={styles.celula} src={celula} alt="Celula vegetal" />
      </div>
    </div>
  );
};
export default Tecnologia;
