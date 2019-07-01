import React, {Fragment} from 'react';
import axios from "axios/index";

import '../../assets/styles/rest_list.css'

import Header from '../header'
import Footer from '../footer'
import Area from './area'
import RestaurantItem from './restaurant_small_item'
import conf from '../../config'
import back from '../../assets/img/rest_list_page_back.jpg'
import {translate_food} from "../../assets/js/tools";

export default class RestaurantList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurant_list: [], categories_count: [], categories_check: {}, search_text: '',
            filter_search_text: '', window_width: window.innerWidth, clicked_on_area: false, city: '', area: ''
        };
    }
    initialize(){
        this.setState({city: this.props.match.params.city, area:this.props.match.params.area});
        axios.get(conf.server_adr + '/api/restaurants?area=' + this.props.match.params.area.toLowerCase())
            .then(response => {
                let categories_count = {};
                let categories_check ={};
                response.data.forEach(rest => {
                    rest.categories.forEach(cat => {
                        let cat_n = cat.name;
                        if(cat_n in categories_count)
                            categories_count[cat_n]++;
                        else {
                            categories_count[cat_n] = 1;
                            categories_check[cat_n] = false;
                        }
                    })
                });
                let sorted_categories_count = Object.keys(categories_count).map(function(key) {
                    return [key, categories_count[key]];
                });
                sorted_categories_count.sort(function(first, second) {
                    return second[1] - first[1];
                });
                this.setState({restaurant_list: response.data, categories_count: sorted_categories_count, categories_check: categories_check});
            })
            .catch(error => {
                console.log(error);
            });
    }
    componentWillMount() {
        this.initialize();
    }
    componentDidUpdate(){
        if(this.state.city !== this.props.match.params.city || this.state.area !== this.props.match.params.area) {
            this.initialize();
            this.setState({clicked_on_area: false})
        }
    }
    componentDidMount() {
        window.addEventListener("resize", () => {
            this.setState({window_width: window.innerWidth})
        });
    }
    filter_click(key){
        let cat_check = {};
        for(let key in this.state.categories_check){
            cat_check[key] = this.state.categories_check[key];
        }
        cat_check[key] = !cat_check[key];
        this.setState({categories_check: cat_check});
    }
    rest_search_text_change(event){
        this.setState({search_text: event.target.value});
    }
    filter_search_text_change(event){
        this.setState({filter_search_text: event.target.value});
    }
    click_on_area_part(){
        this.setState({clicked_on_area: true})
    }
    click_on_out_of_area_part(){
        this.setState({clicked_on_area: false})
    }
    render() {
        if(this.state.window_width < 985)
            this.card_num_in_a_row = 1;
        else if(this.state.window_width < 1420)
            this.card_num_in_a_row = 2;
        else
            this.card_num_in_a_row = 3;

        let current_time_hour = (new Date()).getHours();
        let open_rest_list = [];
        let closed_rest_list = [];
        this.state.restaurant_list.forEach((item, key) => {
            let is_ok = item.name.substr(0, this.state.search_text.length) === this.state.search_text;
            if(is_ok) {
                for (let cat_key in this.state.categories_check) {
                    if (this.state.categories_check[cat_key]) {
                        if (! item.categories.map(cat => cat.name).includes(cat_key)) {
                            is_ok = false;
                            break;
                        }
                    }
                }
            }
            if(is_ok) {
                let open = item.openingTime <= current_time_hour && current_time_hour <= item.closingTime;
                if (open) {
                    open_rest_list.push(<RestaurantItem key={key} details={item}/>);
                }
                else {
                	closed_rest_list.push(<RestaurantItem key={key} details={item} closed/>);
                }
            }
        });
        for(;open_rest_list.length % this.card_num_in_a_row !== 0;){
            open_rest_list.push(<a></a>)
        }
        for(;closed_rest_list.length % this.card_num_in_a_row !== 0;){
            closed_rest_list.push(<a></a>)
        }

        let open_rest_list_to_show = [];
        for(let i = 0; i <= open_rest_list.length; i+= this.card_num_in_a_row){
            let inner_el = [];
            for(let j = 0; j < this.card_num_in_a_row; j++){
                inner_el.push(open_rest_list[i+j])
            }
            open_rest_list_to_show.push(
                <div className={"rest-part-row"} key={i}>
                    {inner_el}
                </div>
            )
        }
        let closed_rest_list_to_show = [];
        for(let i = 0; i < closed_rest_list.length; i+= this.card_num_in_a_row){
            let inner_el = [];
            for(let j = 0; j < this.card_num_in_a_row; j++){
                inner_el.push(closed_rest_list[i+j])
            }
            closed_rest_list_to_show.push(
                <div className={"rest-part-row closed-restaurant-row"}>
                    {inner_el}
                </div>
            )
        }
        let selected_filter_elements = [];
        let not_selected_filter_elements = [];
        this.state.categories_count.forEach(item => {
            let key = item[0];
            let count = item[1];
            if(translate_food(key).substr(0, this.state.filter_search_text.length) === this.state.filter_search_text ||
                key.substr(0, this.state.filter_search_text.length) === this.state.filter_search_text) {
                let el =
                    <div key={key} className={"filter-item"} onClick={() => this.filter_click(key)}>
                        <div>
                            <label className="checkbox-container">
                                <input key={key} type="checkbox" defaultChecked={this.state.categories_check[key]}/>
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <p className={"filter-name"}>{translate_food(key)}</p>
                        <p className={"filter-count"}>({count})</p>
                    </div>;
                if (this.state.categories_check[key])
                    selected_filter_elements.push(el);
                else
                    not_selected_filter_elements.push(el);
            }
        });
        return (
            <Fragment>
                <Header/>
                <img className='header-background-image' src={back} alt={""} onClick={() => this.click_on_out_of_area_part()}/>
                <Area number={this.state.restaurant_list.length} city={this.props.match.params.city}
                      area={this.props.match.params.area}
                      onClickOnBar={() => this.click_on_area_part()}
                      show_search={this.state.clicked_on_area}/>
                <div className="rest-search-div-container" onClick={() => this.click_on_out_of_area_part()}>
                    <div className="rest-search-div">
                        <i className="fas fa-search"></i>
                        <input type="text" placeholder="جست‌وجوی رستوران در این محدوده"
                               onChange={(event) => this.rest_search_text_change(event)} />
                    </div>
                </div>
                <div className={"rest-list-main"} onClick={() => this.click_on_out_of_area_part()}>
                    <div className={"filter-part"}>
                        <div className={"filter-part-inner"}>
                            <div className={"filter-part-title"}>
                                <p>فیلتر بر اساس انواع غذا</p>
                            </div>
                            <div className={"filter-search-div"}>
                                <div>
                                    <input type={"text"} placeholder={"جست‌وجوی دسته‌بندی غذاها"}
                                           onChange={(event) => this.filter_search_text_change(event)}/>
                                </div>
                            </div>
                            <div className={"filter-list selected-filter-list"}>
                                {selected_filter_elements}
                            </div>
                            <div className={"filter-list"}>
                                {not_selected_filter_elements}
                            </div>
                        </div>
                    </div>
                    <div className={"rest-part"}>
                        {open_rest_list_to_show}
                        {
                            closed_rest_list_to_show.length > 0 ?
                                <div className={"rest-part-row"}>
                                    <h1>رستوران‌های بسته</h1>
                                </div>
                                :
                                <Fragment></Fragment>
                        }
                        {closed_rest_list_to_show}
                    </div>
                </div>
                <br /><br />
                <Footer/>
            </Fragment>
        );
    }
}