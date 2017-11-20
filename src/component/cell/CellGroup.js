/**
 * Created by jibin on 17/9/17.
 */

import React, {Component} from 'react';
import Cell from './Cell';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import '../../style/cell.css';

class CellGroup extends Component {
    constructor(props){
        super(props);

        this.state = {
            hasCellSwiped: false
        };

        this.changeCellGroupState = this.changeCellGroupState.bind(this);
    }

    static Cell = Cell;

    static defaultProps = {
        title: '',
        prefixCls: 'pb-cell'
    };

    static PropTypes = {
        prefixCls: PropTypes.string,
        className: PropTypes.string,
        title: PropTypes.String,
        children: PropTypes.any
    };

    changeCellGroupState(hasCellSwiped){
        this.setState({
            hasCellSwiped: hasCellSwiped
        });
    }

    render(){
        const {prefixCls, className, title, style, children, ...restProps} = this.props;
        const cellGroupClassName = classNames({
            [`${prefixCls}-group`]: !!prefixCls,
            [className]: !!className
        });

        const {hasCellSwiped} = this.state;

        return (
            <div className={cellGroupClassName} style={style} {...restProps}>
                <h5 className={`${prefixCls}-desc`}>{title}</h5>
                {children ? (<div className={`${prefixCls}-wrapper`}>
                    {React.Children.map(children, (child)=>{
                        return React.cloneElement(child, {
                            hasCellSwiped: hasCellSwiped,
                            changeCellGroupState: this.changeCellGroupState
                        });
                    })}
                </div>) : null}
            </div>
        );

    }
}

export default CellGroup;
