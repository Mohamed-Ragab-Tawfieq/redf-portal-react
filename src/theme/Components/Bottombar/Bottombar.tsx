import React from 'react'
import { NavLink } from 'react-router-dom'

import safariIcon from '../../../assets/images/icons/browser-icons/safari.svg'
import expolorerIcon from '../../../assets/images/icons/browser-icons/expolorer.svg'
import operaIcon from '../../../assets/images/icons/browser-icons/opera.svg'
import firefoxIcon from '../../../assets/images/icons/browser-icons/firefox.svg'
import chromeIcon from '../../../assets/images/icons/browser-icons/chrome.svg'

import facebookIcon from "../../../assets/images/icons/social/facebook.svg"
import twitterIcon from "../../../assets/images/icons/social/twitter.svg"
import instaIcon from "../../../assets/images/icons/social/insta.svg"
import linkedinIcon from "../../../assets/images/icons/social/linkedin.svg"
import youtubeIcon from "../../../assets/images/icons/social/youtube.svg"

const Bottombar = () => {
    return (
        <div className="bottom-bar">
            <div className="browsers">
                <span className="item"><img src={safariIcon} alt="" /></span>
                <span className="item"><img src={expolorerIcon} alt="" /></span>
                <span className="item"><img src={operaIcon} alt="" /></span>
                <span className="item"><img src={firefoxIcon} alt="" /></span>
                <span className="item"><img src={chromeIcon} alt="" /></span>
            </div>

            <div className="asgatech">
                <p> تم التطوير بشركة <NavLink to="http://www.asgatech.com.sa" target="_blank">اسجاتك التقنية</NavLink > ، جميع الحقوق محفوظة لصندوق التنمية العقارية ٢٠٢٢</p>
            </div>

            <div className="social-icons">
                <NavLink to="" className="facebook">
                    <img src={facebookIcon} alt="" />
                    <span className="text">Facebook</span>
                </NavLink >
                <NavLink to="" className="twitter">
                    <img src={twitterIcon} alt="" />
                    <span className="text">Twitter</span>
                </NavLink >
                <NavLink to="" className="instagram">
                    <img src={instaIcon} alt="" />
                    <span className="text">instagram</span>
                </NavLink >
                <NavLink to="" className="linkedin">
                    <img src={linkedinIcon} alt="" />
                    <span className="text">linkedin</span>
                </NavLink >
                <NavLink to="" className="youtube">
                    <img src={youtubeIcon} alt="" />
                    <span className="text">youtube</span>
                </NavLink >
            </div>
        </div>
    )
}

export default Bottombar