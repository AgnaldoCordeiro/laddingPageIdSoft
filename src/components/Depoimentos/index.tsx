import styles from "./styles.module.scss";



export function Depoimentos() {
  return (
    <section className={styles.container} id="depoimentos">
      <div className={styles.subContainer}>

        <div className={styles.titulo}>
          <p>DEPOIMENTOS</p>
          <h6>Empresas que confiam <br /> no nossos trabalho</h6>
          <button>
            <p>
              Quero fazer parte
            </p>
          </button>
        </div>
      </div>
      <div >
        <div className={styles.cardContainer}>
          <div>
            <svg className={styles.aspas} width="70" height="57" viewBox="0 0 70 57" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M54.39 56.904C50.1887 56.904 46.6267 55.3513 43.704 52.246C40.7813 48.958 39.32 44.574 39.32 39.094C39.32 31.2393 40.5073 24.846 42.882 19.914C45.2567 14.7993 47.9053 10.7807 50.828 7.85799C54.116 4.56999 58.0433 2.10399 62.61 0.45999L65.35 4.844C62.2447 6.30532 59.5047 8.04066 57.13 10.05C55.1207 11.8767 53.2027 14.0687 51.376 16.626C49.732 19.0007 48.91 21.9233 48.91 25.394C48.91 26.6727 49.0927 27.6773 49.458 28.408C49.6407 28.956 49.9147 29.3213 50.28 29.504C50.6453 29.3213 51.1933 29.1387 51.924 28.956C52.472 28.7733 53.02 28.5907 53.568 28.408C54.2987 28.2253 55.0293 28.134 55.76 28.134C59.9613 28.134 63.2493 29.4127 65.624 31.97C68.1813 34.3447 69.46 37.6327 69.46 41.834C69.46 46.0353 67.9987 49.5973 65.076 52.52C62.1533 55.4427 58.5913 56.904 54.39 56.904ZM16.03 56.904C11.8287 56.904 8.26667 55.3513 5.344 52.246C2.42133 48.958 0.960001 44.574 0.960001 39.094C0.960001 31.2393 2.14733 24.846 4.522 19.914C6.89667 14.7993 9.54533 10.7807 12.468 7.85799C15.756 4.56999 19.6833 2.10399 24.25 0.45999L26.99 4.844C23.8847 6.30532 21.1447 8.04066 18.77 10.05C16.7607 11.8767 14.8427 14.0687 13.016 16.626C11.372 19.0007 10.55 21.9233 10.55 25.394C10.55 26.6727 10.7327 27.6773 11.098 28.408C11.2807 28.956 11.5547 29.3213 11.92 29.504C12.2853 29.3213 12.8333 29.1387 13.564 28.956C14.112 28.7733 14.66 28.5907 15.208 28.408C15.9387 28.2253 16.6693 28.134 17.4 28.134C21.6013 28.134 24.8893 29.4127 27.264 31.97C29.8213 34.3447 31.1 37.6327 31.1 41.834C31.1 46.0353 29.6387 49.5973 26.716 52.52C23.7933 55.4427 20.2313 56.904 16.03 56.904Z" fill="#980138" />
            </svg>

            <p className={styles.texto}>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”</p>

            <div className={styles.containerAutor}>
              <p>José Moreira <br /> <span>Diretor executivo da M. Dias Branco</span></p>
              <div className={styles.icons}>
                <i>
                  <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.94 14.12L3.83333 8L9.94 1.88L8.06 0L0.0599976 8L8.06 16L9.94 14.12Z" fill="#311629" />
                  </svg>
                </i>
                <i>
                  <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.0600033 1.88L6.16667 8L0.0600033 14.12L1.94 16L9.94 8L1.94 0L0.0600033 1.88Z" fill="#311629" />
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