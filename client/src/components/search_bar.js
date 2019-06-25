import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function capitalFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {area_suggestions: []}
    }
    componentDidMount() {
        axios.get('http://localhost:3001/api/restaurants/area/')
            .then(response => {
                // let area_suggestions = [];
                // for(let i in response.data) {
                //     area_suggestions.push(response.data[i]);
                // }
                console.log(response.data);
                this.setState({area_suggestions: response.data});
            })
            .catch(error => {
                console.log(error);
            });
    }
    render() {
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
                    <input type="text" list="city_suggestions" placeholder="شهر" />
                </div>
                <fieldset className="region-getter">
                    <legend>منطقه خود را وارد کنید</legend>
                    <div className="region-getter-typable">
                        <i className="fas fa-map-marker-alt"></i>
                        <input type="text" list="area_suggestions" placeholder="مثلا نیاوران" />
                    </div>
                    <div className="search-icon-div cursor-pointer">
                        <Link to="/restaurant_list"><i className="fas fa-search"></i></Link>
                    </div>
                </fieldset>
            </div>
        );
    }
}