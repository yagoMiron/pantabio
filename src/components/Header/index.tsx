import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import icone from "../../assets/icons/PantanaBioIcon.svg";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const larguraTela = window.screen.width;

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 0);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.page} ${scrolled ? styles.scrolled : ""}`}>
      <img className={styles.icon} src={icone} alt="icone" />
      <div className={styles.nav}>
        {(larguraTela <= 600 && scrolled) ||
          (larguraTela <= 400 && !scrolled) || (
            <>
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
            </>
          )}
        {(larguraTela <= 400 && !scrolled) || (
          <a className={styles.btn} href="#contato">
            Contato
          </a>
        )}
      </div>
    </nav>
  );
};

export default Header;
