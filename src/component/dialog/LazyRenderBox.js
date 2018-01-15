/**
 * Created by jibin on 2017/12/30.
 */

import React from 'react';
import PropTypes from 'prop-types';

class LazyRenderBox extends React.Component {

    static defaultProps = {
        visible: false,
        hiddenClassName: ''
    };

    static PropTypes = {
        className: PropTypes.string,
        hiddenClassName: PropTypes.string,
        visible: PropTypes.bool,
        style: PropTypes.object,
        role: PropTypes.string,
    };

    shouldComponentUpdate(nextProps){
        return !!nextProps.hiddenClassName || !!nextProps.visible;
    }

    render(){
        const {hiddenClassName, visible, ...rest} = this.props;
        let {className} = this.props;
        if(!!hiddenClassName && !visible){
            className += ` ${hiddenClassName}`;
        }
        rest.className = className;
        return <div {...rest}/>;
    }
}

export default LazyRenderBox;
