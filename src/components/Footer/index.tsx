import styles from "./styles.module.css";
import logo from "../../assets/img/LogoFooter.svg";
import linkedIn from "../../assets/icons/LinkedInIcon.svg";
import instagram from "../../assets/icons/InstagramIcon.svg";
import whatsapp from "../../assets/icons/WhatsappIcon.svg";
import { ChevronUp } from "lucide-react";

const Footer = () => {
  return (
    <div className={styles.page}>
      <div className={styles.logo_area}>
        <img src={logo} alt="Pantabio Bioprospectando o futuro" />
        <p className={styles.marca}>Todos os direitos reservados.</p>
      </div>
      <div className={styles.contact_area}>
        <div className={styles.address_area}>
          <a href="#home" className={styles.back_btn}>
            Voltar ao topo
            <ChevronUp height={36} width={44} />
          </a>

          <p className={styles.address}>
            Rodovia Graziela Maciel Barroso
            <br />
            Aquidauana, Mato Grosso do Sul 79200-000
          </p>
        </div>
        <div className={styles.social_area}>
          <div className={styles.social}>
            <a href="" className={styles.linkedIn}></a>
            <a
              href="https://www.instagram.com/pantabio/"
              className={styles.instagram}
            ></a>
            <a href="" className={styles.whatsapp}></a>
          </div>
          <p className={styles.globe}>Brasil, 2025</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
