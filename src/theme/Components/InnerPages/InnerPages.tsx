import React from 'react'

import SideMenu from './SideMenu/SideMenu'
import Data from './Data/Data'
import MyAppointments from './MyAppointments/MyAppointments'

const InnerPages = () => {
    return (
        <section className="main-content">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 col-lg-4">
                        <SideMenu />
                    </div>

                    <div className="col-md-7 col-lg-8">
                        <Data />
                        <MyAppointments />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InnerPages