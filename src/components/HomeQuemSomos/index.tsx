import { NossosValores } from "../NossosValores";
import { NossoTime } from "../NossoTime";
import styles from "./styles.module.scss";

interface HomeQuemSomosProps {
  id: string;
}



export function HomeQuemSomos({ id }: HomeQuemSomosProps) {
  return (
    <>
      <section className={styles.container} id={id} onClick={(event) => console.log(event.currentTarget.id)} >
        <div className={styles.titleContainer} > 
          <h2 className={styles.titulo}  >Somos especialistas em tornar <br />processos mais ágeis e precisos</h2>
          <p className={styles.subTitulo}>Desenvolvemos softwares empregando inteligência artificial <br />minimizando erros e economizando seu tempo e dinheiro. <br /><br />Entendemos que cada realidade tem sua particularidade, por isso <br />valorizamos relações estreitas com nossos clientes a fim de garantir <br />que a melhor solução será entregue.</p>
        </div>
        <div className={styles.imgContainer}>
        </div>
      </section>
    </>
  )
}