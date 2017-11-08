/**
 * Created by jibin on 17/8/27.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as action from '../../redux/action/index';
import {is, fromJS} from 'immutable';

const Main = mySetting => {
    let defaultSetting = {
        id: '',
        url: '',
        data: {},
        component: <div></div>,
        actionName: 'fetchPosts',
        dataName: 'initData'
    };

    let setting = Object.assign({}, defaultSetting, mySetting);

    class Index extends Component {
        constructor(props, context){
            super(props, context);
        }

        static defaultProps = {
            setting
        };

        componentWillMount(){

        }

        shouldComponentUpdate(nextProps, nextState){
            if(nextProps.initData.get['isFetching']) return false;

            return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
        }

        componentDidMount(){
            if(this.props.setting.url){
                this.props[this.props.setting.actionName](this.props.setting.url, this.props.setting.data);
            }
        }

        render(){
            console.log("template render");
            return (
                <this.props.setting.component {...this.props} initData={this.props.initData.toJS()}/>
            );
        }
    }

    return connect(state => {
        return {
            initData: state[setting.dataName]
        }
    }, action)(Index);
};

export default Main;
