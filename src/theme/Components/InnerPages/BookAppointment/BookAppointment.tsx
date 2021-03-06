import React from 'react'
import { NavLink } from 'react-router-dom'

import serviceSolid from "../../../../assets/images/icons/service-solid.svg"
import mapIcon from "../../../../assets/images/icons/map3.svg"
import mapIcon2 from "../../../../assets/images/icons/map.svg"
import calendar from "../../../../assets/images/icons/calendar.svg"
import noRequires from "../../../../assets/images/no-requires.svg"
import clock from "../../../../assets/images/icons/clock.svg"
import service from "../../../../assets/images/icons/service.svg"
import qrcode from "../../../../assets/images/qr-code.png"

const servicesList = [
    { id: 0, value: "خدمة تحديث صك" },
    { id: 1, value: "خدمة فك رهن" },
]

const branchesList = [
    { id: 0, value: "مكة" },
    { id: 1, value: "جدة" },
    { id: 2, value: "اليمن" },
]

const serviceRequirements = {
    requirements: [
        "مواطن سعودي متزوج يبلغ من العمر اكثر من 21 سنة",
        "مواطن سعودي متزوج يبلغ من العمر اكثر من 21 سنة",
        "مواطن سعودي متزوج يبلغ من العمر اكثر من 21 سنة"
    ],
    conditions: [
        "مواطن سعودي متزوج يبلغ من العمر اكثر من 21 سنة",
        "مواطن سعودي متزوج يبلغ من العمر اكثر من 21 سنة",
        "مواطن سعودي متزوج يبلغ من العمر اكثر من 21 سنة"
    ]
}

