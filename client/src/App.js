import React from 'react';

import './assets/js/main'
import './assets/styles/global.css'
import './assets/styles/main.css'

import { ReactComponent as ReyhoonIcon }  from './assets/img/reyhoon-icon.svg'

import Header from './components/header'
import Footer from './components/footer'
import SearchBar from './components/search_bar'

import app_on_phone from './assets/img/app-on-phone.png'
import ios_light from './assets/img/app-downloads/ios-direct-light.png'
import reyhoon_light from './assets/img/app-downloads/reyhoon-light.png'
import cafe_light from './assets/img/app-downloads/cafebazaar-light.png'
import google_light from './assets/img/app-downloads/google-play-light.png'
import ea_food from './assets/img/instruction/ea-food.png'
import ch_loc from './assets/img/instruction/ch-loc.png'
import ch_food from './assets/img/instruction/ch-food.png'

function App() {
  return (
      <React.Fragment>
          <Header/>

          <div className="ord-div">
              <div className="ord-title">
                  <div className="svg-reyhoon-icon">
                      <ReyhoonIcon/>
                  </div>
                  <h1>
                      سفارش آنلاین غذا از بهترین رستوران‌ها و فست‌فودها
                  </h1>
                  <p>
                      برای دیدن لیست رستوران‌ها و فست‌فود‌هایی که به شما سرویس می‌دهند، منطقه خود را وارد کنید.
                  </p>
              </div>
              <div className="search-div">
                  <SearchBar/>
                  <div className="last-search cursor-pointer">
                      <p>
                          <i className="fas fa-history"></i>
                          آخرین جستجو: تهران، چیتگر
                      </p>
                  </div>
              </div>
          </div>
          <div className="steps-help">
              <div className="help-outer-div">
                  <div>
                      <p>شهر و منطقه خود را وارد کنید</p>
                      <div className="help-inner-div">
                          <div className="help-img-div">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradientPin" gradientUnits="userSpaceOnUse"><stop stop-color="#8B00AF" offset="0%"></stop><stop stop-color="#D40062" offset="90%"></stop><stop stop-color="#FF0613" offset="100%"></stop></linearGradient></defs><path fill="white" fill-rule="evenodd" d="M50 0c23.488-.229 42.74 18.627 43.061 42.176 0 35-39.834 56.53-41.477 57.412a3.278 3.278 0 0 1-3.168 0c-1.643-.882-41.477-22.412-41.477-57.412C7.26 18.626 26.512-.229 50 0zm0 92.824c7.157-4.236 36.373-23.295 36.373-50.648C85.956 22.4 69.727 6.652 50 6.882 30.273 6.652 14.044 22.4 13.627 42.176c0 27.118 29.216 46.412 36.373 50.648zm.176-66.177c9.179.032 16.603 7.502 16.603 16.706a16.706 16.706 0 0 1-10.3 15.44 16.629 16.629 0 0 1-18.164-3.648 16.739 16.739 0 0 1-3.574-18.226 16.66 16.66 0 0 1 15.435-10.272zm0 26.706c5.508 0 9.973-4.477 9.973-10s-4.465-10-9.973-10c-5.508 0-9.973 4.477-9.973 10s4.465 10 9.973 10z"></path></svg>
                              <img src={ch_loc} />
                          </div>
                          <p>منوی مورد علاقه خود را از بین بیش از 4000 رستوران خوب در تهران و شهرستان‌ها جستجو کنید.</p>
                      </div>
                  </div>
              </div>
              <div className="help-outer-div">
                  <div>
                      <p>غذای خود را انتخاب کنید</p>
                      <div className="help-inner-div">
                          <div className="help-img-div">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradientForkSpoon" gradientUnits="userSpaceOnUse"><stop stop-color="#8B00AF" offset="0%"></stop><stop stop-color="#D40062" offset="90%"></stop><stop stop-color="#FF0613" offset="100%"></stop></linearGradient></defs><path fill="white" fill-rule="evenodd" d="M99.954 28.203c.589 11.78-7.784 22.265-19.861 24.87V94.41c.17 1.223-.418 2.429-1.51 3.092a3.47 3.47 0 0 1-3.581 0c-1.092-.663-1.681-1.87-1.51-3.092V53.072c-12.24-2.441-20.822-12.97-20.27-24.869C52.39 15.105 62.84 3.834 76.588 3c13.749.834 24.198 12.105 23.366 25.203zM77.068 46.925c10.126-.94 17.584-9.348 16.763-18.898.821-9.55-6.637-17.959-16.763-18.898-10.103.967-17.528 9.367-16.705 18.898-.823 9.53 6.602 17.93 16.705 18.898zM43.463 3.54a3.362 3.362 0 0 1 3.3 3.364v16.703c.594 12.497-7.853 23.62-20.037 26.382v43.852a3.366 3.366 0 0 1-1.523 3.281 3.355 3.355 0 0 1-3.613 0 3.366 3.366 0 0 1-1.524-3.28V49.988C7.882 47.226-.564 36.104.03 23.607V6.904c0-.892.354-1.747.984-2.378A3.357 3.357 0 0 1 3.39 3.54a3.362 3.362 0 0 1 3.3 3.364v16.703c-.517 8.834 4.978 16.907 13.377 19.654V6.904a3.366 3.366 0 0 1 1.524-3.28 3.355 3.355 0 0 1 3.613 0 3.366 3.366 0 0 1 1.523 3.28v36.357c8.413-2.73 13.915-10.814 13.377-19.654V6.904a3.362 3.362 0 0 1 3.36-3.364z"></path></svg>
                              <img src={ch_food} />
                          </div>
                          <p>غذایی که می‌خواهید را انتخاب کنید و بدون هزینه اضافی سفارش خود را ثبت کنید.</p>
                      </div>
                  </div>
              </div>
              <div className="help-outer-div">
                  <div>
                      <p>غذایتان را نوش‌جان کنید</p>
                      <div className="help-inner-div">
                          <div className="help-img-div">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradientHeart" gradientUnits="userSpaceOnUse"><stop stop-color="#8B00AF" offset="0%"></stop><stop stop-color="#D40062" offset="90%"></stop><stop stop-color="#FF0613" offset="100%"></stop></linearGradient></defs><path fill="white" fill-rule="evenodd" d="M91.235 15.973a25.732 25.732 0 0 0-18.353-8.8A35.802 35.802 0 0 0 50 18.261 35.861 35.861 0 0 0 27.059 7.232a25.438 25.438 0 0 0-18.294 8.741c-11.662 11.77-11.662 30.706 0 42.475 19.764 17.893 30.059 27.28 35.294 32.09a8.723 8.723 0 0 0 11.765 0l35.294-32.09c11.694-11.737 11.747-30.673.117-42.475zM86.53 53.58C71.647 67.248 62.176 75.813 56.118 81.328l-4.647 4.224c-.765.7-1.941.7-2.706 0-5.412-4.81-15.647-14.139-35.294-31.973-8.968-9.125-8.968-23.729 0-32.854a18.9 18.9 0 0 1 13.588-6.746 29.44 29.44 0 0 1 18.412 9.269L50 27.355l4.588-4.107a29.026 29.026 0 0 1 18.294-9.328 19.194 19.194 0 0 1 13.53 6.805c9 9.093 9.053 23.697.117 32.854z"></path></svg>
                              <img src={ea_food} />
                          </div>
                          <p>درب منزل یا حضوری از خود رستوران سفارشتان را تحویل بگیرید.</p>
                      </div>
                  </div>
              </div>
          </div>
          <div className="bests-res-div">
              <div className="bests-res-title">
                  <h2>رستوران‌ها و فست‌فود‌های برتر ماه بر اساس امتیازدهی کاربران</h2>
              </div>
              <div className="best-restaurants">

              </div>
          </div>
          <div className="good-tehran-restaurants">
              <p>رستوران‌های خوب تهران در ریحون</p>
              <div className="good-tehran-rest-section">
              </div>
              <br/><br/><br/><br/><br/><br/><br/><br/>
          </div>
          <div className="food-type-show">
              <h1>غذا چی میل دارید؟</h1>
              <p>صبحانه، ناهار، شام یا هر چیزی که میل دارید را انتخاب کنید</p>
              <div className="food-type-show-outer">
              </div>
          </div>
          <div className="more-foods-div">
              <h1>انتخاب غذاهای بیشتر</h1>
              <div className="more-food-items">
              </div>
          </div>
          <div className="app-div">
              <div className="app-div-outer">
                  <div className="app-div-right-side">
                      <h1>ریحون روی موبایل</h1>
                      <p>برای دریافت لینک دانلود اپلیکیشن ریحون، شماره موبایل خود را وارد کنید.</p>
                      <div className="rec-link-div">
                          <div className="region-getter-typable">
                              <input type="text" autocomplete="off" role="combobox" placeholder="مثلا 912293****" />
                          </div>
                          <div className="recv-link-btn cursor-pointer">
                              دریافت لینک از طریق SMS
                          </div>
                      </div>
                      <p className="app-div-access-msg">
                          اپلیکیشن ریحون برای Android و iOS در دسترس است.
                      </p>
                      <div className="app-download-links">
                          <a href="#"><div><img src={google_light} /></div></a>
                          <a href="#"><div><img src={cafe_light} /></div></a>
                          <a href="#"><div><img src={reyhoon_light} /></div></a>
                          <a href="#"><div><img src={ios_light} /></div></a>
                      </div>
                  </div>
                  <div className="app-div-left-side">
                      <img src={app_on_phone} />
                  </div>
              </div>
          </div>
          
          
          <Footer/>
      </React.Fragment>
  );
}

export default App;
