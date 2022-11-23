import styles from "./styles.module.scss";

interface CardProps {
  title: string;
  img: string;
  subTitle?: string;
}

export function CardAvatar({ title, img, subTitle }: CardProps) {
  return (
    <div className={styles.card}>
      <img alt={img} src={img} width='181.67px' height='184.98px' />
      <p className={styles.titulo}>{title}</p>
      <p className={styles.subTitulo}>{subTitle}</p>
    </div>
  )
}