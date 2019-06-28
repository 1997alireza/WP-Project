import React, {Fragment} from 'react';

import SearchBar from '../search_bar'
import Areaelect from './area_select'
import '../../assets/styles/rest_list.css'

export default class Area extends React.Component {
    constructor(props) {
        super(props);
        this.state = {show_search: false};
    }
    componentDidMount() {
    }
    handleClick = (e) => {
        if(!this.state.show_search)
            this.setState({show_search: true});
        else{
            // console.log(this.contains(e.target))
            //e.target tu unja
        }
        // this.setState(state => ({
        //     show_search: !state.show_search
        // })); //TODO
    };
    render() {
        return (
            this.state.show_search ?
                <div className="header-bar" onClick={this.handleClick}>
                    <div className={'inline-block'}>
                        <SearchBar/>
                    </div>
                </div>
                :
                <div className="header-title header-bar">
                    <p className="header-title-p">{this.props.number} رستوران امکان سرویس‌دهی به
                        <AreaSelect handleClick={this.handleClick}>
                            {this.props.city + '، ' + this.props.area}
                        </AreaSelect>
                        را دارند</p>
                </div>

        );
    }
}