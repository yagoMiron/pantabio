import styles from "./styles.module.css";
import celula from "../../assets/img/Celula.png";

const Tecnologia = () => {
  return (
    <div className={styles.page}>
      <h1>Tecnologia</h1>
      <div className={styles.absolute}>
        <img className={styles.celula} src={celula} alt="Celula vegetal" />
      </div>
    </div>
  );
};
export default Tecnologia;
