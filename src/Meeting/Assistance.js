import React from "react";
import './Assistance.css';
import escuela from './../img/escuela.png';
import Link from "@material-ui/core/Link";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowLeft from "@material-ui/core/es/internal/svg-icons/KeyboardArrowLeft";
import Typography from "@material-ui/core/Typography";

export class Assistance extends React.Component {

  changePage(){
    alert("ACCEPTED");
  }

  render(){
    return (

      <>
      <CssBaseline/>
      <AppBar position="static">
        <Toolbar>
          <IconButton className="menuButton" color="inherit" aria-label="Menu">
            <KeyboardArrowLeft/>
          </IconButton>
          <Typography variant="h6" color="inherit" className="grow">
            Confirm Assistance
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="content">
        <div>
          <p>Wednesday 26 February 2019</p>
          <img src={escuela}/>
          <p>Hour: 8:30</p>
          <p>Address: AK 45 (Autonorte) #205-59</p>
          <p>Invited: Oswaldo Castillo</p>
        </div>
        <div className="buttons">
          <div className="accept" onClick= {this.changePage}> ACCEPT</div>
          <div className="decline"> DECLINE</div>
        </div>
      </div>
      </>
    );
  }
}
