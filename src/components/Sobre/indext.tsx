import styles from "./styles.module.css";
const Sobre = () => {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Sobre</h1>
      <p className={styles.description}>
        Localizada na cidade de Aquidauana- Portal do Pantanal, somos uma
        startup de bioprospecção de micro-organismos para controle biológico de
        doenças em plantas, aliada a eficiência, meio ambiente e efetividade nos
        resultados. 
      </p>
      <hr className={styles.separator} />
      <div className={styles.info}>
        <div>
          <h2 className={styles.subtitle}>A Pantabio</h2>
          <p className={styles.text}>
            Somos a primeira startup de biotecnologia focada em soluções
            biológicas e sustentáveis para a agricultura. Trabalhamos com fungos
            especiais chamados Trichoderma, nativos do Pantanal e no Cerrado
            brasileiro!
          </p>
        </div>
        <div>
          <h2 className={styles.subtitle}>Visão</h2>
          <p className={styles.text}>
            Tornar as tecnologias limpas e seguras acessíveis para todos,
            permitindo que produtores rurais de qualquer tamanho possam cultivar
            de forma saudável, eficiente e sem prejudicar a natureza.
          </p>
        </div>
        <div>
          <h2 className={styles.subtitle}>Missão</h2>
          <p className={styles.text}>
            Criar uma agricultura mais inteligente, sustentável e fácil de
            alcançar, diminuindo o uso de produtos químicos e fortalecendo a
            conexão entre produzir alimentos e cuidar do meio ambiente.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Sobre;
