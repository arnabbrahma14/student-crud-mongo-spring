import React from 'react'
import { Link } from 'react-router-dom'

const NavBarBody = { 

    backgroundColor : "black",
    height: "56px",
    color: "white",
    paddingRight: "36px"
}

const logo = {
    fontSize: "32px",
    color: "white",
    margin: "5px 0px 0px 56px",
    float: "left",
    fontFamily: "calibri"
}

const listDecor = {
    float: "right"
}

const listIconDecor = {
    float: "left",
    margin: "12px 24px 0px 24px",
    listStyle : "None",
    fontSize: "22px",
    fontFamily: "calibri"
}


const listIconLinkDecor = {
    textDecoration: "None",
    color: "white",
}
class NavBar  extends React.Component{


    render() {
        return <div style={NavBarBody}>

            <h1 style={logo}> <Link to = "/" style={listIconLinkDecor}>StudentManagament </Link></h1>

            <div style={listDecor}>
                <li style={listIconDecor}>  <Link to = "/user/get" style={listIconLinkDecor}> Get User </Link>    </li> 
                <li style={listIconDecor}>  <Link to = "/user/add" style={listIconLinkDecor} > Create User </Link> </li>
            </div>

        </div>
    }
}

export default NavBar