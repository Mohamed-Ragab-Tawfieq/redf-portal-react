import React from 'react'
import { NavLink } from 'react-router-dom'

import logo from "../../../assets/images/logo.svg"
import userSm from "../../../assets/images/user-sm.png"
import notificationIcon from "../../../assets/images/icons/notification.svg"

const Header = () => {
    return (
        <header>
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <NavLink className="navbar-brand d-none d-md-block" to="">
                        <img src={logo} alt="" />
                    </NavLink>

                    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="">عن الصندوق</NavLink>
                            </li>

                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    خدمات
                                </NavLink>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><NavLink className="dropdown-item" to="">Action</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="">Another action</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="">Something else here</NavLink></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <button className="btn dropdown-toggle" type="button" id="programs" data-bs-toggle="dropdown" aria-expanded="false">
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

                            <li className="nav-item dropdown user-notifi">
                                <button className="btn dropdown-toggle user" type="button" id="dropdownUser" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src={userSm} alt="" />
                                    <span className="mx-2">أحمد سمير</span>
                                </button>

                                <ul className="dropdown-menu" aria-labelledby="dropdownUser">
                                    <li><NavLink className="dropdown-item" to="page/myappointments">My Appointments</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="">Another action</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="">Something else here</NavLink></li>
                                </ul>

                                <button className="btn btn-light notifi" type="button" id="dropdownNotifications" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src={notificationIcon} alt="" />
                                </button>

                                <ul className="dropdown-menu" aria-labelledby="dropdownNotifications">
                                    <li><NavLink className="dropdown-item" to="">Action</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="">Another action</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="">Something else here</NavLink></li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header