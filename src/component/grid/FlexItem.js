/**
 * Created by jibin on 17/11/22.
 */

import React, {Component} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class FlexItem extends Component {
    static defaultProps = {
        prefixCls: 'pb-flexbox'
    };

    static PropTypes = {
        prefixCls: PropTypes.string,
        className: PropTypes.string
    };

    render(){
        const {prefixCls, className, style, children, ...restProps} = this.props;
        const flexItemCls = classNames({
            [`${prefixCls}-item`]: true,
            [className]: !!className
        });

        return (
            <div className={flexItemCls} style={style} {...restProps}>
                {children}
            </div>
        );
    }
}

export default FlexItem;