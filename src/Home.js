import React from 'react'
import Clock from './Clock'
import NavBar from './NavBar'
import './css/Home.css'

class Home extends React.Component{
    render() {
        return <>

        <div  className='homeBody'>
        <NavBar />
        <Clock />
        <h1 className = 'heading'>Welcome to Student Management System</h1>

         
            <div className='aboutBody'>
                <h1>About Us</h1>
                <p>This is a website designed to managed student details.</p>
                <p>Institutions can easily manage and track the attendance and overall progress of their students</p>
            </div>
                     

        <div className='contactBody'>
            <h1>Contact Us</h1>
            <p>Feel free to contact us.</p>
            <p>Contact us student@sms.com</p>
        </div>
            
        </div>

        </>
    }
}

export default Home