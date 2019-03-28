import React from "react";
import './Access.css';
import QR from './../img/QR.png';
import CssBaseline from "@material-ui/core/CssBaseline";
import IconButton from "@material-ui/core/IconButton";
import ArrowBack from '@material-ui/icons/ArrowBack';
import AppBar from "../Component/AppBarComponent";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
    backButton: {
        marginLeft: -12,
        marginRight: 20
    }
}

class Access extends React.Component {

    changePage() {
        alert("ACCEPTED");
    }

    handleReturn() {
        alert("SUSA");
    }

    handleBackPage() {
        window.location.href = "/meetings"
    }

    render() {

        const {classes} = this.props;

        const iconButton = (
            <IconButton
                className={classes.backButton}
                onClick={this.handleBackPage}
            >
                <ArrowBack/>
            </IconButton>
        );

        return (
            <>
                <CssBaseline/>
                <AppBar
                    button={iconButton}
                    title="Company name - access"
                />
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

export default withStyles(styles)(Access);
