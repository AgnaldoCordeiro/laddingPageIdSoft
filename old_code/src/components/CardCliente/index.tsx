import styles from "./styles.module.scss";

interface CardProps {
  alt: string;
  img: string;
}

export function CardCliente({ alt, img }: CardProps) {
  return (
    <div className={styles.card}>
      <img alt={alt} src={img} />
    </div>
  )
}