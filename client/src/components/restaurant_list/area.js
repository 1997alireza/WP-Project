import React, {Fragment} from 'react';

import SearchBar from '../search_bar'
import AreaSelect from './area_select'
import '../../assets/styles/rest_list.css'

export default class Area extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }
    render() {
        return (
            this.props.show_search ?
                <div className="header-bar">
                    <div className={'inline-block'}>
                        <SearchBar/>
                    </div>
                </div>
                :
                <div className="header-title header-bar">
                    <p className="header-title-p">{this.props.number} رستوران امکان سرویس‌دهی به
                        <AreaSelect handleClick={this.props.onClickOnBar}>
                            {this.props.city + '، ' + this.props.area}
                        </AreaSelect>
                        را دارند</p>
                </div>

        );
    }
}