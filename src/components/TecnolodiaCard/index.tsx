import styles from "./styles.module.css";

type Props = {
  title: string;
  text: string;
  children: any;
};

const TecnologiaCard = ({ title, text, children }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.img_box}>{children}</div>
      <div className={styles.text_area}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{text}</p>
      </div>
    </div>
  );
};
export default TecnologiaCard;
