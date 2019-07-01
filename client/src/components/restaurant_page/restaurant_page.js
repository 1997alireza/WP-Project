import React, {Fragment} from 'react';
import axios from "axios/index";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import {Link } from "react-router-dom";

import '../../assets/styles/rest_page.css'
import '../../assets/styles/tabbar.css'

import Header from '../header'
import Footer from '../footer'
import conf from '../../config'
import {translate_food, translate_number, city_to_fa} from "../../assets/js/tools"
import back from '../../assets/img/rest_page_back.jpg'
import FoodCard from './food_card'
import CommentCard from "./comment_card";
import Stars from "../stars";
import CommentAverageItem from "./comment-average-item";

import * as Scroll from 'react-scroll';
import { Link as ScrollLink, Element, Events, scrollSpy, scroller } from 'react-scroll'

export default class RestaurantPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            details: {_id:'', name:'', openingTime:0, closingTime:0, address:{_id: '', city:'', area:'',addressLine:''}, comments:[], categories:[],foods:[], logo:'', averageRate:0 ,averageQuality: 0, averagePackaging: 0, averageDeliveryTime:0},
            food_types: [], food_types_active: [], window_width: window.innerWidth, search_text: '', active_tab: 0
        }
    }
    food_search_text_change(event){
        this.setState({search_text: event.target.value});
    }
    componentDidMount() {
        window.addEventListener("resize", () => {
            this.setState({window_width: window.innerWidth})
        });
    }
    componentWillMount() {
        axios.get(conf.server_adr + '/api/restaurants/' + this.props.match.params.id)
            .then(response => {
                let details = response.data;
                console.log(details);
                this.setState({details: details});

                let food_types = {};
                let food_types_active = {};
                details.foods.forEach(food => {
                    let food_type = food.foodSet;
                    if(food_type in food_types)
                        food_types[food_type].push(food);
                    else {
                        food_types[food_type] = [];
                        food_types[food_type].push(food);
                        food_types_active[food_type] = false;
                    }
                });
                food_types_active[Object.keys(food_types_active)[0]] = true;
                this.setState({food_types: food_types, food_types_active: food_types_active})

            })
            .catch(error => {
                console.log(error);
            });
    }
    active_type(activated_type){
        let food_types_active_new = {};
        Object.keys(this.state.food_types_active).forEach(type => {
            food_types_active_new[type] = false;
        });
        food_types_active_new[activated_type] = true;
        this.setState({food_types_active: food_types_active_new})
    }
    render() {
        let categories_elements = [];
        this.state.details.categories.forEach(cat => {
            categories_elements.push(<li>{translate_food(cat.name)}</li>)
        });

        let type_list = [];
        Object.keys(this.state.food_types_active).forEach(type => {
            if(this.state.food_types_active[type]) {
                type_list.push(
                    <div className="type-item type-item-active">
                        <ScrollLink to={type} smooth={true} offset={-100} duration={500}>
                            <div className="type-name">
                                {translate_food(type)}
                            </div>
                        </ScrollLink>
                    </div>
                );
            }
            else {
                type_list.push(
                    <div className="type-item">
                        <ScrollLink to={type} smooth={true} offset={-100} duration={500} onClick={() => this.active_type(type)}>
                            <div className="type-name">
                                {translate_food(type)}
                            </div>
                        </ScrollLink>
                    </div>
                );
            }
        });

        let food_num_in_a_row = 2;
        if(this.state.window_width < 985)
            food_num_in_a_row = 1;

        let show_food_type_bar = true;
        if(this.state.window_width < 850)
            show_food_type_bar = false;

        let foot_type_items = [];
        Object.keys(this.state.food_types).forEach(type => {
            let food_items = [];
            this.state.food_types[type].forEach(food => {
                if(food.name.substr(0, this.state.search_text.length) === this.state.search_text)
                    food_items.push(
                        <FoodCard name={food.name} price={food.price} description={food.description} />
                    );
            });
            for(;food_items.length % food_num_in_a_row !== 0;){
                food_items.push(<div className={"food-card-place"}></div>)
            }
            let food_items_on_row = [];
            for(let i = 0; i < food_items.length; i += food_num_in_a_row){
                let inner_el = [];
                for(let j = 0; j < food_num_in_a_row; j++) {
                    inner_el.push(food_items[i+j])
                }
                food_items_on_row.push(
                    <div className="rest-part-row">
                        {inner_el}
                    </div>
                )
            }
            foot_type_items.push(
                <Element name={type}>
                    <div id={type} className={"food-type-title-container"}>
                        <p className={"food-type-title"}>{translate_food(type)}</p>
                    </div>
                    <div>
                        {food_items_on_row}
                    </div>
                </Element>
            );
        });

        let comments_card_elements = this.state.details.comments.map((comment, index) =>
            <CommentCard key={index} details={comment}/>
        );

        return (
            <Fragment>
                <Header/>
                <img className='rest-page-header-background-image' src={back} alt={""}/>

                <div className="rest-card-container">
                    <div className="left-absolute rest-card-header">
                        <p><Link to={"/restaurant_list/" + this.state.details.address.city + '/' + this.state.details.address.area}>
                            بازگشت</Link></p>
                        <i className="fas fa-angle-left" />
                    </div>
                    <div className="right-absolute rest-card-header">
                        <p><Link className="light-link" to="/">
                            ریحون
                        </Link></p>
                        <i className="fas fa-angle-left" />
                        <p><Link className="light-link" to={"/restaurant_list/" + this.state.details.address.city + '/' + this.state.details.address.area}>
                            {city_to_fa(this.state.details.address.city) + '، ' + this.state.details.address.area}
                        </Link></p>
                        <i className="fas fa-angle-left headerIcon " />
                        <p>{this.state.details.name}</p>
                    </div>
                    <div className="rest-page-container">
                        <div className="rest-card">
                            <div>
                                <img src={conf.server_adr + this.state.details.logo}/>
                                <p className="rest-name">{this.state.details.name}</p>
                                <div className="res-score">
                                    <span className="number-of-comments">({this.state.details.comments.length})</span>
                                    <div className="score-stars">
                                        <Stars rate={this.state.details.averageRate}/>
                                    </div>
                                    <span className="score-number">{this.state.details.averageRate}</span>
                                </div>
                                <div>
                                    <ul className="res-food-types">
                                        {categories_elements}
                                    </ul>
                                </div>
                                <p className="rest-address">
                                    {this.state.details.address.addressLine}
                                </p>
                            </div>
                            <div className="shady-line" />
                        </div>
                        <Tabs>
                            <TabList>
                                <Tab className={"display-none"}></Tab>
                                <ScrollLink to={"tab_menu"} smooth={true} offset={-100} duration={500}
                                            >
                                    <Tab className={this.state.active_tab === 0 ? 'react-tabs__tab react-tabs__tab--selected' : 'react-tabs__tab'} onClick={() => this.setState({active_tab: 0})}>
                                        منوی رستوران
                                    </Tab>
                                </ScrollLink>
                                <ScrollLink to={"tab_details"} smooth={true} offset={-100} duration={500}
                                            >
                                    <Tab className={this.state.active_tab === 1 ? 'react-tabs__tab react-tabs__tab--selected' : 'react-tabs__tab'} onClick={() => this.setState({active_tab: 1})}>
                                        اطلاعات رستوران
                                    </Tab>
                                </ScrollLink>
                                <ScrollLink to={"tab_comments"} smooth={true} offset={-100} duration={500}
                                            >
                                    <Tab className={this.state.active_tab === 2 ? 'react-tabs__tab react-tabs__tab--selected' : 'react-tabs__tab'} onClick={() => this.setState({active_tab: 2})}>
                                        نظرات کاربران
                                    </Tab>
                                </ScrollLink>
                            </TabList>
                            <Element name={"tab_menu"}>
                                <div className={"tab-container-outer"}>
                                    <div className="tab-header">
                                        <p className="search-rest-icon">
                                            <i className="fas fa-search" />
                                        </p>
                                        <input
                                            className="search-rest-menu"
                                            placeholder="جستجو در منوی این رستوران"
                                            type="text"
                                            onChange={(event) => this.food_search_text_change(event)}
                                        />
                                    </div>

                                    <div className="food-list-main">
                                        {
                                            show_food_type_bar ?
                                                <div className="type-part">
                                                    <div className="type-part-inner">
                                                        <div className="type-list">
                                                            {type_list}
                                                        </div>
                                                    </div>
                                                </div>
                                                :
                                                <Fragment></Fragment>
                                        }
                                        <div className="rest-part">
                                        {foot_type_items}
                                        </div>
                                    </div>
                                </div>
                            </Element>


                            <Element name={"tab_details"}>
                                <div className={"tab-container-outer"}>
                                    <div className="tab-container">
                                        <div className="tab-header">
                                            <p>اطلاعات رستوران</p>
                                        </div>
                                        <br />
                                        <div className="details-container">
                                            <div className="rest-name-container">
                                                <p>{this.state.details.name}</p>
                                            </div>
                                            <div className="address-container">
                                                <i className="address-icon fas fa-map-marker-alt" />
                                                <p className="headerSemiSmallBold address-text">
                                                    {this.state.details.address.addressLine}
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
                                                        {this.state.details.openingTime}
                                                        {" "}تا{" "}
                                                        {this.state.details.closingTime}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Element>

                            <Element name={"tab_comments"}>
                                <div className={"tab-container-outer"}>
                                    <div className="tab-container">
                                        <div className="tab-header">
                                            <p>نظرات کاربران در مورد {this.state.details.name}</p>
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
                                                    <Stars rate={this.state.details.averageRate}/>
                                                    <span className="number-of-comments">({this.state.details.comments.length})</span>
                                                </div>
                                                <span className="score-number">{this.state.details.averageRate}</span>
                                            </div>
                                            <div className="comment-average-container">
                                                <CommentAverageItem rate={this.state.details.averageQuality * 20} title={'کیفیت غذا'}/>
                                                <CommentAverageItem rate={this.state.details.averagePackaging * 20} title={'کیفیت بسته‌بندی'}/>
                                                <CommentAverageItem rate={this.state.details.averageDeliveryTime * 20} title={'سرعت ارسال پیک'}/>
                                            </div>
                                            <div className="comment-container">
                                                {comments_card_elements}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Element>
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