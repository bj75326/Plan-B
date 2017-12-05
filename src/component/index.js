/**
 * Created by jibin on 17/8/25.
 */

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
//import Link from './common/customLink';
import template from './common/template';
import config from '../config/Config';
import FontAwesome from 'react-fontawesome';
import Loading from './common/loading';
import Tool from '../config/Tool';

class Home extends Component {
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.currentAnimation('left');
    }

    render(){
        const {initData} = this.props;
        const {data, isFetching} = initData;
        const {projectName, version} = config;

        const showCaseGroup = Object.keys(data);

        if(isFetching === false){
            return (
                <div className="page">
                    {Tool.flattenArray(showCaseGroup.map(showCaseName => {
                        const cases = data[showCaseName];
                        return ([
                            <div className="title">{showCaseName}</div>,
                            <div className="showcases">
                                {cases.map(_case_ => (
                                    <Link to={`${_case_.url}`} onClick={this.handleClick} key={`${_case_.url}`} >
                                        <span className="icon" style={_case_.iconStyle}><FontAwesome name={_case_.icon}/></span>
                                        <span className="name">{_case_.name}</span>
                                        <span className="arrow"><FontAwesome name="angle-right"/></span>
                                    </Link>
                                ))}
                            </div>
                        ]);
                    }))}
                    <div className="signature">
                        <span>PLAN-B {version} · Created by <a href="https://github.com/bj75326">Bill Ji</a></span>
                    </div>
                </div>
            );
        }else{
            return <Loading className="page"/>;
        }
    }
}

export default template({
    id: 'index',
    component: Home,
    url: '/data/content.json'
});

