/**
 * Created by jibin on 17/10/24.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class TouchFeedBack extends Component{
    constructor(props){
        super(props);
        this.state = {
            active: false
        };

        this.onTouchStart = this.onTouchStart.bind(this);
        this.onTouchMove = this.onTouchMove.bind(this);
        this.onTouchEnd = this.onTouchEnd.bind(this);
        this.onTouchCancel = this.onTouchCancel.bind(this);
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }

    static defaultProps = {
        disabled: false,
    };

    static PropTypes = {
        disabled: PropTypes.bool,
        activeClassName: PropTypes.string,
        activeStyle: PropTypes.object,
        onTouchStart: PropTypes.func,
        onTouchMove: PropTypes.func,
        onTouchEnd: PropTypes.func,
        onTouchCancel: PropTypes.func,
        onMouseDown: PropTypes.func,
        onMouseUp: PropTypes.func,
        onMouseLeave: PropTypes.func,
    };

    componentDidUpdate(){
        if(this.props.disabled && this.state.active){
            this.setState({
                active: false
            });
        }
    }

    triggerEvent(type, isActive, ev){
        const eventType = `on${type}`;
        if(this.props[eventType]){
            this.props[eventType](ev);
        }

        this.setState({
            active: isActive
        });
    }

    onTouchStart(e){
        this.triggerEvent('TouchStart', true, e);
    }

    onTouchMove(e){
        this.triggerEvent('TouchMove', false, e);
    }

    onTouchEnd(e){
        this.triggerEvent('TouchEnd', false, e);
    }

    onTouchCancel(e){
        this.triggerEvent('TouchCancel', false, e);
    }

    //pc
    onMouseDown(e){
        if(this.props.onTouchStart){
            this.triggerEvent('TouchStart', true, e);
        }
        this.triggerEvent('MouseDown', true, e);
    }

    onMouseUp(e){
        if(this.props.onTouchEnd){
            this.triggerEvent('TouchEnd', false, e);
        }
        this.triggerEvent('MouseEnd', false, e);
    }

    onMouseLeave(e){
        this.triggerEvent('MouseLeave', false, e);
    }

    combineEventListener(child, eventType){
        if(typeof child.props[eventType] === 'function'){
            const eventListener = function(e){
                child.props[eventType].call(null, e);
                this[eventType](e);
            };
            return eventListener.bind(this);
        }
        return this[eventType];
    }

    render(){
        const {disabled, activeClassName, activeStyle, children} = this.props;

        const child = React.Children.only(children);

        const events = disabled ? undefined : {
            onTouchStart: this.combineEventListener(child, 'onTouchStart'),
            onTouchMove: this.combineEventListener(child, 'onTouchMove'),
            onTouchEnd: this.combineEventListener(child, 'onTouchEnd'),
            onTouchCancel: this.combineEventListener(child, 'onTouchCancel'),
            onMouseDown: this.combineEventListener(child, 'onMouseDown'),
            onMouseUp: this.combineEventListener(child, 'onMouseUp'),
            onMouseLeave: this.combineEventListener(child, 'onMouseLeave')
        };

        if(!disabled && this.state.active){
            let {style, className} = child.props;
            if(activeClassName){
                className = classNames({
                    [className]: !!className,
                    [activeClassName]: !!activeClassName
                });
            }
            if(activeStyle){
                style = {...style, ...activeStyle}
            }

            return React.cloneElement(child, {
                className,
                style,
                ...events
            });
        }

        return React.cloneElement(child, events);
    }
}

export default TouchFeedBack;