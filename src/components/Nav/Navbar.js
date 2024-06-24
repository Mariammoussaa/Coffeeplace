import React, { useState } from 'react'
import style from './Navbar.module.css'
import img from '../../images/logo.png'
import { NavLink } from 'react-router-dom'

export const Nav = () => {
    const [setClass , getClass] = useState(false) 
    const scrollNavBar =()=>{
        console.log(window.scrollY);
        if (window.scrollY > 200 ) {
            getClass(true)
        }else{
            getClass(false)
        }
    }
    window.addEventListener("scroll" , scrollNavBar)
        return (
    <div>
        <div className={style.parent}>
            <div className={`${style.container} ${setClass ? style.position : ''}`}>
                
                <div className={style.img} >
                    <img className={style.logo} src={img}  alt='logo'/>
                </div>
            <div className={style.row}>
                    <ul>
                        <li><NavLink to="/">HOME </NavLink></li>
                        <li><NavLink to="about">ABOUT </NavLink></li>
                        <li><NavLink to="menu"> MENU </NavLink></li>
                        <li><NavLink to="review">REVIEW </NavLink></li>
                        <li><NavLink to="blog"> Blog</NavLink></li>
                        <li><NavLink to="blog"> PAGES </NavLink></li>
                    </ul>
            </div>
        </div>


    </div>
    </div>

)}
