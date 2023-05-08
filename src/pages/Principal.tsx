import Banner from "../components/Banner";
import BannerQuemSomos from "../components/BannerQuemSomos";
import Beneficios from "../components/Beneficios";
import Footer from "../components/Footer";
import Solucoes from "../components/Solucoes";
import Time from "../components/Time";
import Contato from "../components/Contato";



function Principal() {
  return (
    <>
        <div id="banner">

    <Banner />
    </div>

    <div id="beneficios">
      <Beneficios />
    </div>
    <div id="solucoes">
      <Solucoes />
    </div>
    <div id="contato">
      <Contato />
    </div>
  </>
  );
}

export default Principal;
