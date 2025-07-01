import styles from "./styles.module.css";

import setas from "../../assets/icons/plus_arrow.svg";
import raiz from "../../assets/icons/root_plus.svg";
import lupa from "../../assets/icons/lupa_leaf.svg";
import escudo from "../../assets/icons/shield_plus.svg";

import folha from "../../assets/img/Solucoes1.png";
import uvas from "../../assets/img/Solucoes2.png";
import mudas from "../../assets/img/Solucoes3.png";
import raizes from "../../assets/img/Solucoes4.png";

type Props = {
  icon: "escudo" | "setas" | "lupa" | "raiz";
  img: "folha" | "uvas" | "mudas" | "raizes";
  title: string;
  children: any;
};

const SolucaoCard = ({ icon, img, title, children }: Props) => {
  const selectIcon = (iconName: string) => {
    switch (iconName) {
      case "escudo":
        return escudo;
      case "setas":
        return setas;
      case "lupa":
        return lupa;
      case "raiz":
        return raiz;
    }
  };
  const selectImg = (imgName: string) => {
    switch (imgName) {
      case "folha":
        return folha;
      case "uvas":
        return uvas;
      case "mudas":
        return mudas;
      case "raizes":
        return raizes;
    }
  };
  return (
    <div className={styles.card}>
      <div className={styles.title_box}>
        <img src={selectIcon(icon)} alt={icon} />
        <h3 className={styles.title}>{title}</h3>
      </div>
      <div className={styles.content}>
        <img src={selectImg(img)} alt={img} />
        {children}
      </div>
      <button className={styles.btn}>
        <strong> Clique aqui e saiba mais</strong>
      </button>
    </div>
  );
};

export default SolucaoCard;
