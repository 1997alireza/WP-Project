import React, {Fragment} from 'react';
import '../assets/styles/global.css';
import footer_apps from '../assets/img/footer_apps.png';
import enamad from "../assets/img/enamad.png";
import kasbokar from "../assets/img/kasbokar.png";

export default () => {
    return (
        <Fragment>
            <div className="footer">
                <div className="footer-info">
                    <div className="footer-info-apps">
                        <h4>اپلیکیشن‌های موبایل</h4>
                        <img src={footer_apps} alt="apps"/>
                    </div>
                    <div className="footer-info-support">
                        <h4>پشتیبانی ریحون</h4>
                        <ul>
                            <li>سوالات متداول</li>
                            <li>تماس با پشتیبانی</li>
                            <li>قوانین و مقررات</li>
                        </ul>
                    </div>
                    <div className="footer-info-restaurants">
                        <h4>رستوران‌ها</h4>
                        <ul>
                            <li>ثبت رستوران</li>
                        </ul>
                    </div>
                    <div className="footer-info-call">
                        <h4>تماس با ریحون</h4>
                        <ul>
                            <li>درباره ریحون</li>
                            <li>تماس با ما</li>
                            <li>وبلاگ ریحون</li>
                        </ul>
                    </div>
                    <div className="footer-info-security">
                        <p>مراقبت و محافظت از حساب کاربری و رمزعبور هر کاربر بر عهده کاربر است. ریحون سریعترین راه سفارش آنلاین غذا است. منوی عکس‌دار رستوران‌های اطرافتان را بر اساس مکان خود به راحتی مشاهده کنید و سفارش دهید.</p>
                        <a href="#">لیست رستوران‌ها</a>
                    </div>
                </div>
                <div className="footer-credentials">
                    <img src={enamad} />
                    <img src={kasbokar} />
                </div>
                <div className="footer-social">
                    <p>© 2017, Reyhoon, All Rights Reserved.</p>
                    <ul>
                        <li><i className="fab fa-telegram"></i></li>
                        <li><i className="fab fa-facebook"></i></li>
                        <li><i className="fab fa-twitter"></i></li>
                        <li><i className="fab fa-instagram"></i></li>
                        <li><i className="fab fa-google-plus"></i></li>
                    </ul>
                </div>
            </div>
        </Fragment>
    );
}