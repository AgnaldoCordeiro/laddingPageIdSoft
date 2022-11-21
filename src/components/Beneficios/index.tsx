import { ButtonSaibaMais } from "../ButtonSaibaMais";
import impulsionar from '../../assets/Impulsionar.svg'
import automatizar from '../../assets/Automatizar.svg'
import agilizar from '../../assets/Agilizar.svg'
import decisao from '../../assets/Decisao.svg'
import diminuirCustos from '../../assets/DiminuirCustos.svg'
import layer1 from '../../assets/layer1.svg'
import styles from "./styles.module.scss";
import { CardBeneficios } from "../Card";


export function Beneficios() {
  return (
    <section className={styles.container} id="beneficios">
      <div className={styles.subContainer}>

        <div>
          <h3 className={styles.titulo}>Contribuições da <br /> inteligência artificial <br /> para a sua empresa</h3>
          <ButtonSaibaMais />
        </div>
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
      </div>

    </section>
  )
}