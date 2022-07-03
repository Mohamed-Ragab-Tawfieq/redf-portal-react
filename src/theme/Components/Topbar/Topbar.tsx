import React from 'react'
import { NavLink } from 'react-router-dom'

import eyeIcon from '../../../assets/images/icons/eye.svg'

const Topbar = () => {
    return (
        <div className="topbar">
            <div className="contact-date">
                <div className="date"> الثلاثاء 13 نوفمبر 2021 | بتوقيت القاهرة 07:13 م </div>

                <div className="divider"></div>

                <div className="contacts">
                    <div className="contact">
                        الاتصال
                        <NavLink to="tel: 012345678">123456789</NavLink >
                    </div>
                    <div className="mail">
                        <NavLink to="mailto:Info@REDF.gov.sa"> Info@REDF.gov.sa</NavLink >
                    </div>
                </div>
            </div>

            <div className="lang-font">
                <button className="btn" id="decreaseFont">-A</button>
                <button className="btn" id="origFont">AA</button>
                <button className="btn" id="increaseFont">+A</button>
                <img src={eyeIcon} alt="" />

                <div className="divider"></div>

                <button className="lang btn">
                    English
                </button>
            </div>
        </div>
    )
}

export default Topbar