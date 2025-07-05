import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import icone from "../../assets/img/PantanaBioIcon.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 1000);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.page} ${scrolled ? styles.scrolled : ""}`}>
      <img className={styles.icon} src={icone} alt="icone" />
      <div className={styles.nav}>
        <a className={styles.nav_a} href="#sobre">
          Sobre
        </a>
        <a className={styles.nav_a} href="#tecnologia">
          Tecnologia
        </a>
        <a className={styles.nav_a} href="#solucoes">
          Soluções
        </a>
        <a className={styles.nav_a} href="#validacoes">
          Validações
        </a>
        <a className={styles.nav_a} href="#equipe">
          Equipe
        </a>
        <a className={styles.btn} href="#contato">
          Contato
        </a>
      </div>
    </nav>
  );
};

export default Header;
