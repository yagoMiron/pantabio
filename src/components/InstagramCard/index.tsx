import styles from "./styles.module.css";
import { ArrowRight } from "lucide-react";
import instagram from "../../assets/img/instaIcon.png";

export default function InstagramCard() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <SvgBackground />

        {/* Botão sobre o retângulo verde */}
        <a
          href="https://www.instagram.com/pantabio/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          <div className={styles.buttonLeft}>
            <div className={styles.instagram}>
              <img src={instagram} alt="Instagram" />
            </div>
            <span>Clique aqui e acesse nosso perfil</span>
          </div>

          <ArrowRight size={40} className={styles.arrow} />
        </a>
      </div>
    </div>
  );
}

function SvgBackground(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 588 241"
      fill="none"
      className={styles.svg}
      {...props}
    >
      {/* Fundo principal */}
      <path
        fill="#8BAA93"
        d="M0 80C0 35.817 35.817 0 80 0h492c8.837 0 16 7.163 16 16v145c0 44.183-35.817 80-80 80H16c-8.837 0-16-7.163-16-16V80Z"
      />

      {/* Textos */}
      <text
        x="54"
        y="70"
        fontFamily="Segoe UI, sans-serif"
        fontSize="25"
        fontWeight="800"
        fill="#2B4840"
      >
        Quer conhecer um pouco mais dos
      </text>
      <text
        x="54"
        y="102"
        fontFamily="Segoe UI, sans-serif"
        fontSize="25"
        fontWeight="800"
        fill="#2B4840"
      >
        nossos projetos? Nos siga no Instagram.
      </text>
      {/* Bolinha preta do lado direito */}
      <circle
        className="styles.circle"
        cx="506" /* início do rect (54) + largura (452) */
        cy="164"
        r="29"
        fill="#8BAA93"
        stroke="#2b4840"
        strokeWidth="2"
      />

      {/* Retângulo verde */}
      <rect width="452" height="60" x="54" y="134" fill="#8CC869" rx="30" />
    </svg>
  );
}
