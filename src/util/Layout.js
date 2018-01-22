/**
 * Created by jibin on 17/9/8.
 */

import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import {connect} from 'react-redux';
import * as action from '../redux/action/index';

class LayoutSwitch extends Component {

    //need to add shouldComponentUpdate here!!
    shouldComponentUpdate(nextProps){
        if(nextProps.location.pathname === this.props.location.pathname){
            return false;
        }
        return true;
    }

    componentWillUpdate(nextProps){
        this.currPath = this.props.location.pathname;
        this.nextPath = nextProps.location.pathname;
    }

    componentDidUpdate(){
        console.log('prevDOM', this[this.currPath]);
        console.log('currDOM', this[this.nextPath]);
        this[this.currPath].scrollTop = this.props.routeAnimation.toJS()['scrollTop'];

    }

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
                <div key={location.pathname} ref={el=>this[location.pathname]=el}>
                    {this.props.children}
                </div>
            </ReactCSSTransitionGroup>
        );
    }
}

const Layout = connect(state=>{
    let {routeAnimation} = state;
    return {
        routeAnimation
    }
}, action)(LayoutSwitch);

export default Layout;
