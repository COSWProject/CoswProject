import React from "react";
import './UserProfile.css';
import profile from './../img/userProfile.svg';
import {Typography, ListItem, CardContent, ListItemIcon, ListItemText, Card, Fab, InputAdornment} from "@material-ui/core";
import withStyles from "@material-ui/core/es/styles/withStyles";
import ViewAgendaIcon from '@material-ui/icons/ViewAgenda';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import PersonIcon from '@material-ui/icons/Person';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import LocalPostOfficeIcon from '@material-ui/icons/LocalPostOffice';
import PlaceIcon from '@material-ui/icons/Place';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import GroupIcon from '@material-ui/icons/Group';
import WorkIcon from '@material-ui/icons/Work';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import LockIcon from '@material-ui/icons/Lock';
import PropTypes from 'prop-types';
import DrawerComponent from "../Component/DrawerComponent";
import TextField from "@material-ui/core/es/TextField/TextField";
import axios from 'axios';

const styles = theme => ({
    fab: {
        position: "fixed",
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 2,
    },
    profile: {
        width: '30%'
    },
    card: {
        minWidth: 275,
    },
});

class UserProfile extends React.Component{

    constructor(props) {
        super(props);

        this.instance = axios.create({
            baseURL: 'http://localhost:8080/api/',
            timeout: 1000,
            headers: {'Authorization': 'Bearer ' + localStorage.getItem("token")}
        });

        const user = this.instance.get("http://localhost:8080/api/user/userbyemail/"+localStorage.getItem("userLogged"));

        this.state = {
            readOnly: true,
            name: "Daniel Alejandro Orozco",
            password: "",
            id: 1013672927,
            email: "daniel.orozco@mail.escuelaing.edu.co",
            mobilePhone: 3145689756,
            address: "Cra 85C #7a-56",
            homePhone: 5697865,
            occupation: "Student",
            organization: "Escuela Colombiana de Ingeniería Julio Garavito",
            city: "",
            region: "",
            country: "",
            postalCode: 0,

        };
        this.handleEditProfile = this.handleEditProfile.bind(this);
        this.handleSaveProfile = this.handleSaveProfile.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeID = this.handleChangeID.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeMobilePhone = this.handleChangeMobilePhone.bind(this);
        this.handleChangeAddress = this.handleChangeAddress.bind(this);
        this.handleChangeHomePhone = this.handleChangeHomePhone.bind(this);
        this.handleChangeOccupation = this.handleChangeOccupation.bind(this);
        this.handleChangeOrganization = this.handleChangeOrganization.bind(this);
        this.handleChangeCity = this.handleChangeCity.bind(this);
        this.handleChangeRegion = this.handleChangeRegion.bind(this);
        this.handleChangeCountry = this.handleChangeCountry.bind(this);
        this.handleChangePostalCode = this.handleChangePostalCode.bind(this);
    }

    static handleSchedule() {
        window.location.href='/schedule';
    }

    handleEditProfile(){
        this.setState({
            readOnly: false
        })
    }

    handleSaveProfile(){
        this.setState({
            readOnly: true
        })
    }

    handleChangeName(e){
        this.setState({
            name: e.target.value
        })
    }

    handleChangePassword(e){
        this.setState({
            password: e.target.value
        })
    }

    handleChangeID(e){
        this.setState({
            id: e.target.value
        })
    }

    handleChangeEmail(e){
        this.setState({
            email: e.target.value
        })
    }

    handleChangeMobilePhone(e){
        this.setState({
            mobilePhone: e.target.value
        })
    }

    handleChangeAddress(e){
        this.setState({
            address: e.target.value
        })
    }

    handleChangeHomePhone(e){
        this.setState({
            homePhone: e.target.value
        })
    }

    handleChangeOccupation(e){
        this.setState({
            occupation: e.target.value
        })
    }

    handleChangeOrganization(e){
        this.setState({
            organization: e.target.value
        })
    }

    handleChangeCity(e){
        this.setState({
            city: e.target.value
        })
    }

    handleChangeRegion(e){
        this.setState({
            region: e.target.value
        })
    }

