import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import icone from "../../assets/img/PantanaBioIcon.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 900);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.page} ${scrolled ? styles.scrolled : ""}`}>
      <img className={styles.icon} src={icone} alt="icone" />
      <div>
        <a href="#sobre">Sobre</a>
        <a href="#tecnologia">Tecnologia</a>
        <a href="#solucoes">Soluções</a>
        <a href="#validacoes">Validações</a>
        <a href="#equipe">Equipe</a>
        <a href="#contato" className={styles.btn}>
          Contato
        </a>
      </div>
    </nav>
  );
};

export default Header;
