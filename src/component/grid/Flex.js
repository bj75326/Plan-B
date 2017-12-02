/**
 * Created by jibin on 17/11/22.
 */

import React, {Component} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Item from './FlexItem';

import '../../style/flex.css';

class Flex extends Component {
    static Item = Item;

    static defaultProps = {
        prefixCls: 'pb-flexbox',
        direction: 'row',
        wrap: 'nowrap',
        justify: 'start',
        align: 'center',
        alignContent: 'start',
    };

    static PropTypes = {
        prefixCls: PropTypes.string,
        direction: PropTypes.string,
        wrap: PropTypes.string,
        justify: PropTypes.string,
        align: PropTypes.string,
        alignContent: PropTypes.string,
    };

    render(){
        const {prefixCls, style, className, direction, wrap, justify, align, alignContent, children, ...restProps} = this.props;

        const flexWrapperCls = classNames({
            [prefixCls]: true,
            [className]: !!className,

            //direction
            [`${prefixCls}-dir-row`]: direction === 'row',
            [`${prefixCls}-dir-row-reverse`]: direction === 'row-reverse',
            [`${prefixCls}-dir-column`]: direction === 'column',
            [`${prefixCls}-dir-column-reverse`]: direction === 'column-reverse',

            //wrap
            [`${prefixCls}-nowrap`]: wrap === 'nowrap',
            [`${prefixCls}-wrap`]: wrap === 'wrap',
            [`${prefixCls}-wrap-reverse`]: wrap === 'wrap-reverse',

            //justify-content
            [`${prefixCls}-justify-start`]: justify === 'start',
            [`${prefixCls}-justify-end`]: justify === 'end',
            [`${prefixCls}-justify-center`]: justify === 'center',
            [`${prefixCls}-justify-between`]: justify === 'between',
            [`${prefixCls}-justify-around`]: justify === 'around',

            //align-items
            [`${prefixCls}-align-start`]: align === 'start',
            [`${prefixCls}-align-end`]: align === 'end',
            [`${prefixCls}-align-center`]: align === 'center',
            [`${prefixCls}-align-baseline`]: align === 'baseline',
            [`${prefixCls}-align-stretch`]: align === 'stretch',

            //align-content
            [`${prefixCls}-align-content-start`]: alignContent === 'start',
            [`${prefixCls}-align-content-end`]: alignContent === 'end',
            [`${prefixCls}-align-content-center`]: alignContent === 'center',
            [`${prefixCls}-align-content-between`]: alignContent === 'between',
            [`${prefixCls}-align-content-around`]: alignContent === 'around',
            [`${prefixCls}-align-content-stretch`]: alignContent === 'stretch'

        });

        return (
            <div className={flexWrapperCls} style={style} {...restProps}>
                {children}
            </div>
        );
    }
}

export default Flex;