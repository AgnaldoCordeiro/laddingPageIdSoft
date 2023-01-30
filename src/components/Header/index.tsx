import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Zoom from "@mui/material/Zoom";
import styles from "./styles.module.scss";
import { Typography } from "@mui/material";
import { Link } from 'react-router-dom'
import { useState } from "react";

/* 
function ScrollTop(props: any) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: any) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};
 */
export default function Header(props: any) {
  const [status, setStatus] = useState(false)
  return (
    <React.Fragment>
     <CssBaseline />
   
     <AppBar color={'inherit'} >  
          <header className={styles.nav}>
         <Toolbar sx={{background: '#ffffff'}}> 
            <nav >
              <input type="checkbox" id="check" className={styles.check} />
              <label htmlFor="check" className={styles.checkbtn}>
                <i><svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z" fill="#980138" />
                </svg>
                </i>
              </label>
              <Typography>
                <Link to="/"><label>IDSoft</label></Link>

              </Typography>
              <ul>
                {status === false ? 
                 <li>
                 <Link to={"/QuemSomos"} onClick={() => setStatus(true)} >Quem somos</Link>
               </li>
                : 
                <li>
                  <Link to={"/"} onClick={() => setStatus(false)} >Quem somos</Link>
                </li>

                }
                <li>
                  <a href="/.#beneficios">Benefícios</a >
                </li>
                <li>
                  <a href="/.#solucoes">Soluções</a>
                </li>
               {/*  <li>
                  <a href="/.#clientes">Clientes</a>
                </li> */}
                {/* <li>
                  <a href="/.#depoimentos">Depoimentos</a>
                </li> */}
                <li>
                  <a href="/.#contato">Contato</a>
                </li>
                <li>
                  <button><a href="https://wa.me/558899276925" target="_blank">ENTRAR EM CONTATO</a></button>
                </li>
              </ul>
            </nav>
         </Toolbar> 
          </header>
        </AppBar> 
      <Toolbar id="back-to-top-anchor" />

      {/*  <ScrollTop {...props}>
        <Fab sx={{ color: "#980138" }} size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop> */}
    </React.Fragment>
  );
}