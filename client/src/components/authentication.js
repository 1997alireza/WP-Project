import React, {Fragment} from 'react';

import '../assets/styles/authentication.css'

import '../assets/js/authentication'
import { ReactComponent as ReyhoonLogoSmall }  from '../assets/img/logo-small.svg'

export default () => {
    return (
        <Fragment>
            <div className="auth-header">
                <ReyhoonLogoSmall alt="Reyhoon"/>
            </div>

            <div className="authentication-div">
                <div id="auth-login" className="auth-current-section">
                    <i className="fa fa-user"></i>
                    <p>ورود</p>
                </div>
                <div id="auth-reg">
                    <i className="fa fa-user"></i>
                    <p>ثبت نام</p>
                </div>
            </div>

            <div className="display-on-login auth-section">
                <div className="page-title">
                    <h2>ورود</h2>
                    <p>ایمیل و یا شماره تلفن خود را وارد کنید</p>
                </div>
                <div className="form-div">
                    <div className="input-container">
                        <i className="fa fa-user"></i>
                        <input type="text" placeholder="ایمیل یا شماره تلفن"/>
                    </div>
                    <div className="input-container">
                        <i className="fa fa-key"></i>
                        <input type="password" placeholder="رمز عبور"/>
                    </div>
                    <a href="#">رمز عبور خود را فراموش کردم</a>
                    <button className="form-btn">ورود</button>
                </div>
            </div>
            <div className="display-on-reg auth-section">
                <div className="page-title">
                    <h2>ثبت نام</h2>
                    <p>از اینکه داری به جمع ریحونیا می‌پیوندی خیلی خوشحالیم</p>
                </div>
                <div className="form-div">
                    <div className="input-container">
                        <i className="fa fa-user"></i>
                        <input type="text" placeholder="نام و نام‌خانوادگی"/>
                    </div>
                    <div className="input-half-layout">
                        <div className="input-half-right input-container">
                            <i className="fa fa-phone"></i>
                            <input type="text" placeholder="شماره همراه"/>
                        </div>
                        <div className="input-half-left input-container">
                            <i className="fa fa-envelope"></i>
                            <input type="text" placeholder="ایمیل"/>
                        </div>
                    </div>
                    <div className="input-container">
                        <i className="fa fa-key"></i>
                        <input type="password" placeholder="رمز عبور"/>
                    </div>
                    <div className="input-container">
                        <i className="fa fa-key"></i>
                        <input type="password" placeholder="تکرار رمز عبور"/>
                    </div>
                    <button className="form-btn">ثبت نام</button>
                </div>
            </div>
            <div className="auth-footer">
                <ul className="social">
                    <li><i className="fab fa-telegram"></i></li>
                    <li><i className="fab fa-facebook"></i></li>
                    <li><i className="fab fa-twitter"></i></li>
                    <li><i className="fab fa-instagram"></i></li>
                    <li><i className="fab fa-google-plus"></i></li>
                </ul>
                <div className="auth-footer-divider"></div>
                <ul className="options">
                    <li>سوالات متداول</li>
                    <li>ثبت رستوران</li>
                    <li>درباره ریحون</li>
                    <li>بلاگ</li>
                    <li>قوانین و مقررات</li>
                    <li>تماس با ریحونیا</li>
                </ul>
            </div>
        </Fragment>
    );
}