/**
 * Created by jibin on 17/10/17.
 */

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import CustomKeyboard from './CustomKeyboard';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Tool from '../../config/Tool';

const noop = ()=>{};

const IS_REACT_16 = !!ReactDOM.createPortal;

class CustomInput extends Component {
    constructor(props){
        super(props);

        this.state = {
            focused: false,
            value: props.value || ''
        };

        this.onFakeInputClick = this.onFakeInputClick.bind(this);
        this.doBlur = this.doBlur.bind(this);
        this.saveRef = this.saveRef.bind(this);
        this.onKeyboardClick = this.onKeyboardClick.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    static defaultProps = {
        onChange: noop,
        onFocus: noop,
        onBlur: noop,
        placeholder: '',
        value: '',
        disabled: false,
        editable: true,
        prefixCls: 'pb-input',
        prefixFakeInputCls: 'pb-fake-input',
        keyboardPrefixCls: 'pb-number-keyboard'
    };

    static PropTypes = {
        onChange: PropTypes.func,
        onFocus: PropTypes.func,
        onBlur: PropTypes.func,
        placeholder: PropTypes.string,
        disabled: PropTypes.bool,
        editable: PropTypes.bool,
        maxLength: PropTypes.number,
        moneyKeyboardAlign: PropTypes.string,
    };

    componentWillReceiveProps(nextProps){
        if('value' in nextProps){
            this.setState({
                value: nextProps.value
            });
        }
    }

    componentDidMount(){
        if(!IS_REACT_16 && !window.customKeyboard){
            this.renderCustomKeyboard();
        }
    }

    componentWillUnmount(){
        if(this.state.focus){
            this.props.onBlur(this.state.value);
        }
        this.unLinkInput();
    }

    unLinkInput(){
        const customKeyboard = window.customKeyboard;
        if(customKeyboard.linkedInput === this){
            customKeyboard.linkedInput = null;
            Tool.addClass(customKeyboard.keyboard, `${this.props.keyboardPrefixCls}-wrapper-hide`);
        }
        this.removeBlurListener();
    }

    renderCustomKeyboard(){
        if(!this.container){
            window.customKeyboard = ReactDOM.unstable_renderSubtreeIntoContainer(
                this, this.getComponent(), this.getContainer()
            );
        }
    }

    getComponent(){
        const { keyboardPrefixCls } = this.props;
        return (
            <CustomKeyboard
                ref={this.saveRef}
                onClick={this.onKeyboardClick}
                prefixCls={keyboardPrefixCls}
            />
        );
    }

    onChange(value){
        //value: {target: {
        //          value
        //       }
        // }
        if(!('value' in this.props)){
            this.setState({value: value.target.value});
        }
        this.props.onChange(value);
    }

    onKeyboardClick(KeyboardItemValue){
        const {maxLength, keyboardPrefixCls} = this.props;
        const {value} = this.state;
        const {onChange} = this;

        let valueAfterChange;

        if(KeyboardItemValue === 'delete'){
            //删除键
            valueAfterChange = value.substring(0, value.length-1);
            onChange({target: {value: valueAfterChange}});
        }else if(KeyboardItemValue === 'confirm'){
            //确认键
            valueAfterChange = value;
            onChange({target: {value: valueAfterChange}});
            this.onInputBlur(valueAfterChange);
        }else if(KeyboardItemValue === 'hide'){
            //隐藏键盘
            valueAfterChange = value;
            this.onInputBlur(valueAfterChange);
        }else {
            if(maxLength !== undefined && +maxLength >= 0 && (value + KeyboardItemValue).length > maxLength){
                valueAfterChange = (value + KeyboardItemValue).substr(0, maxLength);
                onChange({target: {value: valueAfterChange}});
            }else{
                valueAfterChange = value + KeyboardItemValue;
                onChange({target: {value: valueAfterChange}});
            }
        }

        const customKeyboard = window.customKeyboard;
        customKeyboard.confirmDisabled = (valueAfterChange === '');

        if(valueAfterChange === ''){
            Tool.addClass(customKeyboard.confirmKeyboardItem, `${keyboardPrefixCls}-item-disabled`);
        }else{
            Tool.removeClass(customKeyboard.confirmKeyboardItem, `${keyboardPrefixCls}-item-disabled`);
        }

    }

    saveRef(el){
        if(IS_REACT_16){
            window.customKeyboard = el;
        }
    }

    getContainer(){
        const {keyboardPrefixCls} = this.props;
        let container = document.querySelector(`#${keyboardPrefixCls}-container`);
        if(!container){
            container = document.createElement('div');
            container.setAttribute('id', `${keyboardPrefixCls}-container`);
            document.body.appendChild(container);
        }
        this.container = container;
        return container;
    }

    onInputBlur(value){
        const {focused} = this.state;
        if(focused){
            this.setState({focused: false});
            this.props.onBlur(value);
            setTimeout(()=>{
                this.unLinkInput();
            }, 50);
        }
    }

    onInputFocus(){
        const {value} = this.state;
        this.props.onFocus(value);
        this.setState({
            focused: true
        }, ()=>{
            const customKeyboard = window.customKeyboard;
            customKeyboard.linkedInput = this;
            Tool.removeClass(customKeyboard.keyboard, `${this.props.keyboardPrefixCls}-wrapper-hide`);
            customKeyboard.confirmDisabled = (value === '');
            if(value===''){
                Tool.addClass(customKeyboard.confirmKeyboardItem, `${this.props.keyboardPrefixCls}-item-disabled`);
            }else{
                Tool.removeClass(customKeyboard.confirmKeyboardItem, `${this.props.keyboardPrefixCls}-item-disabled`);
            }
        });
    }

    doBlur(e){
        console.log('doBlur');
        const {value} = this.state;
        if(e.target !== this.inputRef){
            this.onInputBlur(value);
        }
    }

    addBlurListener(){
        document.addEventListener('click', this.doBlur, false);
    }

    removeBlurListener(){
        document.removeEventListener('click', this.doBlur, false);
    }

    onFakeInputClick(){
        this.focus();
    }

    focus(){
        this.removeBlurListener();
        const {focused} = this.state;
        if(!focused){
            this.onInputFocus();
        }
        setTimeout(()=>{
            this.addBlurListener();
        }, 50);
    }

    render(){
        const {placeholder, disabled, editable, moneyKeyboardAlign, prefixFakeInputCls} = this.props;
        const {focused, value} = this.state;

        const preventKeyboard = disabled || !editable;

        const fakeInputContainerCls = classNames({
            [`${prefixFakeInputCls}-container`]: true,
            [`${prefixFakeInputCls}-container-left`]: moneyKeyboardAlign === 'left'
        });

        const fakeInputCls = classNames({
            [`${prefixFakeInputCls}`]: true,
            [`${prefixFakeInputCls}-focus`]: focused,
            [`${prefixFakeInputCls}-disabled`]: disabled
        });
        return (
            <div className={fakeInputContainerCls}>
                {value === '' && <div className={`${prefixFakeInputCls}-placeholder`}>{placeholder}</div>}
                <div
                    className={fakeInputCls}
                    ref={el=>this.inputRef = el}
                    onClick={preventKeyboard ? noop : this.onFakeInputClick}
                >{value}</div>
                {IS_REACT_16 && ReactDOM.createPortal(this.getComponent(), this.getContainer())}
            </div>
        );
    }

}

export default CustomInput;