import { Link } from "react-router-dom";
import styles from "./styles.module.scss";


export function ButtonSaibaMais() {
  return (
    <button className={styles.buttonSaibaMais}><Link to="SaibaMais"><p>Saiba mais</p></Link></button>
  )
}