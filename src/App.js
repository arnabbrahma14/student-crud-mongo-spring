import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import User from './User'
import UserList from './UserList'

function App() {

    return <>
    <BrowserRouter>
    <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/user/add" element = {<User />} />
        <Route path = "/user/get" element = {<UserList />} />
        
    </Routes>
    </BrowserRouter>

   
    </>
}

export default App