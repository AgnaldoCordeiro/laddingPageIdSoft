import { ButtonSaibaMais } from "../ButtonSaibaMais";
import styles from "./styles.module.scss";


export function Home() {
  return (
    <main className={styles.container}>
      <h1 className={styles.titulo}>Inteligência no <br /> desenvolvimento de softwares</h1>
      <p className={styles.subTitulo}>Utilize a inteligência artificial a seu favor. <br /> Obtenha soluções inovadoras de acordo com a sua necessidade</p>
      <ButtonSaibaMais />
    </main>
  )
}