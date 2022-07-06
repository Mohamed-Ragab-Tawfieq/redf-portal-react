import React from 'react'

import SideMenu from './SideMenu/SideMenu'
import Data from './Data/Data'
import MyAppointments from './MyAppointments/MyAppointments'
import Breadcrumbs from './BookAppointment/Breadcrumbs/Breadcrumbs'
import BookAppointment from './BookAppointment/BookAppointment'
import Header from '../Header/Header'

const InnerPages = () => {
    return (
        <>
            <Header />
            <Breadcrumbs />
            <section className="inner-page">
                <SideMenu />
                <div className="content">
                    <MyAppointments />
                </div>
            </section>
        </>
    )
}

export default InnerPages