import styles from "./styles.module.css";
import downArrow from "../../assets/icons/down-arrow-white.svg";
import SolucaoCard from "../SolucaoCard";

const Solucoes = () => {
  return (
    <div className={styles.page}>
      <div className={styles.color_filter}>
        <h1 className={styles.title}>Soluções</h1>
        <div className={styles.card_area}>
          <SolucaoCard
            icon="escudo"
            img="folha"
            title="Proteção contra doenças"
          >
            <p>
              Com o uso de Pantabio, os Trichodermas podem{" "}
              <strong> recuperar até 70% da saúde</strong> da planta atingida
              pela doença Mancha Alvo <i>(Corynespora casiicola)</i>.
            </p>
          </SolucaoCard>
          <SolucaoCard icon="setas" img="uvas" title="Promotor de crescimento">
            <p>
              Com a aplicação de Pantabio em viticultura, o tamanho dos{" "}
              <strong> cachos aumentaram em 35%</strong> e o{" "}
              <strong>número de cachos aumentou em 50%.</strong>
            </p>
          </SolucaoCard>
          <SolucaoCard icon="lupa" img="mudas" title="Aumento da produtividade">
            <p>
              Com testes em feijão irrigado, a Pantabio{" "}
              <strong> aumentou a produtividade em 49%</strong>, quando
              comparada à cultura testemunha, sem Pantabio, um aumento de 20
              sacas.
            </p>
          </SolucaoCard>
          <SolucaoCard icon="raiz" img="raizes" title="Crescimento radicular">
            <p>
              Com o uso de Pantabio,{" "}
              <strong>o volume radicular aumentou em até 53%</strong>
              quando comparado com a cultura testemunha, sem bioinsumos
              aplicados.
            </p>
          </SolucaoCard>
        </div>
        <div className={styles.btn_area}>
          <button className={styles.btn}>Saiba mais</button>
          <img src={downArrow} alt="seta para baixo" className={styles.arrow} />
        </div>
      </div>
    </div>
  );
};
export default Solucoes;
