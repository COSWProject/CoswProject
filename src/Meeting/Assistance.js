import React from "react";
import './Assistance.css';
import escuela from './../img/escuela.png';
import Link from "@material-ui/core/Link";


export class Assistance extends React.Component {

  changePage(){
    alert("CONCHA");
  }

  render(){
    return (
      <div className="content">
        <div>
          <p>Confirm Assistance</p>
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

    );
  }
}
