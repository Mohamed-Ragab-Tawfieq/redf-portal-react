import React from 'react'
import { NavLink } from 'react-router-dom'

import logoWhite from "../../../../assets/images/logo-white.svg"
import Icon2030 from "../../../../assets/images/2030.svg"
import user from "../../../../assets/images/icons/user.svg"
import langIcon from "../../../../assets/images/icons/lang2.svg"
import searchIcon from "../../../../assets/images/icons/search.svg"
import qmarkIcon from "../../../../assets/images/icons/qmark.svg"

const HomeHeader = () => {
    return (
        <header className="home">
            <div className="container-lg px-0 px-lg-3">
                <nav className="navbar navbar-expand-md">
                    <NavLink className="navbar-brand d-none d-lg-block" to="">
                        <img src={logoWhite} className="redf-img" alt="" />
                        <span>صندوق التنمية العقارية</span>
                        <small>REAL ESTATE DEVELOPMENT FUND</small>
                        <img src={Icon2030} className="img-2030" alt="" />
                    </NavLink>

                    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link fw-bold" to="">
                                    <img className='icon' src={user} alt="" />
                                    دخول المستفيد
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="">
                                    <img className='icon' src={qmarkIcon} alt="" />
                                    دخول شركاؤنا
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <button className="btn nav-link">
                                    <img className='icon' src={langIcon} alt="" />
                                    English
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="btn"><img src={searchIcon} alt="" /></button>
                            </li>
                        </ul>
                    </div>
                </nav>

                <nav className="navbar navbar-expand-md">
                    <div className="collapse navbar-collapse" id="navbarContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="">عن الصندوق</NavLink>
                            </li>

                            <li className="nav-item dropdown">
                                <NavLink className="nav-link with-caret" to="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    خدمات
                                </NavLink>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><NavLink className="dropdown-item" to="">Action</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="">Another action</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="">Something else here</NavLink></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <button className="btn nav-link with-caret" type="button" id="programs" data-bs-toggle="dropdown" aria-expanded="false">
                                    برامج
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="programs">
                                    <li><NavLink className="dropdown-item" to="">Action</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="">Another action</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="">Something else here</NavLink></li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="">ﻣﺮﻛﺰ اﻟﺈﻋﻠﺎم</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link active" to="">تواصل معنا</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default HomeHeader