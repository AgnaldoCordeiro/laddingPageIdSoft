import group46 from '../../assets/Group46.svg'
import styles from "./styles.module.scss";



export function Solucoes() {
  return (
    <section className={styles.container}>
      <div className={styles.titulo}>
        <h4>Conheça algumas de nossas soluções</h4>
        <p>A inteligência artificial é altamente versátil podendo ser utilizada em qualquer área</p>
      </div>
      <div className={styles.subContainer}>
        <div className={styles.cardContainer}>
          <div>
            <img src={group46} />

          </div>
          <div className={styles.card}>
            <h6>Predição de doenças</h6>
            <p>Identifique doenças antes que os sintomas apareçam aumentando a precisão do diagnóstico médico</p>
            <a>Saiba mais <i> - </i> </a>
          </div>
        </div>

      </div>

    </section >
  )
}