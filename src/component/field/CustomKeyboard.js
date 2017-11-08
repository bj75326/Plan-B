/**
 * Created by jibin on 17/10/18.
 */

import React, {Component} from 'react';
import TouchFeedback from '../common/feedback';
import classNames from 'classnames';

class CustomKeyboard extends Component {
    constructor(props){
        super(props);
        this.onKeyboardClick = this.onKeyboardClick.bind(this);
    }

    defaultProps = {
        prefixCls: 'pb-number-keyboard'
    };

    onKeyboardClick(e, value){
        e.nativeEvent.stopImmediatePropagation();
        if(value==='confirm' && this.confirmDisabled){
            return null;
        }else{
            if(this.linkedInput){
                this.linkedInput.onKeyboardClick(value);
            }
        }
    }

    renderKeyboardItem(item, index){
        return (
            <KeyboardItem onClick={this.onKeyboardClick} key={`item-${item}-${index}`}>{item}</KeyboardItem>
        );
    }

    render(){
        const {prefixCls} = this.props;
        const wrapperCls = classNames({
            [`${prefixCls}-wrapper`]: true,
            [`${prefixCls}-wrapper-hide`]: true
        });

        return (
            <div className={wrapperCls} ref={el=>this.keyboard=el}>
                <table>
                    <tbody>
                        <tr>
                            {['1', '2', '3'].map((item, index)=>{return this.renderKeyboardItem(item, index);})}
                            <KeyboardItem className="keyboard-delete" rowSpan={2} onClick={this.onKeyboardClick}/>
                        </tr>
                        <tr>
                            {['4', '5', '6'].map((item, index)=>{return this.renderKeyboardItem(item, index);})}
                        </tr>
                        <tr>
                            {['7', '8', '9'].map((item, index)=>{return this.renderKeyboardItem(item, index);})}
                            <KeyboardItem className="keyboard-confirm" rowSpan={2} onClick={this.onKeyboardClick}
                                withRef={el=>this.confirmKeyboardItem=el}
                            >确定</KeyboardItem>
                        </tr>
                        <tr>
                            {['.', '0'].map((item, index)=>{return this.renderKeyboardItem(item, index);})}
                            <KeyboardItem className="keyboard-hide" onClick={this.onKeyboardClick}/>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export class KeyboardItem extends Component {
    constructor(props){
        super(props);
    }

    static defaultProps = {
        prefixCls: 'pb-number-keyboard',
        onClick: ()=>{},
        disabled: false
    };

    render(){
        const {prefixCls, className, onClick, disabled, children, withRef, ...restProps} = this.props;

        let value = children;
        if(className == "keyboard-delete"){
            value = 'delete';
        }else if(className == "keyboard-confirm"){
            value = 'confirm';
        }else if(className == "keyboard-hide"){
            value = 'hide';
        }
        const wrapperCls = classNames({
            [`${prefixCls}-item`]: true,
            [className]: true
        });
        return (
            <td ref={withRef} onClick={e=>onClick(e, value)} className={wrapperCls} {...restProps}>{children}</td>
        );
    }

}

export default CustomKeyboard;