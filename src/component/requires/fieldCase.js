/**
 * Created by jibin on 17/10/16.
 */

import React, {Component} from 'react';
import Template from '../common/template';
import {createForm} from 'rc-form';
import Loading from '../common/loading';
import CellGroup from '../cell/CellGroup';
import Header from '../common/header';
import PropTypes from 'prop-types';
import Config from '../../config/Config';
import fetch from 'isomorphic-fetch';

import InputItem from '../field/InputItem';

const inputLabel = (text) => (
    <div className="pb-input-label">
        <span className="pb-input-text">{text}</span>
    </div>
);

class FieldCase extends Component {
    constructor(props){
        super(props);
    }

    static PropTypes = {
        form: PropTypes.object
    };

    render(){
        const {initData} = this.props;
        const {data, isFetching} = initData;
        const {getFieldProps, getFieldError, isFieldValidating} = this.props.form;

        if(isFetching === false){

            return (
                <div className="page subpage">
                    <Header title="Field" currentAnimation={this.props.currentAnimation}/>
                    <div className="viewport">
                        <CellGroup title="基本样式" style={{marginTop: '11px'}}>
                            <CellGroup.Cell customTitle={true} className="field-cell">
                                {inputLabel("用户名")}
                                <InputItem {...getFieldProps('username', {
                                    //validateFirst: true,
                                    validate: [{
                                        trigger: 'onBlur',
                                        rules: [{
                                            required: true, message: '用户名必填'
                                        }, {
                                            validator(rule, value, callback){
                                                let errors = [];
                                                //此处示例hard code了 json路径
                                                let url = Config.target + '/data/asyncValidate.json';
                                                fetch(url, {
                                                    'Content-Type': 'application/json'
                                                }).then(response => {
                                                    if(response.ok){
                                                        return response.json();
                                                    }else{
                                                        return Promise.reject(response.status);
                                                    }
                                                }).then(json => {
                                                    if(json['username'] && json['username'].length >= 0 && json['username'].indexOf(value) > -1){
                                                        errors.push('用户名已存在');
                                                    }
                                                    callback(errors);
                                                }).catch(error => {
                                                    errors.push(`用户名验证失败 - ${error}`);
                                                    callback(errors);
                                                });
                                            }
                                        }, {
                                            validator(rule, value, callback){
                                                let errors = [];
                                                if(!/^[a-zA-Z0-9_]{3,16}$/.test(value)){
                                                    errors.push('用户名格式错误，应只包含3-16位字母或数字或者下划线');
                                                }
                                                callback(errors);
                                            }
                                        }]
                                    }, {
                                        trigger: 'onChange',
                                        rules: [{
                                            validator(rule, value, callback){
                                                let errors = [];
                                                if(!/^[a-zA-Z0-9_]{3,16}$/.test(value)){
                                                    errors.push('用户名格式错误，应只包含3-16位字母或数字或者下划线');
                                                }
                                                callback(errors);
                                            }
                                        }]
                                    }]
                                })} placeholder="请输入用户名" isFieldValidating={isFieldValidating('username')}
                                           errors={getFieldError('username')} clear={true}
                                />
                            </CellGroup.Cell>
                            <CellGroup.Cell customTitle={true} className="field-cell">
                                {inputLabel("邮箱")}
                                <InputItem {...getFieldProps('email', {
                                    validateFirst: true,
                                    rules: [{
                                        required: true, message: 'email必填'
                                    },{
                                        type: 'email', message: 'email格式错误'
                                    }]
                                })} placeholder="请输入邮箱" isFieldValidating={isFieldValidating('email')}
                                           errors={getFieldError('email')} clear={true}
                                />
                            </CellGroup.Cell>
                        </CellGroup>
                    </div>
                </div>
            );
        }else{
            return <Loading className="page"/>;
        }
    }
}

const FieldWrapper = createForm({
    mapPropsToFields(props){
        console.log('mapPropsToFields', props);
        return {
            username: props.initData.data.username,
            email: props.initData.data.email
        }
    },
    onFieldsChange(props, fields){
        console.log('onFieldsChange', fields);
        props.saveFieldEntry(fields);
    }
})(FieldCase);


export default Template({
    id: 'inputItem',
    component: FieldWrapper,
    url: '/data/field.json',
    actionName: 'fetchFieldPosts',
    dataName: 'fieldData'
});
