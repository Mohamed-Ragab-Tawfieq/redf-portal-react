import React from 'react'
import { NavLink } from 'react-router-dom'

const MegaMenu = (props: any) => {
    return (
        <div className="dropdown-menu" aria-labelledby="servicesDropdown" onClick={(e) => e.stopPropagation()}>
            <h2 className='text-white mb-4'>{props.title}</h2>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item m-0" role="presentation">
                    <button className="nav-link h4 active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">خدمات الموظفين</button>
                </li>
                <li className="nav-item m-0" role="presentation">
                    <button className="nav-link h4" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">خدمات المحصلين</button>
                </li>
                <li className="nav-item m-0" role="presentation">
                    <button className="nav-link h4" id="messages-tab" data-bs-toggle="tab" data-bs-target="#messages" type="button" role="tab" aria-controls="messages" aria-selected="false">خدمات الموردين</button>
                </li>
                <li className="nav-item m-0" role="presentation">
                    <button className="nav-link h4" id="settings-tab" data-bs-toggle="tab" data-bs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">خدمات المواطنين</button>
                </li>
            </ul>

            <div className="tab-content">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <ul className='list'>
                        <li className='title'>الخدمات العامة</li>
                        <li><NavLink to="">خدمة فك رهن</NavLink></li>
                        <li><NavLink to="">خدمة إعفاء متوفيين</NavLink></li>
                        <li><NavLink to="">خدمة المبايعة</NavLink></li>
                        <li><NavLink to="">خدمة استرجاع الدفعة الأولي</NavLink></li>
                    </ul>
                    <ul className='list'>
                        <li className='title'>خدمات القرض المدعوم</li>
                        <li><NavLink to="">خدمة فك رهن</NavLink></li>
                        <li><NavLink to="">خدمة إعفاء متوفيين</NavLink></li>
                        <li><NavLink to="">خدمة المبايعة</NavLink></li>
                        <li><NavLink to="">خدمة استرجاع الدفعة الأولي</NavLink></li>
                    </ul>
                    <ul className='list'>
                        <li className='title'>خدمات القرض المباشر</li>
                        <li><NavLink to="">خدمة فك رهن</NavLink></li>
                        <li><NavLink to="">خدمة إعفاء متوفيين</NavLink></li>
                        <li><NavLink to="">خدمة المبايعة</NavLink></li>
                        <li><NavLink to="">خدمة استرجاع الدفعة الأولي</NavLink></li>
                    </ul>
                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">خدمات</div>
                <div className="tab-pane fade" id="messages" role="tabpanel" aria-labelledby="messages-tab">خدمات</div>
                <div className="tab-pane fade" id="settings" role="tabpanel" aria-labelledby="settings-tab">خدمات.</div>
            </div>
        </div>
    )
}

export default MegaMenu