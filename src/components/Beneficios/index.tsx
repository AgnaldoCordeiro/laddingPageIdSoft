import { ButtonSaibaMais } from "../ButtonSaibaMais";
import impulsionar from '../../assets/Impulsionar.svg'
import automatizar from '../../assets/Automatizar.svg'
import agilizar from '../../assets/Agilizar.svg'
import decisao from '../../assets/Decisao.svg'
import diminuirCustos from '../../assets/DiminuirCustos.svg'
import layer1 from '../../assets/layer1.svg'
import styles from "./styles.module.scss";
import { CardBeneficios } from "../Card";
import { useEffect, useRef, useState } from "react";


export function Beneficios() {

  const divRef = useRef<HTMLDivElement>(null);
const [style, setStyle] = useState(false);
useEffect(() => {
  const width = divRef.current ? divRef.current.offsetWidth: 0;

  if (width <= 1024) {
    setStyle(true)
  }
  if(width > 1024) {
    setStyle(false)
  }

}, [divRef.current]);

  return (
    <section className={styles.container} id="beneficios" ref={divRef}>
      <div className={styles.subContainer}>

        <div className={styles.containerTitulo}>
          <h3 className={styles.titulo}>Contribuições da <br /> inteligência artificial <br /> para a sua empresa</h3>
          <ButtonSaibaMais />
        </div>
      
          {style === false ? 
            <div className={styles.cardContainer}>
            <div className={styles.cardContainer2}>
            <CardBeneficios img={impulsionar} title="Impulsionamento nas habilidades e competências de seus colaboradores" />
            <CardBeneficios img={automatizar} title="Otimização e automação de processos" />
            <CardBeneficios img={agilizar} title="Agilidade no cruzamento e análise de dados" />
          </div>  
          <div className={styles.cardContainer2}>
            <CardBeneficios img={decisao} title="Auxilio na tomada de decisões mais assertivas" />
            <CardBeneficios img={diminuirCustos} title="Redução estratégica nos custos operacionais" />
            <CardBeneficios img={layer1} title="Identifica erros, fraudes e previne riscos" />
          </div>
          </div>
          :
          <div className={styles.cardContainer}>
          <div className={styles.cardContainer2}>
          <CardBeneficios img={impulsionar} title="Impulsionamento nas habilidades e competências de seus colaboradores" />
          <CardBeneficios img={automatizar} title="Otimização e automação de processos" />
        </div>  
        <div className={styles.cardContainer2}>
          <CardBeneficios img={agilizar} title="Agilidade no cruzamento e análise de dados" />

          <CardBeneficios img={decisao} title="Auxilio na tomada de decisões mais assertivas" />
        </div>
        <div className={styles.cardContainer2}>
          <CardBeneficios img={diminuirCustos} title="Redução estratégica nos custos operacionais" />
          <CardBeneficios img={layer1} title="Identifica erros, fraudes e previne riscos" />
        </div>
        </div>
         
          }
        
      </div>

    </section>
  )
}