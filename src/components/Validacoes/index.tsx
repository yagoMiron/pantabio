import { useState } from "react";
import styles from "./styles.module.css";

import card1 from "../../assets/img/Validacoes1.png";
import card2 from "../../assets/img/Validacoes2.png";
import card3 from "../../assets/img/Validacoes3.png";
import card4 from "../../assets/img/Validacoes4.png";
import card5 from "../../assets/img/Validacoes5.png";
import card6 from "../../assets/img/Validacoes6.png";
import downArrow from "../../assets/icons/down-arrow.svg";
import InstagramCard from "../InstagramCard";
const imagens = [card1, card2, card3, card4, card5, card6];

const Validacoes = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const anterior = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev === 0 ? imagens.length - 1 : prev - 1));
      setFade(true);
    }, 100);
  };

  const proximo = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev === imagens.length - 1 ? 0 : prev + 1));
      setFade(true);
    }, 250);
  };

  return (
    <div className={styles.page}>
      <div className={styles.titulo}>Validações</div>

      <div className={styles.carrossel}>
        <button className={`${styles.arrow} ${styles.left}`} onClick={anterior}>
          <img src={downArrow} alt="Anterior" />
        </button>

        <div
          className={`${styles.imagemContainer} ${
            fade ? styles.fadeIn : styles.fadeOut
          }`}
        >
          <img src={imagens[index]} alt={`Imagem ${index + 1}`} />
        </div>

        <button className={`${styles.arrow} ${styles.right}`} onClick={proximo}>
          <img src={downArrow} alt="Próxima" />
        </button>
      </div>
      <InstagramCard></InstagramCard>
    </div>
  );
};

export default Validacoes;
