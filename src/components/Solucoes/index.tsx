import group46 from '../../assets/Group46.svg'
import group45 from '../../assets/Group45.svg'
import group48 from '../../assets/Group48.svg'
import group47 from '../../assets/Group47.svg'
import { CardImg } from '../CardImg';
import styles from "./styles.module.scss";
import { CardImgReverse } from '../CardImgReverse';



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
            <CardImg title="Predição de doenças" img={group46} subTexto="Identifique doenças antes que os sintomas apareçam aumentando a precisão do diagnóstico médico" />
          </div>
          <div className={styles.cards}>
            <CardImg title="Mineração de dados" img={group48} subTexto="Defina indicadores para avaliar seu negócio e identificar empecilhos de evolução" />
          </div>
        </div>
        <div>
          <div className={styles.cards}>
            <CardImgReverse title="Ordem de prioridade" img={group45} subTexto="Automatize seus processos manuais como: despache de materiais, triagem, ordem de prioridade de assistência técnica e diversas outras aplicações" />
          </div>
          <div className={styles.cards}>
            <CardImgReverse title="Sistema de recomendação" img={group47} subTexto="Mecanismos de busca que combinam as preferências do usuário com histórico de dados a fim de indicar a melhor escolha" />
          </div>
        </div>
      </div>

    </section >
  )
}