import React, {Fragment} from 'react';
import axios from "axios/index";

import Header from './header'
import Footer from './footer'
import back from '../assets/img/rest_page_back.jpg'
import conf from '../config'

export default class Restaurant extends React.Component {
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
                <div></div><img src={back} />

                <div>

                </div>
                <Footer/>
            </Fragment>
        );
    }
}