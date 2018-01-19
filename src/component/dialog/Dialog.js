/**
 * Created by jibin on 2017/12/29.
 */

import React from 'react';
import Animate from 'rc-animate';
import PropTypes from 'prop-types';
import LazyRenderBox from './LazyRenderBox';


class Dialog extends React.Component {
    constructor(props){
        super(props);

        this.onMaskClick = this.onMaskClick.bind(this);
        this.close = this.close.bind(this);
        this.onAnimateAppear = this.onAnimateAppear.bind(this);
        this.onAnimateLeave = this.onAnimateLeave.bind(this);
    }

    static defaultProps = {
        prefixCls: 'pb-dialog',
        className: '',
        maskCloseable: true,
        mask: true,
        visible: false,
    };

    static PropTypes = {
        prefixCls: PropTypes.string,
        className: PropTypes.string,
        style: PropTypes.object,
        zIndex: PropTypes.number,
        bodyStyle: PropTypes.object,

        wrapClassName: PropTypes.string,
        wrapStyle: PropTypes.object,
        wrapProps: PropTypes.object,

        animation: PropTypes.string,
        maskAnimation: PropTypes.string,
        transitionName: PropTypes.string,
        maskTransitionName: PropTypes.string,

        maskStyle: PropTypes.object,
        mask: PropTypes.bool,
        maskCloseable: PropTypes.bool,

        visible: PropTypes.bool,

        footer: PropTypes.node,
        header: PropTypes.node,
        closeable: PropTypes.bool,

        onAnimateLeave: PropTypes.func,
        afterClose: PropTypes.func,

    };

    componentWillUnmount(){
        document.body.style.overflow = '';
        if(this.wrapRef){
            this.wrapRef.style.display = 'none';
        }
    }

    close(e){
        if(this.props.onClose){
            this.props.onClose(e);
        }
    }

    onMaskClick(e){
        if(e.target === e.currentTarget){
            this.close(e);
        }
    }

    //z-index作为css属性在dialog组件中作为prop单独处理。
    getZIndexStyle(){
        const style = {};
        const zIndex = this.props.zIndex;
        if(typeof zIndex === 'number'){
            style.zIndex = zIndex;
        }
        return style;
    }

    getWrapStyle(){
        const wrapStyle = this.props.wrapStyle || {};
        return {...this.getZIndexStyle(), ...wrapStyle};
    }

    getMaskStyle(){
        const maskStyle = this.props.maskStyle || {};
        return {...this.getZIndexStyle(), ...maskStyle};
    }

    getTransitionName(){
        let transitionName = this.props.transitionName;
        const animation = this.props.animation;
        if(!transitionName && animation){
            transitionName = `${this.props.prefixCls}-${animation}`;
        }
        return transitionName;
    }

    getMaskTransitionName(){
        let transitionName = this.props.maskTransitionName;
        const animation = this.props.maskAnimation;
        if(!transitionName && animation){
            transitionName = `${this.props.prefixCls}-${animation}`;
        }
        return transitionName;
    }

    getMaskElement(){
        const {mask, prefixCls, visible} = this.props;
        let maskElement = null;
        if(mask){
            const maskTransition = this.getMaskTransitionName();
            //visible直接放在div中作为prop，在react@15中不被允许，使用LazyRenderBox包装
            maskElement = (
                <LazyRenderBox
                    style={this.getMaskStyle()}
                    key="mask-element"
                    className={`${prefixCls}-mask`}
                    hiddenClassName={`${prefixCls}-mask-hidden`}
                    visible={visible}
                />
            );

            if(maskTransition){
                maskElement = (
                    <Animate
                        key="mask"
                        showProp="visible"
                        transitionAppear
                        component=""
                        transitionName={maskTransition}
                    >
                        {maskElement}
                    </Animate>
                );
            }
        }
        return maskElement;
    }

    getDialogElement(){
        const {prefixCls, style, className, footer, header, closeable, children, bodyStyle, visible} = this.props;

        let footerEl;
        if(footer){
            footerEl = (
                <div className={`${prefixCls}-footer`} ref={el=>this.footerRef=el}>
                    {footer}
                </div>
            );
        }

        let headerEl;
        if(header){
            headerEl = (
                <div className={`${prefixCls}-header`} ref={el=>this.headerRef=el}>
                    {header}
                </div>
            );
        }

        let closerEl;
        if(closeable){
            closerEl = (
                <button onClick={this.close} className={`${prefixCls}-close`}>
                    <span className={`${prefixCls}-close-x`}/>
                </button>
            );
        }
        const transitionName = this.getTransitionName();
        const dialogElement = (
            <LazyRenderBox
                key="dialog-element"
                role="document"
                ref={el=>this.dialogRef=el}
                style={style || {}}
                visible={visible}
                className={`${prefixCls} ${className || ''}`}
            >
                <div className={`${prefixCls}-content`}>
                    {closerEl}
                    {headerEl}
                    <div
                        className={`${prefixCls}-body`}
                        style={bodyStyle}
                        ref={el=>this.bodyRef=el}
                    >
                        {children}
                    </div>
                    {footerEl}
                </div>
            </LazyRenderBox>
        );
        return (
            <Animate
                key="dialog"
                showProp="visible"
                transitionName={transitionName}
                component=""
                transitionAppear
                onAppear={this.onAnimateAppear}
                onLeave={this.onAnimateLeave}
            >
                {dialogElement}
            </Animate>
        );
    }

    onAnimateAppear(){
        document.body.style.overflow = 'hidden';
    }

    onAnimateLeave(){
        document.body.style.overflow = '';

        if(this.wrapRef){
            this.wrapRef.style.display = 'none';
        }

        if(this.props.onAnimateLeave){
            this.props.onAnimateLeave();
        }

        if(this.props.afterClose){
            this.props.afterClose();
        }
    }

    render(){
        const {prefixCls, wrapClassName, wrapProps, maskCloseable} = this.props;
        const style = this.getWrapStyle();
        return (
            <div>
                {this.getMaskElement()}
                <div
                    className={`${prefixCls}-wrapper ${wrapClassName || ''}`}
                    style={style}
                    ref={el=>this.wrapRef = el}
                    onClick={maskCloseable ? this.onMaskClick : undefined}
                    role='dialog'
                    {...wrapProps}
                >
                    {this.getDialogElement()}
                </div>
            </div>
        );
    }
}

export default Dialog;

