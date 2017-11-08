/**
 * Created by jibin on 17/8/27.
 */
import fetch from 'isomorphic-fetch';
import Tool from '../../config/Tool';
import Config from '../../config/Config';

export const REQUEST_INIT_POSTS = 'REQUEST_INIT_POSTS';
export const RECEIVE_INIT_POSTS = 'RECEIVE_INIT_POSTS';
export const REPORT_INIT_ERROR = 'REPORT_INIT_ERROR';

export const CURRENT_ANIMATION = 'CURRENT_ANIMATION';

export const REQUEST_FIELD_POSTS = 'REQUEST_FIELD_POSTS';
export const RECEIVE_FIELD_POSTS = 'RECEIVE_FIELD_POSTS';
export const REPORT_FIELD_ERROR = 'REPORT_FIELD_ERROR';

export const SAVE_FIELD_ENTRY = 'SAVE_FIELD_ENTRY';

//首页初始获取数据
const requestInitPosts = (path, data) => ({
    type: REQUEST_INIT_POSTS,
    path,
    data
});

const receiveInitPosts = (path, json) => ({
    type: RECEIVE_INIT_POSTS,
    path,
    json
});

const reportInitError = (path, error) => ({
    type: REPORT_INIT_ERROR,
    path,
    error
});

export const fetchPosts = (path, postData) => {
    let url = Config.target + path + Tool.paramType(postData);
    return dispatch => {
        dispatch(requestInitPosts(path, postData));
        return fetch(url, {
            'Content-Type': 'application/json'
        }).then(response => {
            if(response.ok){
                return response.json();
            }else {
                return Promise.reject(response.status);
            }
        }).then(json => {
            dispatch(receiveInitPosts(path, json));
        }).catch(error => {
            dispatch(reportInitError(path, error));
        });
    };
};

//页面切换动画
export const currentAnimation = animationCls => ({
    type: CURRENT_ANIMATION,
    animationCls
});

//Field初始获取数据
const requestFieldPosts = (path, data) => ({
    type: REQUEST_FIELD_POSTS,
    path,
    data
});

const receiveFieldPosts = (path, json) => ({
    type: RECEIVE_FIELD_POSTS,
    path,
    json
});

const reportFieldError = (path, error) => ({
    type: REPORT_FIELD_ERROR,
    path,
    error
});

export const fetchFieldPosts = (path, postData) => {
    let url = Config.target + path + Tool.paramType(postData);
    return dispatch => {
        dispatch(requestFieldPosts(path, postData));
        return fetch(url, {
            'Content-Type': 'application/json'
        }).then(response => {
            if(response.ok){
                return response.json();
            }else{
                return Promise.reject(response.status);
            }
        }).then(json => {
            dispatch(receiveFieldPosts(path, json));
        }).catch(error => {
            dispatch(reportFieldError(path, error));
        })
    };
};

//同步Field到redux store
export const saveFieldEntry = fields => ({
    type: SAVE_FIELD_ENTRY,
    payload: fields
});

