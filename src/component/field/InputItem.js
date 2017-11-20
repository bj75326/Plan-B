/**
 * Created by jibin on 17/10/16.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Input from './Input';
import CustomInput from './CustomInput';

import FontAwesome from 'react-fontawesome';

import OsxSpinner from '../common/osxSpinner';

import '../../style/input.css';

const noop = ()=>{};

const fixControlledValue = value => {
    if(typeof value === 'undefined' || value === null){
        return '';
    }else{
        return value;
    }
};

class InputItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            placeholder: props.placeholder,
            value: props.value || props.defaultValue || ''
        };

        this.onInputBlur = this.onInputBlur.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.onInputFocus = this.onInputFocus.bind(this);
        this.clearInput = this.clearInput.bind(this);
        this.onExtraClick = this.onExtraClick.bind(this);
        this.onErrorClick = this.onErrorClick.bind(this);
    }

    static defaultProps = {
        prefixCls: 'pb-input',
        type: 'text', //
        editable: true,
        disabled: false,
        placeholder: '',
        clear: false,
        onChange: noop,
        onFocus: noop,
        onBlur: noop,

        extra: '',
        onExtraClick: noop,
        errors: null,
        onErrorClick: noop,
        updatePlaceholder: false,

        validateIndicator: false,

        moneyKeyboardAlign: 'right',
    };

    static Proptypes = {
        prefixCls: PropTypes.string,
        type: PropTypes.string,
        editable: PropTypes.bool,
        disabled: PropTypes.bool,
        placeholder: PropTypes.string,
        clear: PropTypes.bool,
        extra: PropTypes.any,
        onExtraClick: PropTypes.func,
        onErrorClick: PropTypes.func,

        updatePlaceholder: PropTypes.bool,

        isFieldValidating: PropTypes.bool,
        validateIndicator: PropTypes.bool,

        moneyKeyboardAlign: PropTypes.string,
    };

    componentWillUnmount(){
        if(this.debounceTimeout){
            clearTimeout(this.debounceTimeout);
            this.debounceTimeout = null;
        }
        if(this.scrollIntoViewTimeout){
            clearTimeout(this.scrollIntoViewTimeout);
            this.scrollIntoViewTimeout = null;
        }
    }

    componentWillReceiveProps(nextProps){
        if('placeholder' in nextProps && !nextProps.updatePlaceholder){
            this.setState({
                placeholder: nextProps.placeholder
            });
        }
        if('value' in nextProps){
            this.setState({
                value: nextProps.value
            });
        }
    }

    //直接注入子组件进行事件绑定
    onInputChange(e){
        let value = e.target.value;
        const {onChange, type} = this.props;

        switch(type){
            case 'text':
                break;
            case 'bankCard':
                value = value.replace(/\D/g, '').replace(/(....)(?=.)/g, '$1 ');
                break;
            case 'phone':
                value = value.replace(/\D/g, '').substring(0, 11);
                const valueLen = value.length;
                if(valueLen > 3 && valueLen < 8){
                    value = `${value.substr(0, 3)} ${value.substr(3)}`;
                }else if(valueLen > 8){
                    value = `${value.substr(0, 3)} ${value.substr(3, 4)} ${value.substr(7)}}`;
                }
                break;
            case 'number':
                value = value.replace(/\D/g, '');
                break;
            case 'password':
                break;
            default:
                break;
        }

        if(!('value' in this.props)){
            this.setState({
                value
            });
        }else{
            this.setState({
                value: this.props.value
            });
        }

        if(onChange){
            onChange(value);
        }
    }

    onInputFocus(value){
        if(this.debounceTimeout){
            clearTimeout(this.debounceTimeout);
            this.debounceTimeout = null;
        }
        this.setState({
            focused: true
        });

        if(document.activeElement.tagName.toLowerCase() === 'input'){
            //scrollIntoView
        }

        if(this.props.onFocus){
            this.props.onFocus(value);
        }
    }

    onInputBlur(value){
        //防抖动优化
        this.debounceTimeout = setTimeout(()=>{
            this.setState({
                focused: false
            });
        }, 200);
        if(this.props.onBlur){
            this.props.onBlur(value);
        }
    }

    clearInput(){
        if(this.props.type !== 'password' && this.props.updatePlaceholder){
            this.setState({
                placeholder: this.props.value
            });
        }
        this.setState({
            value: ''
        });

        if(this.props.onChange){
            this.props.onChange('');
        }
        this.focus();
    }

    onExtraClick(e){
        if(this.props.onExtraClick){
            this.props.onExtraClick(e);
        }
    }

    onErrorClick(e){
        if(this.props.onErrorClick){
            this.props.onErrorClick(e);
        }
    }

    focus(){
        this.inputRef.focus();
    }

    render(){
        const {prefixCls, style, className, editable, errors, clear, type, onExtraClick, onErrorClick, extra,
            updatePlaceholder, moneyKeyboardAlign, isFieldValidating, validateIndicator, ...restProps} = this.props;
        const {defaultValue, name, disabled, maxLength} = restProps;

        const {placeholder, focused} = this.state;
        const {value} = this.state;
        //console.log('value', value);
        const inputItemClassName = classNames({
            [prefixCls]: true,
            [className]: !!className,
            [`${prefixCls}-disabled`]: disabled,
            [`${prefixCls}-focus`]: focused,
            [`${prefixCls}-errors`]: errors
        });

        let inputType;
        switch(type){
            case 'bankCard':
                inputType = 'tel'; //拨号键盘
                break;
            case 'phone':
                inputType = 'tel'; //拨号键盘
                break;
            case 'password':
                inputType = 'password'; //密码
                break;
            case 'digit':
                inputType = 'number'; //数字键盘
                break;
            default:
                inputType = type;
        }

        let valueProps;
        if('value' in this.props){
            valueProps = {
                value: fixControlledValue(value)
            };
        }else {
            valueProps = {
                defaultValue
            }
        }
        //console.log('valueProps', valueProps);
        //console.log('props.value', this.props.value);
        let patternProps;
        if(type === 'number'){
            patternProps = {
                pattern: '[0-9]*'
            };
        }

        //warning or error
        //'warning message 应该以"warning"开头 '
        let warning = false;
        if(errors && errors.length > 0){
            const warnings = errors.filter(error => error.slice(0, 7)==='warning');
            warning = warnings.length === errors.length ;
        }

        return (
            <div className={inputItemClassName}>
                {type !== 'money' ? (
                    <Input
                        {...patternProps}
                        {...restProps}
                        {...valueProps}
                        ref={el => this.inputRef = el}
                        style={style}
                        type={inputType}
                        maxLength={maxLength}
                        name={name}
                        placeholder={placeholder}
                        onChange={this.onInputChange}
                        onFocus={this.onInputFocus}
                        onBlur={this.onInputBlur}
                        readOnly={!editable}
                        disabled={disabled}
                    />
                ) : (
                    <CustomInput
                        type={type}
                        ref={el => this.inputRef = el}
                        style={style}
                        maxLength={maxLength}
                        placeholder={placeholder}
                        onChange={this.onInputChange}
                        onFocus={this.onInputFocus}
                        onBlur={this.onInputBlur}
                        prefixCls={prefixCls}
                        value={fixControlledValue(value)}
                        disabled={disabled}
                        editable={editable}
                        moneyKeyboardAlign={moneyKeyboardAlign}
                    />
                )}
                {clear && editable && !disabled && (value && value.length > 0) && focused ? (
                    <div className={`${prefixCls}-clear`} onClick={this.clearInput}>
                        <FontAwesome name="times-circle"/>
                    </div>
                ) : null}

                {validateIndicator ? (
                    isFieldValidating ? <OsxSpinner className={`${prefixCls}-spinner`}/> : [
                        !errors && editable && !disabled && (value && value.length > 0) && !focused ? (
                            <div className={`${prefixCls}-success`}>
                                <FontAwesome name="check-circle"/>
                            </div>
                        ) : null,
                        warning ? <div className={`${prefixCls}-warning`}><FontAwesome name="exclamation-triangle"/></div> : null,
                        errors && !warning ? <div className={`${prefixCls}-error`}><FontAwesome name="exclamation-circle"/></div> : null
                    ]
                ) : null}

                {extra !=='' ? <div className={`${prefixCls}-extra`} onClick={this.onExtraClick}>{extra}</div> : null}
            </div>
        );
    }

}

export default InputItem;