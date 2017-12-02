/**
 * Created by jibin on 17/11/23.
 */

import React, {Component}from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import '../../style/wingBlank.css';

class WingBlank extends Component {

    static defaultProps = {
        prefixCls: 'pb-wing-blank',
        /* sm || md || lg */
        size: 'lg',
    };

    static PropTypes = {
        prefixCls: PropTypes.string,
        size: PropTypes.string,
        className: PropTypes.string,
    };

    render(){
        const {prefixCls, className, style, size, children, ...restProps} = this.props;
        const wingBlankCls = classNames({
            [prefixCls]: true,
            [`${prefixCls}-${size}`]: true,
            [className]: !!className
        });

        return (
            <div className={wingBlankCls} style={style} {...restProps}>{children}</div>
        );
    }
}

export default WingBlank;