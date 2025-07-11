import styles from "./styles.module.css";
import downArrow from "../../assets/icons/down-arrow.svg";

const Home = () => {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <p className={styles.description}>
          Com a Pantabio você vai encontrar as soluções para os problemas da sua
          lavoura, sejam pragas, doenças ou baixa produtividade, nós podemos te
          ajudar.
        </p>
        <button className={styles.btn}>Descubra</button>
        <a href="#sobre">
          <img src={downArrow} alt="Arrow" className={styles.arrow} />
        </a>
      </div>
    </div>
  );
};
export default Home;
