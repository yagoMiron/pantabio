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

function SvgBackground(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 741 171"
      fill="none"
      className={styles.svg}
      {...props}
    >
      <path
        fill="#8BAA93"
        d="M0 60C0 26.8629 26.8629 0 60 0h665c8.837 0 16 7.163 16 16v95c0 33.137-26.863 60-60 60H16c-8.837 0-16-7.163-16-16V60Z"
      />

      <text x="24" y="50" fontSize="24" fontWeight="700" fill="#2B4840">
        Garanta saúde, produtividade e rentabilidade para sua propriedade!
      </text>
      <text x="24" y="70" fontSize="16" fontWeight="700" fill="#2B4840">
        Nossa equipe especializada está pronta para ajudar você a proteger e
        potencializar sua produção!
      </text>

      <circle
        cx="656"
        cy="120"
        r="29"
        fill="#8BAA93"
        stroke="#2b4840"
        strokeWidth="2"
      />

      <rect width="600" height="60" x="54" y="94" fill="#8CC869" rx="30" />
    </svg>
  );
}
