import styles from "./styles.module.scss";
import acucena from '../../assets/acucena.svg'
import { CardAvatar } from "../CardAvatar";


export function NossoTime() {
  return (
    <section className={styles.container}>
      <div className={styles.subContainer}>
        <h3 className={styles.titulo}>Conheça nosso time</h3>
        <div className={styles.timeContainer}>
          <CardAvatar img={acucena} title="Açucena Gois" subTitle="Fundadora da IDSoft Diretora de projetos" />
          <CardAvatar img={acucena} title="Açucena Gois" subTitle="Fundadora da IDSoft Diretora de projetos" />
          <CardAvatar img={acucena} title="Açucena Gois" subTitle="Fundadora da IDSoft Diretora de projetos" />
          <CardAvatar img={acucena} title="Açucena Gois" subTitle="Fundadora da IDSoft Diretora de projetos" />

        </div>
      </div>
    </section>
  )
}