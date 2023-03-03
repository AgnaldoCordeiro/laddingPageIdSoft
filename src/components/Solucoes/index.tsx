import group46 from '../../assets/Group46.svg'
import group45 from '../../assets/Group45.png'
import group48 from '../../assets/Group48.png'
import group47 from '../../assets/Group47.png'
import { CardImg } from '../CardImg';
import styles from "./styles.module.scss";

interface SolucoesProps {
  id: string;
}



export function Solucoes({ id }: SolucoesProps) {
  return (
    <div id="solucoes" className={styles.geral}>
    <section  className={styles.container} onClick={(event) => console.log(event.currentTarget.id)}>
      <div className={styles.titulo}>
        <h4>Conheça algumas de nossas soluções</h4>
        <p>A inteligência artificial é altamente versátil podendo ser utilizada em qualquer área</p>
      </div>
      <div className={styles.containerCards}>
        <div className={styles.containerLinha}>        
          <div className={styles.cards}>
            <CardImg height={"300px"} width={"332,86px"} title="Análise de dados para recomendações" img={group47} subTexto="Mecanismos de busca que combinam as preferências do usuário com histórico de dados a fim de indicar a melhor escolha." />
          </div>    
          <div className={styles.cards}>
            <CardImg  height={"300px"} width={"332,86px"} title="Diagnóstico de indicadores" img={group48} subTexto="A partir dos dados da empresa, verifique quais ações feitas estão dando resultados e quais os principais problemas que precisam ser resolvidos." />
          </div>        
         
                   
        </div>  
        <div className={styles.cards}>
            <CardImg height={"300px"} width={"332,86px"}  title="Organização de processos" img={group45} subTexto="Gerenciamento do seu negócio a partir do controle de processos, visando otimizar o desenvolvimento de todas as atividades da sua empresa." />
          </div>     
      </div>

    </section >
    </div>

  )
}