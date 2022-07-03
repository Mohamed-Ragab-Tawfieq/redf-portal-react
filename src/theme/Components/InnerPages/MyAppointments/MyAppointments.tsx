import React from 'react'
import { NavLink } from 'react-router-dom'

import searchIcon from '../../../../assets/images/icons/search2.svg'
import mapIcon from "../../../../assets/images/icons/map2.svg"
import calendarIcon from "../../../../assets/images/icons/calendar.svg"
import clockIcon from "../../../../assets/images/icons/clock.svg"
import chat from "../../../../assets/images/icons/chat.svg"

const MyAppointments = () => {
    return (
        <>
            <h2 className="sec-title">مواعيدي <span>(2)</span></h2>

            <div className="filters">
                <div className="input-group icon-end">
                    <input type="text" id="datalistInput" className="filter-names form-control" placeholder="ابحث عن موعد" autoComplete="off" />
                    <span className="input-group-text"><img src={searchIcon} alt="" /></span>
                </div>

                <select className='custom-select'>
                    <option value="hide">نوع الطلب</option>
                    <option value="direct">قرض مباشر</option>
                    <option value="undirect">قرض غير مباشر</option>
                </select>

                <input type="text" className="form-control" placeholder="تاريخ الموعد من و  إلي" />
            </div>

            <div className="recent-appoints">
                <div className="card appoint-card">
                    <NavLink to="" data-bs-toggle="modal" data-bs-target="#Mod_AppointDetails"></NavLink>

                    <div className="card-body">
                        <div className="sqre-date">
                            <span>14</span>
                            <span>يناير</span>
                        </div>

                        <div className="info">
                            <p className="title">خدمة تحديث الصك</p>

                            {/* classes: canceled, success */}
                            <span className="status success">قادم</span>

                            <div className="tips">
                                <div className="item">
                                    <span className="icon"><img src={mapIcon} alt="" /></span>
                                    <label>فرع الباطح</label>
                                </div>
                                <div className="item">
                                    <span className="icon"><img src={calendarIcon} alt="" /></span>
                                    <label>2022/02/14</label>
                                </div>
                                <div className="item">
                                    <span className="icon"><img src={clockIcon} alt="" /></span>
                                    <label>٨:٣٠ الي ٩:٠٠ صباحاً</label>
                                </div>
                            </div>
                        </div>

                        <div className="actions">
                            <div className="dropdown">
                                <button className="btn btn-primary dropdown-toggle" type="button" id="saveTicket" data-bs-toggle="dropdown" aria-expanded="false">
                                    حفظ التذكرة </button>
                                <ul className="dropdown-menu" aria-labelledby="saveTicket">
                                    <li><NavLink className="dropdown-item" to="#" download="">حفظ ملف PDF</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="#">حفظ كصورة PNG</NavLink></li>
                                </ul>
                            </div>

                            <NavLink className="btn btn-outline-primary" to="http://maps.google.com/?ll=38.882147,-76.99017" target="_blank">الاتجاهات للموقع</NavLink>

                        </div>
                    </div>
                </div>
            </div>

            <hr />

            <div className="past-appoints">
                <h6 className="sec-title-sm text-secondary">مواعيد سابقة</h6>

                <div className="card appoint-card past">
                    <NavLink to="" data-bs-toggle="modal" data-bs-target="#Mod_AppointDetails"></NavLink>

                    <div className="card-body">
                        <div className="sqre-date">
                            <span>14</span>
                            <span>يناير</span>
                        </div>

                        <div className="info">
                            <p className="title">خدمة تحديث الصك</p>
                            {/* classes: canceled, success */}
                            <span className="status canceled">الغي بواسطة العميل</span>

                            <div className="tips">
                                <div className="item">
                                    <span className="icon"><img src={mapIcon} alt="" /></span>
                                    <span>فرع الباطح</span>
                                </div>
                                <div className="item">
                                    <span className="icon"><img src={calendarIcon} alt="" /></span>
                                    <span>2022/02/14</span>
                                </div>
                                <div className="item">
                                    <span className="icon"><img src={clockIcon} alt="" /></span>
                                    <span>٨:٣٠ الي ٩:٠٠ صباحاً</span>
                                </div>
                            </div>

                        </div>

                        <div className="actions">
                            <button className='btn'>عرض التفاصيل</button>
                        </div>
                    </div>
                </div>
            </div>

            <nav className="pagination-wrap">
                <ul className="pagination">
                    <li className="page-item">
                        <NavLink className="page-link" to="#" aria-label="Previous"> &#x276E; </NavLink>
                    </li>
                    <li className="page-item active"><NavLink className="page-link" to="#">1</NavLink></li>
                    <li className="page-item"><NavLink className="page-link" to="#">2</NavLink></li>
                    <li className="page-item"><NavLink className="page-link" to="#">3</NavLink></li>
                    <li className="page-item">
                        <NavLink className="page-link" to="#" aria-label="Next"> &#x276F; </NavLink>
                    </li>

                </ul>
            </nav>

            <div className="chat">
                <NavLink to="" className="stretched-link">
                    <img src={chat} alt="" />
                </NavLink>
            </div>

            {/* ############ Modals ############ */}

            {/* appointment details */}
            <div className="modal fade long-square" id="Mod_AppointDetails" tabIndex={-1} aria-labelledby="Mod_AppointDetailsLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable ">
                    <div className="modal-content brdr-strt">

                        <div className="modal-header with-status">
                            <div className="right">
                                <button type="button" className="btn close" data-bs-dismiss="modal" aria-label="Close"><i className="fas fa-x"></i></button>
                                <h4 className="title">تفاصيل الموعد</h4>
                            </div>
                            <span className="code">#1234567</span>

                            {/* classes = pending, success, fail */}
                            <div className="status pending">موعد قادم</div>

                            <div className="qr-code">
                                <img src="assets/images/qr-code.png" className="img-fluid" alt="" />
                            </div>
                        </div>

                        <div className="modal-body with-QR">
                            <div className="info">
                                <div className="time">
                                    <div className="item">
                                        <span className="icon"><img src="assets/images/icons/calendar.svg" alt="" /></span>
                                        <label>الثلاثاء</label>
                                        <strong className="text">2022/02/14</strong>
                                    </div>

                                    <div className="item">
                                        <span className="icon"><img src="assets/images/icons/clock.svg" alt="" /></span>
                                        <label>صباحاً</label>
                                        <strong className="text">٨:٣٠ الي ٩:٠٠</strong>
                                    </div>
                                </div>

                                <div className="item">
                                    <span className="icon"><img src="assets/images/icons/service.svg" alt="" /></span>
                                    <label>الخدمة</label>
                                    <span className="text">تحديث الصك</span>
                                </div>

                                <div className="item">
                                    <span className="icon"><img src="assets/images/icons/map.svg" alt="" /></span>
                                    <label>الفرع</label>
                                    <span className="text">فرع المدينة المنورة بالباطح</span>
                                </div>

                                <p className="address">515 شارع محمد الطناني, الباطح, المدينة المنورة</p>
                            </div>

                            <div className="map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.7806761080233!2d-93.29138368446431!3d44.96844997909819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32b6ee2c87c91%3A0xc20dff2748d2bd92!2sWalker+Art+Center!5e0!3m2!1sen!2sus!4v1514524647889"></iframe>

                                <NavLink className="btn btn-primary" to="">عرض موقع الفرع</NavLink>
                            </div>

                            <div className="alerts">
                                <div className="alert alert-danger" role="alert">
                                    يجب الحضور قبل الموعد المحدد ب 15 دقيقة علي الأقل </div>
                                <div className="alert alert-danger" role="alert">
                                    يجب إحضار تذكرة الموعد عند الحضور (سيتم عرضها فالخطوة القادمة)
                                </div>
                                <div className="alert alert-success" role="alert">
                                    في حالة إلغاء الموعد من قبل الصندوق سيتم إعلامك برسالة نصية وبإشعار
                                    علي الموقع ويمكنك إختيار موعد بديل بالتعديل علي موعدك في “مواعيدي” </div>
                            </div>

                            <div className="requirements">
                                <h4 className="title">المرفقات اللازم إحضارها</h4>
                                <ul className="success">
                                    <li><span>أوراق العقود الرسمية الكاملة للمبني وللأرض المستضيفة</span></li>
                                    <li><span>أوراق العقود الرسمية الكاملة للمبني وللأرض المستضيفة</span></li>
                                    <li><span>أوراق العقود الرسمية الكاملة للمبني وللأرض المستضيفة</span></li>
                                </ul>
                            </div>
                        </div>

                        <div className="modal-footer four-btns">
                            <div className="dropdown">
                                <button className="btn btn-primary dropdown-toggle" type="button" id="saveTicket" data-bs-toggle="dropdown" aria-expanded="false">
                                    حفظ التذكرة </button>
                                <ul className="dropdown-menu" aria-labelledby="saveTicket">
                                    <li><NavLink className="dropdown-item" to="#" download="">حفظ ملف PDF</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="#">حفظ كصورة PNG</NavLink></li>
                                </ul>
                            </div>

                            <NavLink className="btn btn-outline-primary" to="myappointments.html">تعديل الموعد</NavLink>


                            <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#Mod_RateAppoint">تقييم حجز الخدمة</button>

                            <button type="button" className="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#Mod_SureCancelAppoint">إلغاء الموعد</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* sure cancel? */}
            <div className="modal fade short cancel top-icon" id="Mod_SureCancelAppoint" tabIndex={-1} aria-labelledby="Mod_SureCancelAppointLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <h4 className="title">هل انت متأكد بأنك تريد إلغاء الموعد؟</h4>
                            <p className="desc">هل تريد بالفعل إلغاء الموعد المحدد مسبقاً . يمكنك إعادة تعيين موعد
                                ثاني من زر “تعديل الموعد”.</p>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger">إلغاء الموعد</button>
                            <button type="button" className="btn btn-outline-primary" data-bs-dismiss="modal">رجوع</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* rate */}
            <div className="modal fade short rate" id="Mod_RateAppoint" tabIndex={-1} aria-labelledby="Mod_RateAppointLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <h4 className="title">رأيك يهمنا! ... ما رأيك بالخدمة؟</h4>

                            <div className="rate-wrap">
                                <form id="smileys">
                                    <input type="radio" name="smiley" value="5" className="happy" />
                                    <input type="radio" name="smiley" value="4" className="good" />
                                    <input type="radio" name="smiley" value="3" className="neutral" />
                                    <input type="radio" name="smiley" value="2" className="sad" />
                                    <input type="radio" name="smiley" value="1" className="v-sad" />
                                </form>
                            </div>

                            <textarea className="form-control" rows={4} placeholder="اترك رسالة إن أردت...."></textarea>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" id="rateBtn" disabled>قيم الآن</button>
                            <button type="button" className="btn btn-outline-primary" data-bs-dismiss="modal">رجوع</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyAppointments