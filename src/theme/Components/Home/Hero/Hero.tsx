import React from 'react'
import { NavLink } from 'react-router-dom'

import homeIcon from "../../../../assets/images/icons/home.svg"
import serviceSolidIcon from "../../../../assets/images/icons/service-solid.svg"
import documentIcon from "../../../../assets/images/icons/document.svg"
import uiIcon from "../../../../assets/images/icons/ui.svg"
import classIcon from "../../../../assets/images/icons/class.svg"
import ballotIcon from "../../../../assets/images/icons/ballot.svg"

import userServedIcon from "../../../../assets/images/icons/user-served.svg"
import userVisitorIcon from "../../../../assets/images/icons/user-visitor.svg"

import chatIcon from "../../../../assets/images/icons/chat.svg"
import goDownIcon from "../../../../assets/images/icons/go-down.svg"

const Hero = () => {
    return (
        <section className="hero">

            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="hero-title">
                            <h1 className="title">أهلاً بك </h1>
                            <h1 className="title">في صندوق التنمية العقارية</h1>

                            <div className="type">
                                <label>هل أنت ؟</label>
                                <button className="btn"><img src={userServedIcon} alt="" /> <span>مستفيد</span></button>
                                <button className="btn"><img src={userVisitorIcon} alt="" /> <span>زائر</span></button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <ul className="side-icons">
                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="الرئيسية">
                                <NavLink to="" className="active"><img src={homeIcon} alt="" /></NavLink>
                            </li>
                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="خدمات">
                                <NavLink to=""><img src={serviceSolidIcon} alt="" /></NavLink>
                            </li>
                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="ملاحظات">
                                <NavLink to=""><img src={documentIcon} alt="" /></NavLink>
                            </li>
                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="إعلانات">
                                <NavLink to=""><img src={uiIcon} alt="" /></NavLink>
                            </li>
                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="برامج">
                                <NavLink to=""><img src={classIcon} alt="" /></NavLink>
                            </li>
                            <li data-bs-toggle="tooltip" data-bs-placement="top" title="خدمات">
                                <NavLink to=""><img src={ballotIcon} alt="" /></NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="bottom-sec">
                <div className="chat">
                    <NavLink to="" className="stretched-link">
                        <img src={chatIcon} alt="" />
                    </NavLink>
                </div>
            </div>

            <NavLink className="go-down" to="#productsSlider">
                <img src={goDownIcon} alt="" />
            </NavLink>
        </section>
    )
}

export default Hero