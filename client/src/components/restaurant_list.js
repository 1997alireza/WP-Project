import React from 'react';
import axios from "axios/index";

export default class RestaurantList extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        axios.get('http://localhost:3001/api/restaurants?area=' + this.props.match.params.area)
            .then(response => {
                console.log(response.data);
                this.setState({restarurant_list: response.data});
            })
            .catch(error => {
                console.log(error);
            });
    }
    render() {
        return (
            <div>
            </div>
        );
    }
}