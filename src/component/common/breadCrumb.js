/**
 * Created by jibin on 17/12/13.
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';
import Tool from '../../config/Tool';

const routes = [{
    path: '/',
    breadcrumbName: <FontAwesome name="home"/>
}];

const itemRender = (route, routes, path, param) => {
    const last = routes.indexOf(route) === routes.length - 1;
    return last ? (typeof route.breadcrumbName === 'object' ? route.breadcrumbName :
            <span>{route.breadcrumbName}</span>
    ) : <Link to={path} {...param}>{route.breadcrumbName}</Link>
};

class BreadCrumb extends React.Component {
    constructor(props){
        super(props);
    }

    static defaultProps = {
        routes: routes,
        itemRender: itemRender,
        separator: '/',
    };

    static PropTypes = {
        routes: PropTypes.array,
        itemRender: PropTypes.func,
        separator: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.node
        ]),
        param: PropTypes.object
    };

    render(){

        const {routes, itemRender, separator, param} = this.props;

        return (
            <div className="breadCrumb">
                {Tool.flattenArray(routes.map((route, index, routes)=>{
                    if(index === routes.length - 1){
                        return itemRender(route, routes, route.path, param);
                    }
                    return [itemRender(route, routes, route.path, param),
                        typeof separator === 'string'? <span className="breadCrumb-separator">{separator}</span> : separator];
                }))}
            </div>
        );
    }
}

export default BreadCrumb;