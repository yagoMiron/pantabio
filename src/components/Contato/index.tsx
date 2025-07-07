import styles from "./styles.module.css";
import { MailPlus } from "lucide-react";
import sendEmail from "../../services/sendEmail";
import { useState } from "react";
import IsEmail from "../../services/isEmail";

export default function Contato() {
  const [nome, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMessage] = useState("");
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

        <form
          className={styles.formulario}
          onSubmit={(e) => {
            e.preventDefault();
            setName("");
            setEmail("");
            setMessage("");
          }}
        >
          <div className={styles.inputLinha}>
            <input
              type="text"
              value={nome}
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
              placeholder="1. Seu nome"
              className={styles.input}
            />
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
              placeholder="2. Seu email"
              className={styles.input}
            />
          </div>
          <textarea
            placeholder="3. Sua mensagem"
            value={mensagem}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            required
            className={styles.textarea}
          />

          <button
            className={styles.sendBtn}
            onClick={() => {
              if (nome && email && IsEmail(email) && mensagem) {
                sendEmail(nome, email, mensagem);
              }
            }}
          >
            4. Enviar mensagem <MailPlus height={32} width={32} />
          </button>
        </form>
      </div>
    </div>
  );
}
