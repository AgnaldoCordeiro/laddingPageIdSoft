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
     
        </div>

      </div>
    </div>
  )
}