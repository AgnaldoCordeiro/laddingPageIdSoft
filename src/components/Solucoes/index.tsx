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
  const screenWidth = window.innerWidth;
  const cardWidth = screenWidth > 1200 ? "332.86px" : "132.86px";
  const cardHeight = screenWidth > 1200 ? "300px" : "200px";

  return (
    <div id="solucoes" className={styles.geral}>
      <section className={styles.container}>
        <div className={styles.titulo}>
          <h4>Conheça algumas de nossas soluções</h4>
          <p>A inteligência artificial é altamente versátil podendo ser utilizada em qualquer área</p>
        </div>
        <div className={styles.containerCards}>
          <div className={styles.containerLinha}>
            <div>
              <CardImg height={cardHeight} width={cardWidth} title="Análise de dados para recomendações" img={group47} subTexto="Mecanismos de busca que combinam as preferências do usuário com histórico de dados a fim de indicar a melhor escolha." />
            </div>
            <div>
              <CardImg height={cardHeight} width={cardWidth} title="Diagnóstico de indicadores" img={group48} subTexto="A partir dos dados da empresa, verifique quais ações feitas estão dando resultados e quais os principais problemas que precisam ser resolvidos." />
            </div>
          </div>
          <div>
            <CardImg height={cardHeight} width={cardWidth} title="Organização de processos" img={group45} subTexto="Gerenciamento do seu negócio a partir do controle de processos, visando otimizar o desenvolvimento de todas as atividades da sua empresa." />
          </div>
        </div>
      </section>
    </div>
  )
}
