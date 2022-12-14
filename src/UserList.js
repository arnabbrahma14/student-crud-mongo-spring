import React from 'react'
import axios from 'axios'
import './css/userList.css'
import NavBar from './NavBar'


class UserList extends React.Component {

    const 

    constructor() {
        super()
        this.state = {
            userList: [],
        }
        // this.deleteUser = this.deleteUser.bind(this)
    } 

    componentDidMount() {
        axios.get('http://localhost:7000/api/student')
        .then((res, err) => {

            this.setState({userList : res.data})
            // this.state.userList.forEach(ele => console.log(ele))
        })
        .catch((err) => console.log(err))
    }

    /**************************************** 
     *          NEW CHANGES 
     * **************************************/

    componentDidUpdate() {
        axios.get('http://localhost:7000/api/student')
        .then((res, err) => {

            this.setState({userList : res.data})
            // this.state.userList.forEach(ele => console.log(ele))
        })
        .catch((err) => console.log(err))
    }

    deleteUser(ele) {
            console.log('http://localhost:7000/api/student/' + String(ele))

            axios({
                method: 'DELETE',
                url: 'http://localhost:7000/api/student/' + String(ele)
            }).then( (err, res) => console.log(res) )
            .catch(err => console.log(err))
    }


    render() {

        if(this.state.userList === undefined || this.state.userList === [] || this.state.userList.length === 0) {
            return <>
                <NavBar />

                <div className='center'>
                    <img src = "https://cdn.pixabay.com/photo/2017/02/12/21/29/false-2061132__340.png" alt='NO USER FOUND' />
                    <h1 className='EmptyList'>User List Empty or Server Not started</h1>
                </div>
            </>
        }

        else 

        return <>
        <NavBar />
            <div className='center'>
                <table className='tableLayout'>
                    <thead className='tableHead'>
                        <tr className='tableRow'>
                            <th className='tableHeadData'>Id</th>
                            <th className='tableHeadData'>Name</th>
                            <th className='tableHeadData'>Email</th>
                            <th className='tableHeadData'>Delete</th>
                        </tr>
                    </thead>
                    <tbody className='tableBody'>
                    
                    {

                        this.state.userList.map(
                            (ele) => {
                            
                                return (
                                    <tr key = {ele.id} className = "tableRow">
                                        <td className='tableData'>{ele.id}</td>
                                        <td className='tableData'>{ele.name}</td>
                                        <td className='tableData'>{ele.email}</td>
                                        <td className='tableData'>
                                            <button  className='TableButton1' onClick={() => {this.deleteUser(ele.id)}} >Delete</button>
                                        </td>
                                    </tr>
                                )
                            }
                        )
                    }
                </tbody>
                </table>
            </div>
        </>
    }
}   

export default UserList