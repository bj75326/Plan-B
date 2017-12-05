/**
 * Created by jibin on 17/8/24.
 */
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import route from './router/Route';

import store from './redux/store/Store';

import './style/common.css';
import './style/font-awesome.min.css';

import initReactFastclick from 'react-fastclick';

import Tool from './config/Tool';
import {currentAnimation} from './redux/action/index';

initReactFastclick();

//layout switch animation test
window.addEventListener("hashchange", function(event){
    const {newURL, oldURL} = event;
    const newPathLevel = Tool.parseHashURL(newURL);
    const oldPathLevel = Tool.parseHashURL(oldURL);
    if(newPathLevel > oldPathLevel){
        store.dispatch(currentAnimation('left'));
    }else{
        store.dispatch(currentAnimation('right'));
    }
}, false);

render((
    <Provider store={store}>
        {route}
    </Provider>
), document.querySelector('#App'));