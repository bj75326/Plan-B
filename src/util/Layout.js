/**
 * Created by jibin on 17/9/8.
 */

import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import {connect} from 'react-redux';
import * as action from '../redux/action/index';

class LayoutSwitch extends Component {
    render(){
        console.log('render LayoutSwitch');
        const {animationCls} = this.props.routeAnimation.toJS();
        const location = this.props.location;
        return (
            <ReactCSSTransitionGroup
                transitionName={animationCls}
                transitionEnter={true}
                transitionLeave={true}
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}
            >
                <div key={location.pathname}>
                    {this.props.children}
                </div>
            </ReactCSSTransitionGroup>
        );
    }
}

const Layout = connect(state=>{
    let {routeAnimation} = state;
    return {
        routeAnimation: routeAnimation
    }
}, action)(LayoutSwitch);

export default Layout;
