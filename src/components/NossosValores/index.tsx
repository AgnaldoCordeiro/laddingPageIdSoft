import { MiniCard } from "../MiniCard";
import styles from "./styles.module.scss";
import foco from '../../assets/path302.svg'
import seguranca from '../../assets/path337.svg'
import comunicacao from '../../assets/comunicacao1.svg'
import crecimento from '../../assets/path427.svg'
import proatividade from '../../assets/proatividade.png'
import transparencia from '../../assets/transparencia.png'
import etica from '../../assets/etica.png'
import flexibilidade from '../../assets/flexibilidade.png'

export function NossosValores() {
  return (
    <section className={styles.container} id="valores">
      <div className={styles.subContainer}>
        <h3 className={styles.titulo}>Nossos valores</h3>
       <div className={styles.containerValores}>
        <div className={styles.valoresContainer}>
          <MiniCard img={foco} title="Foco" />
          <MiniCard img={seguranca} title="Segurança" />
          <MiniCard img={comunicacao} title="Comunicação" />
          <MiniCard img={crecimento} title={`Crescimento em conjunto`} />
        </div>
        <div className={styles.valoresContainer}>       
          <MiniCard img={proatividade} title="Proatividade" />
          <MiniCard img={transparencia} title="Transparência" />
          <MiniCard img={etica} title="Ética" />
          <MiniCard img={flexibilidade} title="Flexibilidade" />
        </div>
       </div>
      </div>
    </section>
  )
}