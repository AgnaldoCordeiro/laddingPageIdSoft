import styles from "./styles.module.scss";

interface CardProps {
  title: string;
  img: string;
  subTitle?: string;
}

export function CardAvatar({ title, img, subTitle }: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.containerImg}>
      <img alt={img} src={img} />
      </div>
      <div className={styles.containerText}>
      <p className={styles.titulo}>{title}</p>
      <p className={styles.subTitulo}>{subTitle}</p>
      </div>
    </div>
  )
}