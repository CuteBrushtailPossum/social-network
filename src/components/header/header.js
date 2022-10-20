import React from 'react'
import Logo from '../../img/Homework.png'
import {NavLink} from 'react-router-dom'
function Header(){
    return(
        <div className='header'>
            <NavLink to='/'><img src={Logo}alt='Logo'/></NavLink>
        </div>
)}
export default Header