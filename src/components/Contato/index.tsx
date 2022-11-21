import { Formulario } from "../Formulario";
import styles from "./styles.module.scss";



export function Contato() {
  return (
    <section className={styles.container}>
      <div className={styles.subContainer}>
        <Formulario />
      </div>
    </section>
  )
}