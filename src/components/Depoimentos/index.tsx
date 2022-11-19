import styles from "./styles.module.scss";



export function Depoimentos() {
  return (
    <section className={styles.container}>
      <div className={styles.subContainer}>

     <div className={styles.titulo}>
      <p>DEPOIMENTOS</p>
      <h6>Empresas que confiam no nossos trabalho</h6>
      <button>Quero fazer parte</button>
     </div>
    <div > 
    <div className={styles.cardContainer}>
      <div>
        <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”</p>

        <div>
          <p>José Moreira <br /> <span>Diretor executivo da M. Dias Branco</span></p>
        </div>
        <div>
          <i>
            <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.94 14.12L3.83333 8L9.94 1.88L8.06 0L0.0599976 8L8.06 16L9.94 14.12Z" fill="#311629"/>
</svg>
</i>
 <i>
  <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.0600033 1.88L6.16667 8L0.0600033 14.12L1.94 16L9.94 8L1.94 0L0.0600033 1.88Z" fill="#311629"/>
</svg>
</i>
</div>
      </div>
     
     </div>
    </div>
      </div>

    

    </section>
  )
}