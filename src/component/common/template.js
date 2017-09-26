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
        component: <div></div>
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
            /*
            const {isExact, url} = this.props.match;
            const {projectName} = config;
            if(isExact && url.replace(/\//g, '') === projectName){
                document.documentElement.style.backgroundColor = "#F2F2F2";
            }else{
                document.documentElement.style.backgroundColor = "#FAFAFA";
            }*/
        }

        shouldComponentUpdate(nextProps, nextState){
            if(nextProps.initData.get['isFetching']) return false;

            return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
        }

        componentDidMount(){
            if(this.props.setting.url){
                this.props.fetchPosts(this.props.setting.url, this.props.setting.data);
            }
        }

        render(){
            return (
                <this.props.setting.component {...this.props} initData={this.props.initData.toJS()}/>
            );
        }
    }

    return connect(state => {
        let {initData} = state;
        return {
            initData: initData
        }
    }, action)(Index);
};

export default Main;
