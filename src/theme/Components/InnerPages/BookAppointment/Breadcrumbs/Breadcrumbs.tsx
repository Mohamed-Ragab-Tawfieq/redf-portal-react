import React from 'react'
import { NavLink } from 'react-router-dom'

const Breadcrumbs = () => {
    return (
        <section className="breadcrumb-wrapper">
            <div className="dark"></div>
            <div className="container">
                <div className="title-wrapper">
                    <h1 className="bread-title">خدمة حجز موعد</h1>
                    <span className="badge">تقييم: 4/5</span>
                </div>

                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><NavLink to="">الرئيسية</NavLink></li>
                        <li className="breadcrumb-item"><NavLink to="">الخدمات الإلكترونية</NavLink></li>
                        <li className="breadcrumb-item active" aria-current="page">خدمة حجز موعد</li>
                    </ol>
                </nav>
            </div>
        </section>
    )
}

export default Breadcrumbs