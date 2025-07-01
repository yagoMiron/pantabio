import styles from "./styles.module.css";
import logo from "../../assets/img/LogoFooter.svg";
import linkedIn from "../../assets/img/LinkedinIcon.png";
import instagram from "../../assets/img/InstagramIcon.png";
import whatsapp from "../../assets/img/WhatsappIcon.png";

const Footer = () => {
  return (
    <div className={styles.page}>
      <div className={styles.logo_area}>
        <img src={logo} alt="Pantabio Bioprospectando o futuro" />
        <p>Todos os direitos reservados.</p>
      </div>
      <div className={styles.contact_area}>
        <div className={styles.address_area}>
          <button>Voltar ao topo</button>
          <p>
            Rodovia Graziela Maciel Barroso, Aquidauana, Mato Grosso do Sul
            79200-000
          </p>
        </div>
        <div className={styles.social_area}>
          <div className={styles.social}>
            <img
              className={styles.social_icon}
              src={linkedIn}
              alt="Entre em contato pelo LinkedIn"
            />
            <img
              className={styles.social_icon}
              src={instagram}
              alt="Entre em contato pelo Instagram"
            />
            <img
              className={styles.social_icon}
              src={whatsapp}
              alt="Entre em contato pelo Whatsapp"
            />
          </div>
          <p className={styles.globe}>Brasil, 2025</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
