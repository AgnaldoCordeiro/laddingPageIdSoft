import styles from "./styles.module.scss";
import acucena from '../../assets/acucena.svg'
import { CardAvatar } from "../CardAvatar";


export function NossoTime() {
  return (
    <section className={styles.container}>
      <div className={styles.subContainer}>
        <h3 className={styles.titulo}>Conheça nosso time</h3>
        <div className={styles.containerTime}>
        <div className={styles.timeContainer}>
          <CardAvatar img={acucena} title="Açucena Gois" subTitle="CEO e Diretora de Projetos" />
        </div>
        <div className={styles.timeContainer}>  
          <CardAvatar img={acucena} title="Allef Schmidt" subTitle="Engenheiro de Software" />
          <CardAvatar img={acucena} title="Gabriel Cordeiro" subTitle="Desenvolvedor Full-Stack" />
        </div>
        <div className={styles.timeContainer}>
          <CardAvatar img={acucena} title="Felipe Moreira" subTitle="Engenheiro de Dados" />
          <CardAvatar img={acucena} title="Pedro Carrera" subTitle="Social Media" />
        </div>

        </div>
      </div>
    </section>
  )
}