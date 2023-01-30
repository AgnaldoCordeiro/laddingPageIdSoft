import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

interface CardProps {
  title: string;
  img: string;
  subTexto: string;
  width: string;
  height: string;
}

export function CardImg({ title, img, subTexto,width, height  }: CardProps) {
  return (
    <div className={styles.subContainer}>
      <div className={styles.imagem}>
        <img src={img} alt={title} width={width} height={height} id={styles.img}/>
      </div>
      <div className={styles.card}>
        <div className={styles.tituloCard}>
          <h6>{title}</h6>
          <p>{subTexto}</p>
         {/*  <Link to="SaibaMais"><a>Saiba mais <i> <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.295018 2.33114L4.87502 6.92114L0.295018 11.5111L1.70502 12.9211L7.70502 6.92114L1.70502 0.921143L0.295018 2.33114Z" fill="#980138" />
          </svg>
          </i> </a></Link> */}
        </div>

      </div>
    </div>
  )
}