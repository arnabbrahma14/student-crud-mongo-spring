import React from 'react'
import axios from 'axios'
import NavBar  from './NavBar'

import './css/User.css'

class  User extends React.Component {

    constructor() {

        super()
        this.state = {
            id: 0,
            name : '',
            email : ''
        }

        this.getData = this.getData.bind(this)
        this.createUser = this.createUser.bind(this)

    }

    getData(event) {

        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    createUser() {
        axios({
            method: 'post',
            url: 'http://localhost:7000/api/student',
            data: {
                id: Number(this.state.sid),
                name: this.state.name,
                email: this.state.email
            }

        }).then( (res, err) => {
            console.log(res)
            alert('User Enrolled Successfully')
        })
        .catch(err => console.log(err))
    }

    render() {
        return <>
            <NavBar />
            <div className="FormLayout">

                <form className='FormBody'>
                <h1>Form Details</h1>
                    
                    <input type="text" name="sid" id="sid" placeholder='Enter User ID' className='InputDecor'  onChange={this.getData}/>
                    <input type="text" name="name" id="name" placeholder='Enter User Name' className='InputDecor' onChange={this.getData}/>
                    <input type="email" name="email" id="email" placeholder='Enter User Email' className='InputDecor' onChange={this.getData}/>
                    <input type="submit" value="Submit" className='SubmitButtonDecor' onClick={this.createUser}/>

                </form>
    
            </div>
        </>
    }
}

export default User