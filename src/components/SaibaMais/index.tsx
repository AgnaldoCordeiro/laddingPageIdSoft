import { Footer } from "../Footer";
import Header from "../Header";
import { SaibaMaisSectionOne } from "../SaibaMaisSectionOne";
import styles from "../../styles.module.scss";


export function SaibaMais() {
  return (
    <div className={styles.container}>
         <Header />
      <SaibaMaisSectionOne />
      <Footer /> 
    </div>
  )
}