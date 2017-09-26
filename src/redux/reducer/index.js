/**
 * Created by jibin on 17/8/29.
 */

import {
    REQUEST_INIT_POSTS,
    RECEIVE_INIT_POSTS,
    REPORT_INIT_ERROR,
    CURRENT_ANIMATION
} from '../action/index';
import Immutable from 'immutable';

const defaultInitData = Immutable.fromJS({
    'isFetching': true,
    'error': null,
    'data': {},
    'requestData': null,
    'path': ''
});

export const initData = (state=defaultInitData, action={}) => {
    switch(action.type){
        case REQUEST_INIT_POSTS:
            return state.merge(Immutable.fromJS({
                'isFetching': true,
                'error': null,
                'requestData': action.data,
                'path': action.path
            }));
        case RECEIVE_INIT_POSTS:
            return state.merge(Immutable.fromJS({
                'isFetching': false,
                'data': action.json,
                'path': action.path,
                'error': null
            }));
        case REPORT_INIT_ERROR:
            return state.merge(Immutable.fromJS({
                'isFetching': false,
                'error': action.error,
                'path': action.path
            }));
        default:
            return state;
    }
};

const defaultRouteAnimation = Immutable.fromJS({
    animationCls: 'left'
});

export const routeAnimation = (state=defaultRouteAnimation, action={}) => {
    switch(action.type){
        case CURRENT_ANIMATION:
            return state.set('animationCls', action.animationCls);
        default:
            return state;
    }
};