    handleChangeCountry(e){
        this.setState({
            country: e.target.value
        })
    }

    handleChangePostalCode(e){
        this.setState({
            postalCode: e.target.value
        })
    }

    render() {

        const { classes} = this.props;

        const imgProfile = (
            <Card className={classes.card}>
                <CardContent>
                    <img src={profile} className={classes.profile} alt=""/>
                    <Typography variant="subtitle2" gutterBottom>
                        <b>{this.state.name}</b>
                    </Typography>
                </CardContent>
            </Card>
        );

        const fabButton = (
            <Fab
                className={classes.fab}
                color="primary"
            >
                {this.state.readOnly === false ? <SaveIcon onClick={this.handleSaveProfile} /> : <EditIcon onClick={this.handleEditProfile}/>}
            </Fab>
        );

        const items = [
            {
                label: "Home",
                icon: <ViewAgendaIcon/>,
                onClick: UserProfile.handleSchedule
            }
        ];

        const optionsDrawer = items.map((x, i) => {
            return (
                <ListItem
                    button
                    onClick={x.onClick}
                    key={i}
                >
                    <ListItemIcon>
                        {x.icon}
                    </ListItemIcon>
                    <ListItemText primary={x.label}/>
                </ListItem>
            );
        });

        const itemsProfile = [
            {
                label: "Name",
                defaultValue: this.state.name,
                icon: <PersonIcon/>,
                onChange: this.handleChangeName
            },
            {
                label: "Password",
                defaultValue: this.state.password,
                icon: <LockIcon/>,
                type: "password",
                onChange: this.handleChangePassword
            },
            {
                label: "ID",
                defaultValue: this.state.id,
                icon: <CreditCardIcon/>,
                onChange: this.handleChangeID
            },
            {
                label: "Email",
                defaultValue: this.state.email,
                icon: <LocalPostOfficeIcon/>,
                onChange: this.handleChangeEmail
            },
            {
                label: "Mobile Phone",
                defaultValue: this.state.mobilePhone,
                icon: <SmartphoneIcon/>,
                onChange: this.handleChangeMobilePhone
            },
            {
                label: "Address",
                defaultValue: this.state.address,
                icon: <PlaceIcon/>,
                onChange: this.handleChangeAddress
            },
            {
                label: "Home Phone",
                defaultValue: this.state.homePhone,
                icon: <LocalPhoneIcon/>,
                onChange: this.handleChangeHomePhone
            },
            {
                label: "City",
                defaultValue: this.state.city,
                onChange: this.handleChangeCity
            },
            {
                label: "Region",
                defaultValue: this.state.region,
                onChange: this.handleChangeRegion
            },
            {
                label: "Country",
                defaultValue: this.state.country,
                onChange: this.handleChangeCountry
            },
            {
                label: "PostalCode",
                defaultValue: this.state.postalCode,
                onChange: this.handleChangePostalCode
            }
            {
                label: "Occupation",
                defaultValue: this.state.occupation,
                icon: <GroupIcon/>,
                onChange: this.handleChangeOccupation
            },
            {
                label: "Organization",
                defaultValue: this.state.organization,
                icon: <WorkIcon/>,
                onChange: this.handleChangeOrganization
            }
        ];

        const defaultItemsProfile = itemsProfile.map((x) => {
            return (
                <div className="grid">
                    <TextField
                        label={x.label}
                        defaultValue={x.defaultValue}
                        type={x.type}
                        InputProps={{
                            readOnly: this.state.readOnly,
                            startAdornment: (
                                <InputAdornment position="start">
                                    {x.icon}
                                </InputAdornment>
                            ),
                        }}
                        onChange={x.onChange}
                        multiline
                    />
                </div>
            );
        });

        const component = (
            <form className={classes.form}>
                <img src={profile} className={classes.profile} alt=""/>
                {defaultItemsProfile}
            </form>
        );

        return (
            <>
                <DrawerComponent
                    title="Profile"
                    cards={imgProfile}
                    drawerItems={optionsDrawer}
                    fabButton={fabButton}
                    elements={component}
                />
            </>
        );
    }
}

UserProfile.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(UserProfile);