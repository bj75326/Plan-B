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

initReactFastclick();

render((
    <Provider store={store}>
        {route}
    </Provider>
), document.querySelector('#App'));