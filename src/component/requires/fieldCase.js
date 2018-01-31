/**
 * Created by jibin on 17/10/16.
 */

import React, {Component} from 'react';
import Template from '../common/template';
import {createForm} from 'rc-form';
import Loading from '../common/loading';
import CellGroup from '../cell/CellGroup';
import PropTypes from 'prop-types';
import Config from '../../config/Config';
import fetch from 'isomorphic-fetch';
import FontAwesome from 'react-fontawesome';
import Tool from '../../config/Tool';
import BreadCrumb from '../common/breadCrumb';

import InputItem from '../field/InputItem';

//plan-b的field组件暂时将label从field组件中分离出来
const inputLabel = (text) => (
    <div className="pb-input-label">
        <span className="pb-input-text">{text}</span>
    </div>
);

const inputLabel2 = (text) => (
    <div className="pb-input-label-icon">
        <FontAwesome name={text}/>
    </div>
);
//disabled 使用
const inputLabel3 = (text) => (
    <div className="pb-input-label pb-input-disabled">
        <span className="pb-input-text">{text}</span>
    </div>
);

const renderExtra = (extra) => (
    <FontAwesome name={extra}/>
);

const routes = [{
    path: '/',
    breadcrumbName: <FontAwesome name="home"/>
}, {
    path: '/Field',
    breadcrumbName: 'Field'
}];

class FieldCase extends Component {
    constructor(props){
        super(props);

        this.state = {
            //只用于[password] extra click event
            showPassword: false
        };

        this.breadCrumbClick = this.breadCrumbClick.bind(this);
    }

    static PropTypes = {
        form: PropTypes.object
    };

    breadCrumbClick(){
        this.props.currentAnimation('right', Tool.getWindowScrollTop());
    }

