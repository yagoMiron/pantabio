import styles from "./styles.module.css";
import { MailPlus } from "lucide-react";

export default function Contato() {
  return (
    <div className={styles.contatoSection}>
      <div className={styles.textoContainer}>
        <div className={styles.textoContato}>
          <h1 className={styles.titulo}>Entre em contato</h1>
          <p className={styles.subtitulo}>
            Descubra como podemos te ajudar na sua cultura, melhorando
            <br />
            sua produção e avançando rumo à agricultura sustentável.
          </p>
        </div>

        <form className={styles.formulario}>
          <div className={styles.inputLinha}>
            <input
              type="text"
              placeholder="1. Seu nome"
              className={styles.input}
            />
            <input
              type="email"
              placeholder="2. Seu email"
              className={styles.input}
            />
          </div>
          <textarea
            placeholder="3. Sua mensagem"
            className={styles.textarea}
          ></textarea>

          <button className={styles.sendBtn}>
            4. Enviar mensagem <MailPlus height={32} width={32} />
          </button>
        </form>
      </div>
    </div>
  );
}
