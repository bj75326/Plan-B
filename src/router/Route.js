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
import fieldCaseContainer from '../component/requires/fieldCase';
import spinnerCaseContainer from '../component/requires/spinnerCase';
import flexCaseContainer from '../component/requires/flexCase';
import buttonCaseContainer from '../component/requires/buttonCase';
import dialogCaseContainer from '../component/requires/dialogCase';

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

const FieldCase = ({match}) => (
    <Bundle load={fieldCaseContainer}>
        {Component => <Component match={match}/>}
    </Bundle>
);

const SpinnerCase = ({match}) => (
    <Bundle load={spinnerCaseContainer}>
        {Component => <Component match={match}/>}
    </Bundle>
);

const FlexCase = ({match}) => (
    <Bundle load={flexCaseContainer}>
        {Component => <Component match={match}/>}
    </Bundle>
);

const ButtonCase = ({match}) => (
    <Bundle load={buttonCaseContainer}>
        {Component => <Component match={match}/>}
    </Bundle>
);

const DialogCase = ({match}) => (
    <Bundle load={dialogCaseContainer}>
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
                    <Route location={location} path="/Field" component={FieldCase}/>
                    <Route location={location} path="/Spinner" component={SpinnerCase}/>
                    <Route location={location} path="/Flex-Box" component={FlexCase}/>
                    <Route location={location} path="/Button" component={ButtonCase}/>
                    <Route location={location} path="/Dialog-Box" component={DialogCase}/>
                </Layout>
            );
        }}/>
    </Router>
);

export default RouteConfig;