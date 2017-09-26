/**
 * Created by jibin on 17/8/24.
 */
import React from 'react';
import {
    HashRouter as Router,
    Route
} from 'react-router-dom';
import Bundle from '../util/Bundle';
import Layout from '../util/Layout';
import config from '../config/Config';

import Home from '../component/index';
import toastCaseContainer from '../component/requires/toastCase';
import cellSwipeCaseContainer from '../component/requires/cellSwipeCase';

const ToastCase = ({match}) => (
    <Bundle load={toastCaseContainer}>
        {Component => <Component match={match}/>}
    </Bundle>
);

const CellSwipeCase = ({match}) => (
    <Bundle load={cellSwipeCaseContainer}>
        {Component => <Component match={match}/>}
    </Bundle>
);

/*----*/
const {projectName} = config;

const RouteConfig = (
    <Router basename="/">
        <Route children={({location})=>{
            return (
                <Layout location={location}>
                    <Route location={location} path="/" exact component={Home}/>
                    <Route location={location} path="/Toast" component={ToastCase}/>
                    <Route location={location} path="/Cell-Swipe" component={CellSwipeCase}/>
                </Layout>
            );
        }}/>
    </Router>
);

export default RouteConfig;