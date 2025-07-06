import styles from "./styles.module.css";
import { ArrowDown } from "lucide-react";
import { Circle } from "lucide-react";

export default function ContatoCard() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.cardContato}>
        <h3 className={styles.title}>
          Garanta saúde, produtividade e rentabilidade para sua propriedade!
        </h3>
        <p className={styles.text}>
          Nossa equipe especializada está pronta para ajudar você a proteger e
          potencializar sua produção!
        </p>
        <div className={styles.button_area}>
          <a href="#contato" className={styles.button}>
            <div className={styles.buttonLeft}>
              <strong>Entre em contato agora e envie suas amostras</strong>
              <ArrowDown
                strokeWidth={1.5}
                size={40}
                className={styles.arrowDown}
              />
            </div>
          </a>
          <Circle strokeWidth={1} size={64} className={styles.circle} />
        </div>
      </div>
    </div>
  );
}
