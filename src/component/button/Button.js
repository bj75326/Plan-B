/**
 * Created by jibin on 17/11/27.
 */

import React, {Component} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import TouchFeedback from '../common/touchFeedback';
import ReverseSnake from '../common/reverseSnake';

import FontAwesome from 'react-fontawesome';
import Tool from '../../config/Tool';

import '../../style/button.css';

const isTwoCNChar  = (str) => {
    return /^[\u4e00-\u9fa5]{2}$/.test(str);
};

const autoInsertSpace = child => {
    if(Tool.isString(child.type) && isTwoCNChar(child.props.children)){
        return React.cloneElement(child, {}, child.props.children.split('').join(' '));
    }
    if(Tool.isString(child) && isTwoCNChar(child)){
        return <span>{child.split('').join(' ')}</span>;
    }
    return child;
};

class Button extends Component {

    static defaultProps = {
        prefixCls: 'pb-button',
        activeStyle: {},
        size: 'normal',
        type: '',
        disabled: false,
        loading: false,
        inline: false,
    };

    static PropTypes = {
        prefixCls: PropTypes.string,
        className: PropTypes.string,
        style: PropTypes.object,
        activeClassName: PropTypes.string,
        activeStyle: PropTypes.object,
        size: PropTypes.oneOf(['normal', 'small', 'mini']),
        type: PropTypes.oneOf(['ghost', 'primary', 'warning']),
        disabled: PropTypes.bool,
        loading: PropTypes.bool,
        inline: PropTypes.bool,
    };

    render(){
        const {
            prefixCls, style, className, activeClassName, activeStyle,
            size, type, disabled, onClick, loading, inline, icon,
            children, ...restProps
        } = this.props;

        const iconType = loading ?  'loading' : icon;
        //icon 可以是ReactElement或者string
        let iconEl;
        if(iconType === 'loading'){
            iconEl = <ReverseSnake className={`${prefixCls}-icon-loading`}/>;
        }else if(typeof iconType === 'string'){
            iconEl = <FontAwesome name={iconType} className={`${prefixCls}-font-icon`}/>;
        }else if(typeof iconType === 'object'){
            iconEl = iconType;
        }

        const kids = React.Children.map(children, autoInsertSpace);

        const btnWrapCls = classNames({
            [prefixCls]: true,
            [className]: !!className,
            [`${prefixCls}-primary`]: type === 'primary',
            [`${prefixCls}-ghost`]: type === 'ghost',
            [`${prefixCls}-warning`]: type === 'warning',
            [`${prefixCls}-small`]: size === 'small',
            [`${prefixCls}-mini`]: size === 'mini',
            [`${prefixCls}-inline`]: inline,
            [`${prefixCls}-disabled`]: disabled,
            [`${prefixCls}-icon`]: loading || !!icon

        });

        return (
            <TouchFeedback disabled={disabled} activeClassName={activeClassName || `${prefixCls}-active`}
                activeStyle={activeStyle}
            >
                <a role="button"
                    className={btnWrapCls}
                    style={style}
                    onClick={disabled ? null : onClick}
                    aria-disabled={disabled}
                    {...restProps}
                >
                    {iconEl}
                    {kids}
                </a>
            </TouchFeedback>
        );

    }
}

export default Button;
