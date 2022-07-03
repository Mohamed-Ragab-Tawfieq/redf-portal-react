import React, { useState } from 'react'

import Carousel from 'react-multi-carousel';
import { NavLink } from 'react-router-dom';

import redf1 from "../../../../assets/images/redf1.png"
import redf2 from "../../../../assets/images/redf2.png"
import redf3 from "../../../../assets/images/redf3.png"

const products = [
    {
        id: 0,
        title: "برنامج وحدة سكنية جاهزة",
        desc: "هو برنامج يهدف لتمويل السعوديين لمبلغ من المال حتى يستطيعون بناء مسكن بكامل الإمكانيات هو برنامج يهدف لتمويل السعوديين لمبلغ من المال حتى يستطيعون بناء مسكن بكامل الإمكانيات هو برنامج يهدف لتمويل السعوديين لمبلغ من المال حتى يستطيعون بناء مسكن بكامل الإمكانيات",
        img: redf1
    },
    {
        id: 1,
        title: "برنامج وحدة سكنية جاهزة",
        desc: "هو برنامج يهدف لتمويل السعوديين لمبلغ من المال حتى يستطيعون بناء مسكن بكامل الإمكانيات هو برنامج يهدف لتمويل السعوديين لمبلغ من المال حتى يستطيعون بناء مسكن بكامل الإمكانيات هو برنامج يهدف لتمويل السعوديين لمبلغ من المال حتى يستطيعون بناء مسكن بكامل الإمكانيات",
        img: redf2
    },
    {
        id: 2,
        title: "برنامج وحدة سكنية جاهزة",
        desc: "هو برنامج يهدف لتمويل السعوديين لمبلغ من المال حتى يستطيعون بناء مسكن بكامل الإمكانيات هو برنامج يهدف لتمويل السعوديين لمبلغ من المال حتى يستطيعون بناء مسكن بكامل الإمكانيات هو برنامج يهدف لتمويل السعوديين لمبلغ من المال حتى يستطيعون بناء مسكن بكامل الإمكانيات",
        img: redf3
    },
    {
        id: 3,
        title: "برنامج وحدة سكنية جاهزة",
        desc: "هو برنامج يهدف لتمويل السعوديين لمبلغ من المال حتى يستطيعون بناء مسكن بكامل الإمكانيات هو برنامج يهدف لتمويل السعوديين لمبلغ من المال حتى يستطيعون بناء مسكن بكامل الإمكانيات هو برنامج يهدف لتمويل السعوديين لمبلغ من المال حتى يستطيعون بناء مسكن بكامل الإمكانيات",
        img: redf1
    },
    {
        id: 4,
        title: "برنامج وحدة سكنية جاهزة",
        desc: "هو برنامج يهدف لتمويل السعوديين لمبلغ من المال حتى يستطيعون بناء مسكن بكامل الإمكانيات هو برنامج يهدف لتمويل السعوديين لمبلغ من المال حتى يستطيعون بناء مسكن بكامل الإمكانيات هو برنامج يهدف لتمويل السعوديين لمبلغ من المال حتى يستطيعون بناء مسكن بكامل الإمكانيات",
        img: redf2
    },
    {
        id: 5,
        title: "برنامج وحدة سكنية جاهزة",
        desc: "هو برنامج يهدف لتمويل السعوديين لمبلغ من المال حتى يستطيعون بناء مسكن بكامل الإمكانيات هو برنامج يهدف لتمويل السعوديين لمبلغ من المال حتى يستطيعون بناء مسكن بكامل الإمكانيات هو برنامج يهدف لتمويل السعوديين لمبلغ من المال حتى يستطيعون بناء مسكن بكامل الإمكانيات",
        img: redf3
    },
]

const ProductsSlider = (props: any) => {

    const [itemHover, setItemHover] = useState(null);

    const setHover = (index: any) => {

        setItemHover(index);
    }

    return (
        <section className="owl-products mt-0" id="productsSlider">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="slider-title">
                            <h3>منتجاتنا</h3>
                            <h6>باقة من أكثر البرامج المستخدمة على مستوى الموقع</h6>
                        </div>

                        <Carousel responsive={props.responsive} className="d-none d-lg-block">
                            {
                                products.map((item: any, index: any) => {
                                    return (
                                        <div className={`item ${item.id === itemHover ? 'no-img' : ''}`} key={index} onMouseEnter={() => setHover(index)} onMouseLeave={() => setHover(null)}>
                                            <h5 className="item-title">{item.title}</h5>

                                            {item.id !== itemHover ?
                                                <img src={item.img} alt="" />
                                                :
                                                <>
                                                    <p>{item.desc}</p>
                                                    <NavLink className="btn" to="">إضغط للتفاصيل</NavLink>
                                                </>
                                            }
                                        </div>
                                    )
                                })
                            }
                        </Carousel>

                        <Carousel responsive={props.responsive} className="mobile">
                            <div className="item no-img">
                                <h5 className="item-title">برنامج وحدة سكنية جاهزة</h5>
                                <p>هو برنامج يهدف لتمويل السعوديين لمبلغ من المال حتى يستطيعون بناء مسكن بكامل الإمكانيات هو برنامج يهدف لتمويل السعوديين لمبلغ من المال حتى يستطيعون بناء مسكن بكامل الإمكانيات هو برنامج يهدف لتمويل السعوديين لمبلغ من المال حتى يستطيعون بناء مسكن بكامل الإمكانيات </p>

                                <button className="btn">إضغط للتفاصيل</button>
                            </div>
                            <div className="item">
                                <h5 className="item-title">برنامج وحدة سكنية جاهزة</h5>
                                <img src={redf1} alt="" />
                            </div>
                            <div className="item">
                                <h5 className="item-title">برنامج وحدة سكنية جاهزة</h5>
                                <img src={redf2} alt="" />
                            </div>
                            <div className="item">
                                <h5 className="item-title">برنامج وحدة سكنية جاهزة</h5>
                                <img src={redf3} alt="" />
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductsSlider