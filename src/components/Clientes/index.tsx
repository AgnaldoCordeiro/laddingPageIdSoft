import cliente1 from '../../assets/Cliente1.svg'
import cliente2 from '../../assets/Cliente2.svg'
import cliente3 from '../../assets/Cliente3.svg'
import cliente4 from '../../assets/Cliente4.svg'
import cliente5 from '../../assets/Cliente5.svg'
import cliente6 from '../../assets/Cliente6.svg'
import { CardCliente } from '../CardCliente'
import styles from "./styles.module.scss";



export function Clientes() {
  return (
    <section className={styles.container} id="clientes">
      <div className={styles.titulo}>
        <h6>Nossos clientes</h6>
      </div>
      <div >
        <div className={styles.cardContainer}>
          <CardCliente alt='4.Dias Branco' img={cliente1} />
          <CardCliente alt='SENAI' img={cliente2} />
          <CardCliente alt='SAO CARLOS IMAGEM' img={cliente3} />
        </div>
        <div className={styles.cardContainer}>
          <CardCliente alt='Grupo Control Engenaria' img={cliente4} />
          <CardCliente alt='Embrapa' img={cliente5} />
          <CardCliente alt='RJ Distribuidora' img={cliente6} />

        </div>
      </div>



    </section>
  )
}