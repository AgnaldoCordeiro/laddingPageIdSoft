import styles from "./styles.module.scss";

interface CardProps {
  title: string;
  img: string;
}

export function MiniCard({ title, img }: CardProps) {
  return (
    <div className={styles.card}>
      <img alt={img} src={img} />
      <p className={styles.title}>{title}</p>
    </div>
  )
}