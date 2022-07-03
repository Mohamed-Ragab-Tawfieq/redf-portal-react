import React from 'react'
import { NavLink } from 'react-router-dom'

import logoWhite from "../../../assets/images/logo-white.png"

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row g-0">
                    <div className="col-12">
                        <div className="logo">
                            <img src={logoWhite} className="img-fluid" alt="" />
                        </div>
                    </div>

                    <div className="col-md-4 col-lg">
                        <h4 className="title">عن الصندوق</h4>
                        <ul className="list">
                            <li><NavLink to="">اﻟﺘﺄﺳﻴﺲ واﻟﻤﻬﺎم</NavLink></li>
                            <li><NavLink to="">ﻛﻠﻤﺔ ﺳﻌﺎدة اﻟﺮﺋﻴﺲ اﻟﺘﻨﻔﻴﺬي</NavLink></li>
                            <li><NavLink to="">اﻟﺮؤﻳﺔ واﻟﺮﺳﺎﻟﺔ واﻟﻬﺪف</NavLink></li>
                            <li><NavLink to="">اﻟﻬﻴﻜﻞ اﻟﺘﻨﻈﻴﻤﻲ</NavLink></li>
                        </ul>
                    </div>


                    <div className="col-md-4 col-lg">
                        <h4 className="title">ﺧﺪﻣﺎت</h4>
                        <ul className="list">
                            <li><NavLink to="">ﺧﺪﻣﺎت اﻟﻤﻮاﻃﻨﻴﻦ</NavLink></li>
                            <li><NavLink to="">ﺧﺪﻣﺎت ﺷﺮﻛﺎءﻧﺎ</NavLink></li>
                            <li><NavLink to="">المزيد؟</NavLink></li>
                        </ul>
                    </div>

                    <div className="col-md-4 col-lg">
                        <h4 className="title">برامج</h4>
                        <ul className="list">
                            <li><NavLink to="">اﻟﺒﻨﺎء اﻟﺬاﺗﻲ</NavLink></li>
                            <li><NavLink to="">رﻫﻦ اﻟﻌﻘﺎر</NavLink></li>
                            <li><NavLink to="">وﺣﺪة ﺗﺤﺖ اﻟﺈﻧﺸﺎء</NavLink></li>
                            <li><NavLink to="">المزيد؟</NavLink></li>
                        </ul>
                    </div>

                    <div className="col-md-4 col-lg">
                        <h4 className="title">ﻣﺮﻛﺰ اﻟﺈﻋﻠﺎم</h4>
                        <ul className="list">
                            <li><NavLink to="">الأخبار</NavLink></li>
                            <li><NavLink to="">الفاعليات</NavLink></li>
                            <li><NavLink to="">الإعلانات</NavLink></li>
                            <li><NavLink to="">ﻣﻌﺮض اﻟﺼﻮر واﻟﻔﻴﺪﻳﻮ</NavLink></li>
                        </ul>
                    </div>


                    <div className="col-md-4 col-lg">
                        <h4 className="title">أﺳﺄﻟﺔ ﺷﺎﺋﻌﺔ</h4>
                        <ul className="list">
                            <li><NavLink to="">- ﻛﻴﻒ ﻳﻤﻜﻨﻚ اﻟﺈﺳﺘﻔﺎدة؟</NavLink></li>
                            <li><NavLink to="">- ﻛﻴﻔﻴﺔ ﻓﻚ اﻟﺮﻫﻦ؟</NavLink></li>
                            <li><NavLink to="">- ﻣﺎ ﻫﻲ ﻣﻨﺘﺠﺎت اﻟﺼﻨﺪوق؟</NavLink></li>
                            <li><NavLink to="">ﺗﺮﻳﺪ ﻣﻌﺮﻓﺔ اﻟﻤﺰﻳﺪ؟</NavLink></li>
                        </ul>
                    </div>

                    <div className="col-md-4 col-lg">
                        <div className="app-wrapper">
                            <h4 className="title">ﺣﻤﻞ ﺗﻄﺒﻴﻘﻨﺎ</h4>
                            <p>ﻋﻤﻞ ﻛﻞ اﻟﻠﺎزم ﺑﺎﺳﺮع وﻗﺖ ﺗﻘﺪر ﺗﺤﻤﻞ ﺗﻄﺒﻴﻘﻨﺎ واﻟﺬي ﺳﻴﺴﺎﻋﺪك ﻋﻠﻲ</p>

                            <div className="app">
                                <NavLink to=""><img src="assets/images/google.png" className="img-fluid" alt="" /></NavLink>
                                <NavLink to=""><img src="assets/images/apple.png" className="img-fluid" alt="" /></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer