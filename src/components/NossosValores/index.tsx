import { MiniCard } from "../MiniCard";
import styles from "./styles.module.scss";
import foco from '../../assets/path302.svg'
import seguranca from '../../assets/path337.svg'
import comunicacao from '../../assets/comunicacao1.svg'
import crecimento from '../../assets/path427.svg'
import eclipse from '../../assets/Ellipse82.svg'

export function NossosValores() {
  return (
    <section className={styles.container}>
      <div className={styles.subContainer}>
        <h3 className={styles.titulo}>Nossos valores</h3>
        <div className={styles.valoresContainer}>
          <MiniCard img={foco} title="Foco" />
          <MiniCard img={seguranca} title="Segurança" />
          <MiniCard img={comunicacao} title="Comunicação" />
          <MiniCard img={crecimento} title={"Crescimento em conjunto"} />
          <MiniCard img={eclipse} title="Proatividade" />
          <MiniCard img={eclipse} title="Transparência" />
          <MiniCard img={eclipse} title="Ética" />
          <MiniCard img={eclipse} title="Flexibilidade" />

        </div>
      </div>
    </section>
  )
}