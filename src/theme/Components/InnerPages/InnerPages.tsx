import React from 'react'

import SideMenu from './SideMenu/SideMenu'
import Data from './Data/Data'
import MyAppointments from './MyAppointments/MyAppointments'
import Breadcrumbs from './Breadcrumbs/Breadcrumbs'
import BookAppointment from './BookAppointment/BookAppointment'
import Header from '../Header/Header'

const InnerPages = (props: any) => {
    return (
        <>
            <Header isScroll={props.isScroll} />
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