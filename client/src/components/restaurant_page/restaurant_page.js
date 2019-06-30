import React, {Fragment} from 'react';
import axios from "axios/index";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import {Link } from "react-router-dom";

import '../../assets/styles/rest_page.css'
import '../../assets/styles/tabbar.css'

import Header from '../header'
import Footer from '../footer'
import conf from '../../config'
import {translate_food, translate_number} from "../../assets/js/tools"
import back from '../../assets/img/rest_page_back.jpg'
import FoodItem from './food_card'
import CommentCard from "./comment_card";
import Stars from "../stars";
import CommentAverageItem from "./comment-average-item";

export default class RestaurantPage extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        axios.get(conf.server_adr + '/api/restaurants/' + this.props.match.params.id)
            .then(response => {
                console.log(response.data);
                this.setState({restaurant_list: response.data});
            })
            .catch(error => {
                console.log(error);
            });
    }
    render() {
        return (
            <Fragment>
                <Header/>
                <img className='rest-page-header-background-image' src={back} alt={""}/>

                <div className="rest-card-container">
                    <div className="left-absolute rest-card-header">
                        <p><Link to={"/restaurant_list/a/b"/*TODO*/}>
                            بازگشت</Link></p>
                        <i className="fas fa-angle-left" />
                    </div>
                    <div className="right-absolute rest-card-header">
                        <p><Link className="light-link" to="/">
                            ریحون
                        </Link></p>
                        <i className="fas fa-angle-left" />
                        <p><Link className="light-link" to={"/restaurant_list/a/b"}>
                            تهران، ظفر
                        </Link></p>
                        <i className="fas fa-angle-left headerIcon " />
                        <p>باگت</p>
                    </div>
                    <div className="rest-page-container">
                        <div className="rest-card">
                            <div>
                                <img src="http://localhost:3001/img/restaurants/5cf7962fc3f8cbdb77df4f90.jpeg"/>
                                <p className="rest-name"> باگت (اندرزگو)</p>
                                <div className="res-score">
                                    <span className="number-of-comments">(36)</span>
                                    <div className="score-stars">
                                        <i className="fa fa-star full-star"></i><i className="fa fa-star full-star"></i><i className="fa fa-star full-star"></i><i className="fa fa-star full-star"></i><i className="fa fa-star half-star"></i>                        </div>
                                    <span className="score-number">4.5</span>
                                </div>
                                <div><ul className="res-food-types"><li>فست&zwnj;فود</li><li>ساندویچ</li><li>پیتزا</li></ul></div>
                                <p className="rest-address">
                                    بلوار اندرزگو، بین کاوه و قیطریه، نبش مهر محمدی
                                </p>
                            </div>
                            <div className="shady-line" />
                        </div>
                        <Tabs>
                            <TabList>
                                <Tab>منوی رستوران</Tab>
                                <Tab>اطلاعات رستوران</Tab>
                                <Tab>نظرات کاربران</Tab>
                            </TabList>
                            <TabPanel>
                                <div className="tab-header">
                                    <p className="search-rest-icon">
                                        <i className="fas fa-search" />
                                    </p>
                                    <input
                                        className="search-rest-menu"
                                        placeholder="جستجو در منوی این رستوران"
                                        type="text"
                                    />
                                </div>

                                <div className="food-list-main">
                                    <div className="type-part">
                                        <div className="type-part-inner">
                                            <div className="type-list">
                                                <div className="type-item type-item-active">
                                                    <div className="type-name">
                                                        پیتزا
                                                    </div>
                                                </div>
                                                <div className="type-item">
                                                    <div className="type-name">
                                                        ساندویچ
                                                    </div>
                                                </div>
                                                <div className="type-item">
                                                    <div className="type-name">
                                                        برگر
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rest-part">
                                        <div>
                                            <p className="food-type-title">پیتزا</p>
                                        </div>
                                        <div className="rest-part-row">
                                            <FoodItem />
                                            <FoodItem />
                                        </div>
                                        <div>
                                            <p className="food-type-title">پیتزا</p>
                                        </div>
                                        <div className="rest-part-row">
                                            <FoodItem />
                                            <FoodItem />
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>



                            <TabPanel>
                                <div className="tab-container">
                                    <div className="tab-header">
                                        <p>اطلاعات رستوران</p>
                                    </div>
                                    <br />
                                    <div className="details-container">
                                        <div className="rest-name-container">
                                            <p> باگت</p>
                                        </div>
                                        <div className="address-container">
                                            <i className="address-icon fas fa-map-marker-alt" />
                                            <p className="headerSemiSmallBold address-text">
                                                آدرس دقیق رستوران
                                            </p>
                                        </div>
                                        <div className="time-container">
                                            <div className="time-container-part-one">
                                                <i className="time-icon fas fa-clock" />
                                                <p className="time-header">ساعت سفارش‌گیری</p>
                                            </div>
                                            <div className="time-container-part-two">
                                                <p className="daily-time-all-day">همه‌ روزه</p>
                                                <p className="timeText"> از{" "}
                                                    {"۱۱"}
                                                    {" "}تا{" "}
                                                    {"۲۳"}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>



                            <TabPanel>
                                <div className="tab-container">
                                    <div className="tab-header">
                                        <p>نظرات کاربران در مورد باگت</p>
                                    </div>
                                    <div className="commentsOverview">
                                        <div className="text-align-right">
                                            <p>
                                                شما هم می‌توانید بعد از سفارش از این رستوران نظر خود را
                                                ثبت نمایید.
                                            </p>
                                        </div>
                                        <div className="big-score">
                                            <div className="score-stars">
                                                <Stars rate={4.5}/>
                                                <span className="number-of-comments">(4)</span>
                                            </div>
                                            <span className="score-number">4.5</span>
                                        </div>
                                        <div className="comment-average-container">
                                            <CommentAverageItem rate={43} title={'کیفیت غذا'}/>
                                            <CommentAverageItem rate={43} title={'زمان غذا'}/>
                                            <CommentAverageItem rate={43} title={'شسیشسیشسی غذا'}/>
                                        </div>
                                        <div className="comment-container">
                                            <CommentCard />
                                            <CommentCard />
                                            <CommentCard />
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>

                        </Tabs>
                    </div>

                </div>
                <div />
                <br/><br/>
                <Footer/>
            </Fragment>
        );
    }
}