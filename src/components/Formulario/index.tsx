import emailjs from "emailjs-com";
import styles from "./styles.module.scss";

export function Formulario() {
  function sendEmail(e: any) {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE,
        import.meta.env.VITE_EMAILJS_TEMPLATE,
        e.target,
        import.meta.env.VITE_EMAILJS_USER
      )

      .then(
        (result: any) => {
          alert("Mensagem enviada com sucesso! 👍");
        },
        (error: Error) => {
          alert(error.message);
        }
      );
    e.target.reset();
  }

  return (
    <>
      <main className={styles.container}>
        <form onSubmit={sendEmail}>
          <h6 className={styles.titulo}>Solicitar contato</h6>
          <div className={styles.inputField}>
            <input type="text" name="name" placeholder="Nome e Sobrenome" />
          </div>
          <div className={styles.inputField}>
            <input type="tel" name="tel" placeholder="WhatsApp" />
          </div>
          <div className={styles.inputField}>
            <input type="text" name="empresa" placeholder="Empresa" />
          </div>
          <div className={styles.inputField}>
            <textarea
              name="mensagem"
              rows={5}
              placeholder="Deixe uma mensagem"
            ></textarea>
          </div>
          <div className={styles.buttonSubmit}>
            <button
              type="submit"
              className="btn btn-primary"
              value="Enviar mensagem"
            >
              Solicitar contato
            </button>
          </div>
        </form>
      </main>
    </>
  );
}