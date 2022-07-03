import React from 'react'
import { NavLink } from 'react-router-dom'

import infoIcon from "../../../../assets/images/icons/alert2.svg";
import lockIcon from "../../../../assets/images/icons/lock.svg";
import signoutIcon from "../../../../assets/images/icons/signout.svg";
import userIcon from "../../../../assets/images/icons/user2.svg";
import likeIcon from "../../../../assets/images/icons/like.svg";

const SideMenu = () => {
    return (
        <div className="side-menu ">
            <nav className="navbar navbar-light navbar-expand-md">
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sideMenu" aria-controls="sideMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="sideMenu">
                    <ul className="navbar-nav">
                        <li className="side-item">
                            <NavLink to="page/data" className="stretched-link"> صفحة البيانات </NavLink>
                            <img src={infoIcon} alt="" />
                        </li>
                        <li className="side-item">
                            <NavLink to="" className="stretched-link"> عقودي </NavLink>
                            <img src={infoIcon} alt="" />
                        </li>
                        <li className="side-item">
                            <NavLink to="page/myappointments" className="stretched-link"> مواعيدي </NavLink>
                            <img src={lockIcon} alt="" />
                        </li>
                        <li className="side-item">
                            <NavLink to="" className="stretched-link"> طلباتي </NavLink>
                            <img src={infoIcon} alt="" />
                        </li>
                        <li className="side-item">
                            <NavLink to="" className="stretched-link"> المعلومات الشخصية </NavLink>
                            <img src={userIcon} alt="" />
                        </li>
                        <li className="side-item">
                            <NavLink to="" className="stretched-link"> طلب دعم </NavLink>
                            <img src={likeIcon} alt="" />
                        </li>
                        <li className="side-item">
                            <NavLink to="" className="stretched-link"> تسجيل الخروج </NavLink>
                            <img src={signoutIcon} alt="" />
                        </li>
                    </ul>
                </div>
            </nav >
        </div >
    )
}

export default SideMenu