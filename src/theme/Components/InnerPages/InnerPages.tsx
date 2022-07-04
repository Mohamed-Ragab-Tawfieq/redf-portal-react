import React from 'react'

import SideMenu from './SideMenu/SideMenu'
import Data from './Data/Data'
import MyAppointments from './MyAppointments/MyAppointments'
import Breadcrumbs from './BookAppointment/Breadcrumbs/Breadcrumbs'
import BookAppointment from './BookAppointment/BookAppointment'

const InnerPages = () => {
    return (
        <>
            <Breadcrumbs />
            <section className="inner-page">
                <div className="content">
                    <BookAppointment />
                </div>
            </section>
        </>
    )
}

export default InnerPages