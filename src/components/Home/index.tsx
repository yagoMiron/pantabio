import styles from "./styles.module.css";

const Home = () => {
  return (
    <div className={styles.page}>
      <p className={styles.description}>
        Com a Pantabio você vai encontrar as soluções para os problemas da sua
        lavoura, sejam pragas, doenças ou baixa produtividade, nós podemos te
        ajudar.
      </p>
      <button className={styles.btn}>Descubra</button>
    </div>
  );
};
export default Home;
