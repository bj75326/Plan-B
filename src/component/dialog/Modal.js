/**
 * Created by jibin on 2017/12/27.
 */

import React from 'react';
import PropTypes from 'prop-types';
import Dialog from './DialogWrapper';
import classNames from 'classnames';
import TouchFeedback from '../common/touchFeedback';

import '../../style/modal.css';

class Modal extends React.Component {
    constructor(props){
        super(props);
    }

    static defaultProps = {
        prefixCls: 'pb-modal',
        style: {},
        normal: true,
        animated: true,

        footer: [],
        operation: false,
        platform: 'ios',
    };

    static PropTypes = {
        prefixCls: PropTypes.string,
        className: PropTypes.string,
        style: PropTypes.object,

        normal: PropTypes.bool,
        animated: PropTypes.bool,

        wrapClassName: PropTypes.string,
        wrapProps: PropTypes.object,

        animation: PropTypes.string,
        maskAnimation: PropTypes.string,
        transitionName: PropTypes.string,
        maskTransitionName: PropTypes.string,


    };

    renderFooterButton(button, prefixCls, i){
        /**
         * {
         *  style: @string (default | cancel | destructive)
         *  onPress: @function
         *  text: @string
         * }
         */

        let buttonStyle = {};
        if(typeof button.style === 'string'){
            const styleMap = {
                'cancel': {},
                'default': {},
                'destructive': {color: 'red'},
                'theme': {color: '#f07c01'},
            };
            buttonStyle = styleMap[button.style] || {};
        }

        const onClickFn = function(e){
            e.preventDefault();
            if(typeof button.onPress === 'function'){
                button.onPress(e);
            }
        };

        return (
            <TouchFeedback activeClassName={`${prefixCls}-button-active`} key={i}>
                <a className={`${prefixCls}-button`} role="button" style={buttonStyle} onClick={onClickFn}>
                    {button.text || 'Button'}
                </a>
            </TouchFeedback>
        );
    }

    render(){
        const {prefixCls, className, style, wrapClassName, transitionName, maskTransitionName, footer=[],
        animated, normal, operation, platform, ...restProps} = this.props;

        const btnGroupClass = classNames({
            [`${prefixCls}-btn-group-${footer.length === 2 && !operation ? 'h' : 'v'}`] : true,
            [`${prefixCls}-btn-group-${operation ? 'operation' : 'normal'}`] : true
        });

        const footerDOM = footer.length ? (<div className={btnGroupClass} role="group">
            {footer.map((button, i)=> this.renderFooterButton(button, prefixCls, i))}
        </div>) : null;

        let transName;
        let maskTransName;
        if(animated){
            //暂时只有normal一种固定模式，后面根据应用情况随时添加。
            if(normal){
                transName = 'pb-zoom';
                maskTransName = 'pb-fade';
            }else{
                transName = transitionName;
                maskTransName = maskTransitionName;
            }
        }

        const wrapCls = classNames({
            [`${prefixCls}-wrapper-normal`] : !!normal,
            [wrapClassName]: !!wrapClassName
        });

        const cls = classNames({
            [`${prefixCls}`]: true,
            [className]: !!className,
            [`${prefixCls}-normal`]: !!normal,
            [`${prefixCls}-android`]: platform === 'android',
        });

        return (
            <Dialog
                {...restProps}
                prefixCls={prefixCls}
                className={cls}
                wrapClassName={wrapCls}
                transitionName={transName}
                maskTransitionName={maskTransName}
                style={style}
                footer={footerDOM}
            />
        );
    }
}

export default Modal;
