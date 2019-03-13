import React from "react";
import './Access.css';
import QR from './../img/QR.png';
import Link from "@material-ui/core/Link";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowLeft from "@material-ui/core/es/internal/svg-icons/KeyboardArrowLeft";
import Typography from "@material-ui/core/Typography";



export class Access extends React.Component {

  changePage(){
    alert("ACCEPTED");
  }

  handleReturn() {
      alert("SUSA");
  }


  render(){

    const {classes} = this.props;


    return (
      <>
      <CssBaseline/>
      <AppBar position="static">
        <Toolbar>
          <IconButton className="menuButton" color="inherit" aria-label="Menu">
            <Link className="return" href='/confirm-assistance'>
            å
            </Link>
          </IconButton>
          <Typography variant="h6" color="inherit" className="grow">
            QR PASS
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="content_access">
        <div className="pass">
          <p>Present this at the reception, to pass over.</p>
          <img src={QR}/>
          <p className="company">Escuela Colombiana de Ingeniería Julio Garavito</p>
          <h2>Important things you need to remember</h2>
          <p>Hour: 8:30</p>
          <p>Address: AK 45 (Autonorte) #205-59</p>
          <p>Invited by: Oswaldo Castillo</p>
        </div>
      </div>
      </>

  );
}
}
