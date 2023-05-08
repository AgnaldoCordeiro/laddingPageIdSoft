import { subtle } from "crypto";
import styles from "./styles.module.scss";

interface CardProps {
  title: string;
  img: string;
}
const cardElement = document.querySelector('.card');

function updateCardSize() {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const cardAspectRatio = 0.1; // escolha a proporção que você deseja

  const cardWidth = Math.min(screenWidth * 0.9, screenHeight * 0.9 * cardAspectRatio);
  const cardHeight = cardWidth / cardAspectRatio;

  document.documentElement.style.setProperty('--card-width', `${cardWidth}px`);
  document.documentElement.style.setProperty('--card-height', `${cardHeight}px`);


}

updateCardSize();

window.addEventListener('resize', updateCardSize);


export function CardBeneficios({ title, img }: CardProps) {
  return (
    <div className={styles.card}>
      <img alt={img} src={img} />
      <p>{title}</p>
    </div>
  )
}