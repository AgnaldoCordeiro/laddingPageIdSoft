import group46 from '../../assets/Group46.svg'
import group45 from '../../assets/Group45.png'
import group48 from '../../assets/Group48.png'
import group47 from '../../assets/Group47.png'
import { CardImg } from '../CardImg';
import styles from "./styles.module.scss";




export function Solucoes() {
  return (
    <section className={styles.container} id="solucoes">
      <div className={styles.titulo}>
        <h4>Conheça algumas de nossas soluções</h4>
        <p>A inteligência artificial é altamente versátil podendo ser utilizada em qualquer área</p>
      </div>
      <div className={styles.containerCards}>
        <div>        
          <div className={styles.cards}>
            <CardImg height={"300px"} width={"332,86px"} title="Análise de dados para recomendações" img={group47} subTexto="Mecanismos de busca que combinam as preferências do usuário com histórico de dados a fim de indicar a melhor escolha." />
          </div>          
          <div className={styles.cards}>
            <CardImg height={"300px"} width={"332,86px"}  title="Organização de processos" img={group45} subTexto="Gerenciamento do seu negócio a partir do controle de processos, visando otimizar o desenvolvimento de todas as atividades da sua empresa." />
          </div>                 
        </div>  
        <div>
        <div className={styles.cards}>
            <CardImg height={"400px"} width={"400,86px"} title="Diagnóstico de indicadores" img={group48} subTexto="A partir dos dados da empresa, verifique quais ações feitas estão dando resultados e quais os principais problemas que precisam ser resolvidos." />
          </div> 
          </div>     
      </div>

    </section >
  )
}