import React from 'react'
import { NavLink } from 'react-router-dom'

import logo from "../../../assets/images/logo.svg"
import userSm from "../../../assets/images/user-sm.png"
import userIcon from "../../../assets/images/icons/user2.svg"
import notificationIcon from "../../../assets/images/icons/notification.svg"
import logoutIcon from "../../../assets/images/icons/signout2.svg"

const notifcations = [
    {
        id: 0,
        type: "success",
        title: "تم قبول الإلغاء!",
        desc: "لقد قمت بقبول إلغاء 24 موعد بفرع الـ...",
        date: "20-02-2022",
    },
    {
        id: 1,
        type: "settings",
        title: "تم تغيير إعدادات الفرع",
        desc: "لقد قمت بقبول إلغاء 24 موعد بفرع الـ...",
        date: "20-02-2022",
    },
    {
        id: 2,
        type: "success",
        title: "تم قبول الإلغاء!",
        desc: "لقد قمت بقبول إلغاء 24 موعد بفرع الـ...",
        date: "20-02-2022",
    }
]

const Header = () => {
    return (
        <header className='inner-header'>
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
                                    <li className="dropdown-item"><NavLink to="">Action</NavLink></li>
                                    <li className="dropdown-item"><NavLink to="">Another action</NavLink></li>
                                    <li className="dropdown-item"><NavLink to="">Something else here</NavLink></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <button className="btn dropdown-toggle" type="button" id="programs" data-bs-toggle="dropdown" aria-expanded="false">
                                    برامج
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="programs">
                                    <li className="dropdown-item"><NavLink to="">Action</NavLink></li>
                                    <li className="dropdown-item"><NavLink to="">Another action</NavLink></li>
                                    <li className="dropdown-item"><NavLink to="">Something else here</NavLink></li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="">ﻣﺮﻛﺰ اﻟﺈﻋﻠﺎم</NavLink>
                            </li>

                            <li className="nav-item dropdown profile-dropdown">
                                <button className="btn dropdown-toggle user" type="button" id="dropdownUser" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src={userSm} alt="" />
                                    <span className="mx-2">أحمد سمير</span>
                                </button>

                                <ul className="dropdown-menu profile-menu" aria-labelledby="dropdownUser">
                                    <li className='dropdown-item'>
                                        <NavLink to="user">
                                            <strong>أحمد سمير محمود علي</strong>
                                            <small>مستفيد قرض مدعوم ومباشر</small>
                                        </NavLink>
                                    </li>
                                    <li className='dropdown-item email'>
                                        ServiceManager@REDF.com
                                    </li>
                                    <NavLink className='dropdown-item profile' to={''}>
                                        <img src={userIcon} alt="" />
                                        <span className='mx-3'>عرض الملف الشخصي</span>
                                    </NavLink>
                                    <li className='dropdown-item'>
                                        <NavLink to="logout">
                                            <img src={logoutIcon} className="logout-icon" alt="" />
                                            تسجيل الخروج
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <button type="button" className="btn btn-light notifi" id="notificationsDrodownBtn" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src={notificationIcon} alt="" />
                                </button>

                                <ul className="dropdown-menu notifications-menu" aria-labelledby="notificationsDrodownBtn">
                                    <li className='header dropdown-item'>
                                        <span>الإشعارات</span>
                                        <small>7 جديد</small>
                                    </li>

                                    {
                                        notifcations.map(item => {
                                            return (
                                                <li className={`dropdown-item ${item.type}`} key={item.id}>
                                                    <NavLink to="#">
                                                        <span className='title'>{item.title}</span>
                                                        <small className='desc'>{item.desc}</small>
                                                        <small className='date'>{item.date}</small>
                                                    </NavLink>
                                                </li>
                                            )
                                        })
                                    }

                                    <li className='footer dropdown-item'>
                                        <NavLink to="" className='stretched-link'>عرض كل الإشعارات</NavLink>
                                    </li>
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