import React from 'react'

import { NavLink } from 'react-router-dom'
import Carousel from 'react-multi-carousel'

import redf4 from "../../../../assets/images/redf4.png"
import redf5 from "../../../../assets/images/redf5.png"
//import calendarIcon from "../../../../assets/images/icons/calendar2.svg"

const news = [
    { date: "2/2/2022", img: redf4, desc: "201 مليون ريال سعودي للتمويل السكني مع برنامج وحدة سكنية ساكن" },
    { date: "2/2/2022", img: redf5, desc: "201 مليون ريال سعودي للتمويل السكني مع برنامج وحدة سكنية ساكن" },
    { date: "2/2/2022", img: redf4, desc: "201 مليون ريال سعودي للتمويل السكني مع برنامج وحدة سكنية ساكن" },
    { date: "2/2/2022", img: redf5, desc: "201 مليون ريال سعودي للتمويل السكني مع برنامج وحدة سكنية ساكن" },
    { date: "2/2/2022", img: redf4, desc: "201 مليون ريال سعودي للتمويل السكني مع برنامج وحدة سكنية ساكن" },
    { date: "2/2/2022", img: redf5, desc: "201 مليون ريال سعودي للتمويل السكني مع برنامج وحدة سكنية ساكن" },
]

const NewsSlider = (props: any) => {
    return (
        <section className="news-slider">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="slider-title">
                            <h3>آخر الأخبار</h3>
                            <h6>تعرف على احدث و أهم اخبار صندوق التنمية العقارية</h6>
                        </div>

                        <Carousel responsive={props.responsive} className="owl-news">
                            {
                                news.map((item: any, index: number) => {
                                    return (
                                        <div key={index} className="card item">
                                            <small className="date">{item.date}</small>
                                            <img src={item.img} className="card-img-top" alt="" />
                                            <div className="card-footer">
                                                <NavLink to="" className="stretched-link">{item.desc}</NavLink>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Carousel>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewsSlider