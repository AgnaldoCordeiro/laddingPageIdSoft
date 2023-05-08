import BannerQuemSomos from "../components/BannerQuemSomos";
import Footer from "../components/Footer";
import Time from "../components/Time";
import Valores from "../components/Valores";



function QuemSomos() {
  return (
    <>
        <div id="bannerquemsomos">

    <BannerQuemSomos />
    </div>
    <div id="valores">
    <Valores />
    </div>
    <div id="time">
    <Time />
    </div>

    </>
  );
}

export default QuemSomos;
