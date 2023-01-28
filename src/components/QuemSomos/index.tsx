import { Footer } from "../Footer";
import Header from "../Header";
import { HomeQuemSomos } from "../HomeQuemSomos";
import { NossosValores } from "../NossosValores";
import { NossoTime } from "../NossoTime";
import styles from '../../styles.module.scss';

export function QuemSomos() {
  return (
    <div className={styles.container}>
         <Header />
      <HomeQuemSomos />
      <NossosValores />
      <NossoTime />
      <Footer /> 
    </div>
  )
}