const BookAppointment = () => {
    return (
        <>
            <div className="book-appoint">
                <div className="card b-appoint-card mb-5">
                    <div className="card-header">
                        <h4 className="title">1. اختر خدمة المراد حجز موعد لها</h4>
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Mod_Requirements">
                            عرض متطلبات الخدمة
                        </button>
                    </div>

                    <div className="card-body">
                        <div className="row gy-3 gy-lg-0">
                            <div className="col-lg-6">
                                <small>اختر خدمة</small>

                                <input className="form-control" list="servicesList" placeholder="اختر خدمة" />
                                <datalist id="servicesList">
                                    {
                                        servicesList.map(service => {
                                            return (
                                                <option value={`${service.value}   `} key={service.id} />
                                            )
                                        })
                                    }
                                </datalist>
                            </div>

                            <div className="col-lg-6">
                                <small> <img src={serviceSolid} className="mx-1" alt="" /> نبذة عن الخدمة </small>
                                <p>وصف بسيط عن الخدمة المختارة و الهدف منها و كيفية استخدامها</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card b-appoint-card branch">
                    <div className="card-header">
                        <h4 className="title">
                            <span>2. اختر الفرع</span>
                            <small>اختر الفرع المراد حجز موعد به</small>
                        </h4>
                        <div>
                            <NavLink className="btn btn-primary" to="http://maps.google.com/?ll=38.882147,-76.99017" target="_blank">عرض موقع الفرع</NavLink>
                        </div>
                    </div>

                    <div className="card-body">
                        <div className="row gy-3 gy-lg-0">
                            <div className="col-lg-6">
                                <small>اختر الفرع</small>

                                <div className="search-branch">
                                    <input className="form-control" list="branchesList" placeholder="بحث عن فرع" />
                                    <datalist id="branchesList">
                                        {
                                            branchesList.map(branch => {
                                                return (
                                                    <option value={`${branch.value}   `} key={branch.id} />
                                                )
                                            })
                                        }
                                    </datalist>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <small>
                                    <img src={mapIcon} alt="" />
                                    عنوان الفرع
                                </small>
                                <p>515 شارع محمد الطناني, الباطح, المدينة المنورة, المملكة العربية السعودية</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card b-appoint-card">
                    <div className="card-header">
                        <h4 className="title">
                            <span>3. اختر الموعد</span>
                            <small>اختر الموعد المناسب</small>
                        </h4>
                    </div>

                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-6 px-0 px-md-3">
                            </div>

                            <div className="col-lg-6">
                                <div className="time-slots-wrap">
                                    <h5 className="title">
                                        <span>المواعيد المتاحة *</span>
                                        <small className="mx-0">اختر موعد يناسبك</small>
                                    </h5>

                                    <div className="slots">
                                        <div className="time-slots">
                                            <div className="time selected">
                                                <span>٧:٠٠</span>
                                                <span>لـ</span>
                                                <span>٧:٣٠</span>
                                                <span>صباحاً</span>
                                            </div>
                                            <div className="time dimmed">
                                                <span>٧:٠٠</span>
                                                <span>لـ</span>
                                                <span>٧:٣٠</span>
                                                <span>صباحاً</span>
                                            </div>
                                            <div className="time">
                                                <span>٧:٠٠</span>
                                                <span>لـ</span>
                                                <span>٧:٣٠</span>
                                                <span>صباحاً</span>
                                            </div>
                                        </div>

                                        <small className="UTC">*بتوقيت المدينة المنورة- المملكة العربية السعودية</small>
                                    </div>

                                    {/* if no slots remove d-none */}
                                    <div className="no-slots d-none">
                                        <img src={calendar} className="img-fluid" alt="" />
                                        <p>لا توجد مواعيد متاحة لهذا اليوم</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="alert alert-primary" role="alert">
                    حرصاً من صندوق التنية العقارية علي سلامة الجميع ، و تماشياً مع اجراءات الوقاية و السلامة ، فإننا نؤكد علي الزام جميع المراجعين بتحميل تطبيق “توكلنا” عند الدخول الي مرافق الصندوق و منع دخول من لم يقم بتحميل التطيق علي جواله
                </div>

                <div className="action-btns">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Mod_Confirm">
                        تأكيد
                    </button>
                    <button className="btn btn-outline-danger">إلغاء</button>
                </div>
            </div>

            {/* ############ Modals ############ */}

            {/* requirements */}
            <div className="modal fade" id="Mod_Requirements" tabIndex={-1} aria-labelledby="Mod_RequirementsLabel" aria-hidden="true">
                <div className={`modal-dialog ${serviceRequirements.requirements.length ? 'modal-sm' : ''}`}>
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="btn close" data-bs-dismiss="modal" aria-label="Close"> x </button>

                            {serviceRequirements.requirements.length ?
                                <div className="requirements">
                                    <h4 className="title">متطلبات خدمة “شراء المبايعة“ </h4>
                                    <ul>
                                        <li><span>مواطن سعودي متزوج يبلغ من العمر اكثر من 21 سنة</span></li>
                                        <li><span>مواطنة سعودية ارملة/ مطلقة التي مر علي طلاقها سنتان / عزباء
                                            سن ال40 سنة</span></li>
                                        <li><span>مواطن سعودي متزوج يبلغ من العمر اكثر من 21 سنة</span></li>
                                        <li><span>مواطن سعودي متزوج يبلغ من العمر اكثر من 21 سنة</span></li>
                                        <li><span>مواطن سعودي متزوج يبلغ من العمر اكثر من 21 سنة</span></li>
                                    </ul>

                                    <h4 className="title"> شروط خدمة “شراء المبايعة“ </h4>
                                    <ul>
                                        <li><span>مواطن سعودي متزوج يبلغ من العمر اكثر من 21 سنة</span></li>
                                        <li><span>مواطنة سعودية ارملة/ مطلقة التي مر علي طلاقها سنتان / عزباء
                                            سن ال40 سنة</span></li>
                                    </ul>
                                </div>
                                :
                                <div className="no-requires">
                                    <img src={noRequires} className="img-fluid" alt="" />
                                    <h5 className="desc">لا يوجد متطلبات لخدمة “شراء المبايعة”</h5>
                                </div>
                            }
                        </div>

                        <div className="modal-footer border-0">
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">حسنــاً</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* confirm */}
            <div className="modal fade long-square confirm" id="Mod_Confirm" tabIndex={-1} aria-labelledby="Mod_ConfirmLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content brdr-strt">

                        <div className="modal-header no-QR">
                            <button type="button" className="btn close" data-bs-dismiss="modal" aria-label="Close">x</button>
                            <h4 className="title">تأكيد الموعد</h4>
                        </div>

                        <div className="modal-body no-QR">
                            <div className="info">
                                <div className="time">
                                    <div className="item">
                                        <span className="icon"><img src={calendar} alt="" /></span>
                                        <label>الثلاثاء</label>
                                        <strong className="text">2022/02/14</strong>
                                    </div>

                                    <div className="item">
                                        <span className="icon"><img src={clock} alt="" /></span>
                                        <label>صباحاً</label>
                                        <strong className="text">٨:٣٠ الي ٩:٠٠</strong>
                                    </div>
                                </div>

                                <div className="item">
                                    <span className="icon"><img src={service} alt="" /></span>
                                    <label>الخدمة</label>
                                    <span className="text">تحديث الصك</span>
                                </div>

                                <div className="item">
                                    <span className="icon"><img src={mapIcon2} alt="" /></span>
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
                                <div className="alert alert-primary" role="alert">
                                    سيتم إرسال رسالة نصية قصيرة SMS على جوالك تحتوي على رابط التذكرة
                                </div>
                                <div className="alert alert-primary" role="alert">
                                    في حالة إلغاء الموعد من قبل الصندوق سيتم إعلامك برسالة نصية وبإشعار
                                    علي الموقع ويمكنك إختيار موعد بديل بالتعديل علي موعدك في “مواعيدي”
                                </div>
                            </div>

                            <div className="requirements">
                                <h4 className="title"> متطلبات ومرفقات الخدمة</h4>
                                <ul className="success">
                                    <li><span>أوراق العقود الرسمية الكاملة للمبني وللأرض المستضيفة</span></li>
                                    <li><span>أوراق العقود الرسمية الكاملة للمبني وللأرض المستضيفة</span></li>
                                    <li><span>أوراق العقود الرسمية الكاملة للمبني وللأرض المستضيفة</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="modal-footer two-btns">

                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Mod_Success">
                                حجـز
                            </button>
                            <button type="button" className="btn btn-outline-primary" data-bs-dismiss="modal">تعديل بيانات الموعد</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* success */}
            <div className="modal fade long-square success" id="Mod_Success" tabIndex={-1} aria-labelledby="Mod_SuccessLabel" aria-hidden="true">
                <div className="modal-dialog modal-sm modal-dialog-scrollable">
                    <div className="modal-content neg-border">

                        <div className="modal-header with-QR">
                            <button type="button" className="btn close" data-bs-dismiss="modal" aria-label="Close">x</button>
                            <h4 className="title">تم تسجيل موعدك بنجاح</h4>
                            <span className="code">#1234567</span>
                            <div className="qr-code">
                                <img src={qrcode} className="img-fluid" alt="" />
                            </div>
                        </div>

                        <div className="modal-body with-QR neg-border">
                            <div className="info">
                                <div className="time">
                                    <div className="item">
                                        <span className="icon"><img src={calendar} alt="" /></span>
                                        <label>الثلاثاء</label>
                                        <strong className="text">2022/02/14</strong>
                                    </div>

                                    <div className="item">
                                        <span className="icon"><img src={clock} alt="" /></span>
                                        <label>صباحاً</label>
                                        <strong className="text">٨:٣٠ الي ٩:٠٠</strong>
                                    </div>
                                </div>

                                <div className="item">
                                    <span className="icon"><img src={service} alt="" /></span>
                                    <label>الخدمة</label>
                                    <span className="text">تحديث الصك</span>
                                </div>

                                <div className="item">
                                    <span className="icon"><img src={mapIcon2} alt="" /></span>
                                    <label>الفرع</label>
                                    <span className="text">فرع المدينة المنورة بالباطح</span>
                                </div>

                                <p className="address">515 شارع محمد الطناني, الباطح, المدينة المنورة</p>
                            </div>

                            <div className="map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.7806761080233!2d-93.29138368446431!3d44.96844997909819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32b6ee2c87c91%3A0xc20dff2748d2bd92!2sWalker+Art+Center!5e0!3m2!1sen!2sus!4v1514524647889"></iframe>

                                <NavLink className="btn btn-primary" to="">عرض موقع الفرع</NavLink>
                            </div>

                            <div className="alerts dash-brdr">
                                <div className="alert alert-danger" role="alert">
                                    يجب الحضور قبل الموعد المحدد ب 15 دقيقة علي الأقل </div>
                                <div className="alert alert-danger" role="alert">
                                    يجب إحضار تذكرة الموعد عند الحضور (سيتم عرضها فالخطوة القادمة)
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer three-btns neg-border">
                            <NavLink className="btn btn-primary" to="myappointments.html">عرض مواعيدي</NavLink>

                            <div className="dropdown">
                                <button className="btn btn-outline-primary dropdown-toggle" type="button" id="saveTicket" data-bs-toggle="dropdown" aria-expanded="false">
                                    حفظ التذكرة </button>
                                <ul className="dropdown-menu" aria-labelledby="saveTicket">
                                    <li className="dropdown-item"><NavLink to="" download="">حفظ ملف PDF</NavLink> </li>
                                    <li className="dropdown-item"><NavLink to="">حفظ كصورة PNG</NavLink> </li>
                                </ul>
                            </div>

                            <button type="button" className="btn btn-outline-primary" data-bs-dismiss="modal">تقييم حجز الخدمة</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookAppointment