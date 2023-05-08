import { Footer } from "../Footer";
import Header from "../Header";
import { HomeQuemSomos } from "../HomeQuemSomos";
import { NossosValores } from "../NossosValores";
import { NossoTime } from "../NossoTime";
import styles from '../../styles.module.scss';
import { useEffect } from "react";





export function QuemSomos() {
  useEffect(() => {
    window.scrollTo(0, 0); // rola para o topo da página
  }, []);
  return (
    <div className={styles.container} id="quem-somos">
    <Header />
    <div className={styles.quemSomos}>
    <HomeQuemSomos id="quem-somos" />
      <NossosValores />
      <NossoTime />
    </div>
    <Footer /> 
  </div>
  )
}