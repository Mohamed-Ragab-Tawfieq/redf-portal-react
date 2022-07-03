import React from 'react'

import Carousel from 'react-multi-carousel'

const statistics = [
    { money: 35000, name: "مستفيد للصندوق" },
    { money: 5000, name: "مستفيد للصندوق" },
    { money: 35000, name: "مليار ريال تمويل" },
    { money: 5000, name: "مستفيد للصندوق" },
    { money: 35000, name: "مليار ريال تمويل" },
    { money: 5000, name: "مستفيد للصندوق" },
    { money: 35000, name: "مليار ريال تمويل" },
    { money: 5000, name: "مستفيد للصندوق" },
    { money: 35000, name: "مليار ريال تمويل" },
    { money: 5000, name: "مستفيد للصندوق" },
]

const StatisticsSlider = (props: any) => {
    return (
        <section className="stats-slider">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="slider-title">
                            <h3>إحصائيات عامة</h3>
                            <h6>خليط من اشهر المقاطع المقتطفة و الصور التي تعبر عن اخبار او مقالات او غيره</h6>
                        </div>

                        <Carousel responsive={props.responsive} className="owl-stats">
                            {
                                statistics.map((item: any, index: number) => {
                                    return (
                                        <div key={index} className="item">
                                            <h2>{item.money}</h2>
                                            <h6>{item.name}</h6>
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

export default StatisticsSlider