import React from 'react';
import Drawer from './Drawer';
import AppBar from "../History/AppBar";
import AccessList from "../History/AccessList";



class History extends React.Component {


    render() {

        return (
            <>
            <AppBar/>
            <Drawer/>
            <AccessList/>
            </>
        );
    }
}



export default  History;