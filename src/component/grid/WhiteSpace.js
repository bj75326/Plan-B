/**
 * Created by jibin on 17/11/22.
 */

import React, {Component} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import '../../style/whiteSpace.css';

class WhiteSpace extends Component {

    static defaultProps = {
        prefixCls: 'pb-white-space',
        /* xs || sm || md || lg || xl */
        size: 'md'
    };

    static PropTypes = {
        prefixCls: PropTypes.string,
        className: PropTypes.string,
        size: PropTypes.string,
    };

    render(){

        const {prefixCls, className, style, size, onClick, ...restProps} = this.props;
        const whiteSpaceCls = classNames({
            [prefixCls]: true,
            [`${prefixCls}-${size}`]: true,
            [className]: !!className
        });

        return (
            <div className={whiteSpaceCls} style={style} onClick={onClick} {...restProps}/>
        );
    }
}

export default WhiteSpace;