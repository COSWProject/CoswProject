import React from "react";
import './Access.css';
import QR from './../img/QR.png';
import Link from "@material-ui/core/Link";

export class Access extends React.Component {

  changePage(){
    alert("CONCHA");
  }

  render(){
    return (
      <div className="content">
        <div>
          <h2>QR PASS</h2>
          <p>Present this at the reception, to pass over.</p>
          <img src={QR}/>
          <p>Hour: 8:30</p>
          <p>Address: AK 45 (Autonorte) #205-59</p>
          <p>Invited: Oswaldo Castillo</p>
        </div>
      </div>

    );
  }
}
