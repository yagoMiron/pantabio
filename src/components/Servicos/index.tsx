import styles from "./styles.module.css";
import iconeOk from "../../assets/img/OutrosServicosOk.png";
import iconeArrow from "../../assets/img/ServicosDisponiveis.png";
import ContatoCard from "../ContatoCard";

export default function OutrosServicos() {
  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Outros serviços</h1>
      <div className={styles.conteudo}>
        <div className={styles.coluna}>
          <p>
            <strong>
              Na nossa Clínica de Identificação de Doenças de Plantas
            </strong>
            , realizamos análises especializadas para detectar com precisão os
            principais patógenos que afetam a sua cultura. Seja na soja, milho,
            feijão, banana ou hortaliças, oferecemos um serviço técnico, ágil e
            confiável, que orienta o melhor manejo.
          </p>

          <div className={styles.servicosTitulo}>
            <img src={iconeArrow} alt="Ícone" />
            <strong>Serviços Disponíveis:</strong>
          </div>

          <ul className={styles.lista}>
            <li>
              <img src={iconeOk} alt="✓" />
              <strong>
                Diagnóstico de doenças foliares, radiculares e sistêmicas
              </strong>
            </li>
            <li>
              <img src={iconeOk} alt="✓" />
              <strong>
                Recomendações para manejo integrado de doenças (MID)
              </strong>
            </li>
            <li>
              <img src={iconeOk} alt="✓" />
              <strong>Suporte técnico personalizado</strong>
            </li>
          </ul>
        </div>

        <div className={styles.divisor}></div>

        <div className={styles.coluna}>
          <p>
            <strong>Na Clínica de Identificação de Nematóides</strong>,
            realizamos análises detalhadas de solo e raízes para detectar e
            quantificar as espécies de nematóides que impactam diretamente a
            produtividade da sua lavoura.
          </p>

          <div className={styles.servicosTitulo}>
            <img src={iconeOk} alt="Ícone" />
            <strong>Serviços Disponíveis:</strong>
          </div>

          <ul className={styles.lista}>
            <li>
              <img src={iconeArrow} alt="✓" />
              <strong>Identificação de espécies fitoparasitas</strong>
            </li>
            <li>
              <img src={iconeArrow} alt="✓" />
              <strong>
                Orientação sobre manejo biológico, químico e cultural
              </strong>
            </li>
            <li>
              <img src={iconeArrow} alt="✓" />
              <strong>
                Relatórios claros e práticos para tomada de decisão
              </strong>
            </li>
          </ul>
        </div>
      </div>

      <ContatoCard />

      {/* divisória horizontal */}
      <div className={styles.divisoriaHorizontal}></div>
    </div>
  );
}