    render(){
        const {initData} = this.props;
        const {data, isFetching} = initData;
        const {getFieldProps, getFieldError, isFieldValidating} = this.props.form;

        const {showPassword} = this.state;

        if(isFetching === false){

            return (
                <div className="page subpage">
                    <BreadCrumb routes={routes} param={{onClick: this.breadCrumbClick}}/>
                    <div className="viewport">
                        <CellGroup title="基本样式">
                            <CellGroup.Cell customTitle={true} className="field-cell no-feedback-cell">
                                {inputLabel("标题1")}
                                <InputItem {...getFieldProps('basic01')}
                                    placeholder="普通输入框"
                                />
                            </CellGroup.Cell>
                            <CellGroup.Cell customTitle={true} className="field-cell no-feedback-cell">
                                {inputLabel("标题2")}
                                <InputItem {...getFieldProps('basic02')}
                                    placeholder="带清除键的输入框"
                                    clear={true}
                                />
                            </CellGroup.Cell>
                        </CellGroup>
                        <CellGroup title="自定义输入框与键盘">
                            <CellGroup.Cell customTitle={true} className="field-cell no-feedback-cell">
                                {inputLabel("标题3")}
                                <InputItem {...getFieldProps('custom01', {
                                    normalize: (v, prev) => {
                                        if(v && !/^(([1-9]\d*)|0)(\.\d{0,2}?)?$/.test(v)){
                                            if(v === '.'){
                                                return '0.';
                                            }
                                            return prev;
                                        }
                                        return v;
                                    }
                                })}
                                    placeholder="输入内容从左向右"
                                    clear={true}
                                    type="money"
                                    moneyKeyboardAlign="left"
                                />
                            </CellGroup.Cell>
                            <CellGroup.Cell customTitle={true} className="field-cell no-feedback-cell">
                                {inputLabel("标题4")}
                                <InputItem {...getFieldProps('custom02', {
                                    normalize: (v, prev) => {
                                        if(v && !/^(([1-9]\d*)|0)(\.\d{0,2}?)?$/.test(v)){
                                            if(v === '.'){
                                                return '0.';
                                            }
                                            return prev;
                                        }
                                        return v;
                                    }
                                })}
                                    placeholder="输入内容从右向左"
                                    clear={true}
                                    type="money"
                                />
                            </CellGroup.Cell>
                        </CellGroup>
                        <CellGroup title="内容格式化">
                            <CellGroup.Cell customTitle={true} className="field-cell no-feedback-cell">
                                {inputLabel("银行卡号")}
                                <InputItem {...getFieldProps('format01')}
                                    placeholder="xxxx xxxx xxxx xxxx"
                                    clear={true}
                                    type="bankCard"
                                />
                            </CellGroup.Cell>
                            <CellGroup.Cell customTitle={true} className="field-cell no-feedback-cell">
                                {inputLabel("手机号码")}
                                <InputItem {...getFieldProps('format02')}
                                    placeholder="xxx xxxx xxxx"
                                    clear={true}
                                    type="phone"
                                />
                            </CellGroup.Cell>
                            <CellGroup.Cell customTitle={true} className="field-cell no-feedback-cell">
                                {inputLabel("数字")}
                                <InputItem {...getFieldProps('format03')}
                                    placeholder="请输入数字"
                                    clear={true}
                                    type="number"
                                />
                            </CellGroup.Cell>
                            <CellGroup.Cell customTitle={true} className="field-cell no-feedback-cell">
                                {inputLabel("密码")}
                                <InputItem {...getFieldProps('format04')}
                                    placeholder="请输入密码"
                                    clear={true}
                                    type={showPassword ? "text" : "password"}
                                    extra={showPassword ?  renderExtra("eye-slash") : renderExtra("eye")}
                                    onExtraClick={()=>{
                                        this.setState({
                                            showPassword: !showPassword
                                        });
                                    }}
                                />
                            </CellGroup.Cell>
                        </CellGroup>
                        <CellGroup title="label样式">
                            <CellGroup.Cell customTitle={true} className="field-cell no-feedback-cell">
                                {inputLabel2("user")}
                                <InputItem {...getFieldProps('label1')} placeholder="用户名"/>
                            </CellGroup.Cell>
                            <CellGroup.Cell customTitle={true} className="field-cell no-feedback-cell">
                                {inputLabel2("lock")}
                                <InputItem {...getFieldProps('label2')} placeholder="密码"/>
                            </CellGroup.Cell>
                        </CellGroup>
                        <CellGroup title="禁用与只读模式">
                            <CellGroup.Cell customTitle={true} className="field-cell no-feedback-cell">
                                {inputLabel("姓名[禁用]")}
                                <InputItem {...getFieldProps('disabledField')} disabled={true}
                                    placeholder="请输入姓名"
                                />
                            </CellGroup.Cell>
                            <CellGroup.Cell customTitle={true} className="field-cell no-feedback-cell">
                                {inputLabel("姓名[只读]")}
                                <InputItem {...getFieldProps('readOnlyField')} editable={false}
                                    placeholder="请输入姓名"
                                />
                            </CellGroup.Cell>
                            <CellGroup.Cell customTitle={true} className="field-cell no-feedback-cell">
                                {inputLabel("金额[禁用]")}
                                <InputItem {...getFieldProps('disabledAmount', {
                                    normalize: (v, prev) => {
                                        if(v && !/^(([1-9]\d*)|0)(\.\d{0,2}?)?$/.test(v)){
                                            if(v === '.'){
                                                return '0.';
                                            }
                                            return prev;
                                        }
                                        return v;
                                    }
                                })}
                                    disabled={true}
                                    type="money"
                                    placeholder="请输入金额"
                                />
                            </CellGroup.Cell>
                        </CellGroup>
                        <CellGroup title="表单内容验证（async-validator）" style={{marginBottom: "42px"}}>
                            <CellGroup.Cell customTitle={true} className="field-cell no-feedback-cell">
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
                                           validateIndicator={true}
                                />
                            </CellGroup.Cell>
                            <CellGroup.Cell customTitle={true} className="field-cell no-feedback-cell">
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
                                           validateIndicator={true}
                                />
                            </CellGroup.Cell>
                        </CellGroup>
                    </div>
                </div>
            );
        }else{
            return <Loading className="page subpage"/>;
        }
    }
}

const FieldWrapper = createForm({
    mapPropsToFields(props){
        console.log('mapPropsToFields', props);
        return {
            username: props.initData.data.username,
            email: props.initData.data.email,
            disabledField: props.initData.data.disabledField,
            readOnlyField: props.initData.data.readOnlyField,
            disabledAmount: props.initData.data.disabledAmount,
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
