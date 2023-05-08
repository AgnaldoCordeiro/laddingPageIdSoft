import styles from "./styles.module.scss";
import backgorund from '../../assets/image25.svg'
import img from '../../assets/Rectangle1440.png'
import img2 from '../../assets/image25.png'
import { InstaFeed } from "../InstaFeed";

export function SaibaMaisSectionOne() {
  return (
    <main className={styles.container}>
      <img src={backgorund} />

      <section className={styles.subContainer}>
        <div className={styles.containerSaibaMais}>
          <div className={styles.containerTitulo}>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
          </div>

          <div className={styles.containerConteudo}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget felis eget nunc lobortis mattis aliquam faucibus purus. Massa tincidunt dui ut ornare. Ut aliquam purus sit amet luctus venenatis lectus magna.  Augue ut lectus arcu bibendum at varius vel pharetra vel. Penatibus et magnis dis parturient montes nascetur ridiculus mus mauris. Ultrices vitae auctor eu augue. Vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Pretium viverra suspendisse potenti nullam ac. Dictumst vestibulum rhoncus est pellentesque. </p>

            <div className={styles.s}>
              <img src={img} />
              <span className={styles.containerTituloImg}>Lorem ipsum dolor sit amet</span>
            </div>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget felis eget nunc lobortis mattis aliquam faucibus purus. Massa tincidunt dui ut ornare. Ut aliquam purus sit amet luctus venenatis lectus magna.  Augue ut lectus arcu bibendum at varius vel pharetra vel. Penatibus et magnis dis parturient montes nascetur ridiculus mus mauris. Ultrices vitae auctor eu augue. Vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Pretium viverra suspendisse potenti nullam ac. Dictumst vestibulum rhoncus est pellentesque. </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget felis eget nunc lobortis mattis aliquam faucibus purus. Massa tincidunt dui ut ornare. Ut aliquam purus sit amet luctus venenatis lectus magna.  Augue ut lectus arcu bibendum at varius vel pharetra vel. Penatibus et magnis dis parturient montes nascetur ridiculus mus mauris. Ultrices vitae auctor eu augue. Vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Pretium viverra suspendisse potenti nullam ac. Dictumst vestibulum rhoncus est pellentesque. </p>

            <div className={styles.containerImg}>
              <img src={img} />
              <span className={styles.containerTituloImg}>Lorem ipsum dolor sit amet</span>
            </div>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget felis eget nunc lobortis mattis aliquam faucibus purus. Massa tincidunt dui ut ornare. Ut aliquam purus sit amet luctus venenatis lectus magna.  Augue ut lectus arcu bibendum at varius vel pharetra vel. Penatibus et magnis dis parturient montes nascetur ridiculus mus mauris. Ultrices vitae auctor eu augue. Vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Pretium viverra suspendisse potenti nullam ac. Dictumst vestibulum rhoncus est pellentesque. </p>
          </div>



        </div>
        <div className={styles.containerFeed}>
          <h6>Conteúdos complementares</h6>
          <div className={styles.subContainerFeed}>
            <InstaFeed />

          </div>
        </div>
      </section>
    </main>
  )
}