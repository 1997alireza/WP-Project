import React from 'react';
import axios from 'axios';
import {Link } from "react-router-dom";
import conf from '../config'
import {city_to_eng} from '../assets/js/tools'

function capitalFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {area_suggestions: [], search_area: '', search_city: ''}
    }
    area_search_text_change(event){
        this.setState({search_area: event.target.value});
    }
    city_search_text_change(event){
        console.log( event.target.value)
        this.setState({search_city: event.target.value});
    }
    componentDidMount() {
        axios.get(conf.server_adr + '/api/restaurants/area/')
            .then(response => {
                this.setState({area_suggestions: response.data});
            })
            .catch(error => {
                console.log(error);
            });
    }
    render() {
        let city_param = this.state.search_city.length === 0 ?
            ' ' :
            city_to_eng(this.state.search_city);
        let area_param = this.state.search_area.length === 0 ?
            ' ' :
            this.state.search_area;
        return (
            <div className="search-bar-div">
                <datalist id="area_suggestions">
                    {
                        this.state.area_suggestions.map((area) =>
                        <option key={area.city+ ' ' + area.area} value={capitalFirst(area.area)} label={capitalFirst(area.city)} />
                    )}
                </datalist>

                <datalist id="city_suggestions">
                    <option value={"تهران"} />
                    <option value={"اصفهان"} />
                    <option value={"تبریز"} />
                </datalist>

                <div className="dropdown-menu">
                    <i className="fas fa-angle-down"></i>
                    <input type="text" list="city_suggestions" placeholder="شهر" onChange={(event) => this.city_search_text_change(event)}/>
                </div>
                <fieldset className="region-getter">
                    <legend>منطقه خود را وارد کنید</legend>
                    <div className="region-getter-typable">
                        <i className="fas fa-map-marker-alt"></i>
                        <input type="text" list="area_suggestions" placeholder="مثلا نیاوران" onChange={(event) => this.area_search_text_change(event)}/>
                    </div>
                    <div className="search-icon-div">
                        <Link to={"/restaurant_list/" + city_param + '/' + area_param}>
                        <i className="fas fa-search"></i></Link>
                    </div>
                </fieldset>
            </div>
        );
    }
}