/**
 * Created by jibin on 17/9/7.
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';
import config from '../../config/Config';
import Tool from '../../config/Tool';
import {fromJS, is} from 'immutable';

class Header extends Component{
    constructor(props){
        super(props);

        this.handleLinkClick = this.handleLinkClick.bind(this);
    }

    static defaultProps = {
        title: '',
        description: ['此例请用移动端查看']
    };

    static PropTypes = {
        title: PropTypes.string.isRequired,
        description: PropTypes.array,
        currentAnimation: PropTypes.func.isRequired
    };

    shouldComponentUpdate(nextProps){
        return !is(fromJS(nextProps), fromJS(this.props));
    }

    handleLinkClick(){
        this.props.currentAnimation('right');
    }

    render(){
        const {projectName} = config;
        const {title, description} = this.props;

        return (
            <div className="subtitle">
                <div className="page-back">
                    <Link to="/" onClick={this.handleLinkClick}>
                        <FontAwesome name="angle-left"/>
                    </Link>
                </div>
                <div className="page-title">{title}</div>
                <div className="extension"></div>
                <div className="desc">
                    {description.map(desc => (
                        <p>{Tool.trim(desc)}</p>
                    ))}
                </div>
            </div>
        );
    }
}

export default Header;