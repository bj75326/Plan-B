/**
 * Created by jibin on 17/9/15.
 */

import React, {Component} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class Notice extends Component{
    constructor(props){
        super(props);
        this.state = {
            shouldClose: false
        };
    }

    static defaultProps = {
        duration: 3000,
        prefixCls: 'pb-toast'
    };

    static PropTypes = {
        prefixCls: PropTypes.string,
        duration: PropTypes.number,
        content: PropTypes.any,
        onClose: PropTypes.func,
        position: PropTypes.string
    };

    componentDidMount(){
        if(this.props.duration > 0){
            this.closeTimer = setTimeout(()=>{
                //this.close();
            }, this.props.duration - 300);
        }
    }

    componentWillUnmount(){
        this.clearCloseTimer();
    }

    clearCloseTimer(){
        if(this.closeTimer){
            clearTimeout(this.closeTimer);
            this.closeTimer = null;
        }
    }

    close(){
        this.clearCloseTimer();
        this.setState({shouldClose: true});
        this.timer = setTimeout(()=>{
            if(this.props.onClose){
                this.props.onClose();
            }
            clearTimeout(this.timer);
        }, 300);
    }

    render(){
        console.log('notice render');
        const {shouldClose} = this.state;
        const {prefixCls, content, position} = this.props;
        const noticeClassName = classNames({
            [prefixCls]: !!prefixCls,
            [`${prefixCls}-leave`]: !!shouldClose,
            [`${prefixCls}-top`]: position === 'top',
            [`${prefixCls}-middle`]: position === 'middle',
            [`${prefixCls}-bottom`]: position === 'bottom',
        });
        return (
            <div className={noticeClassName}>
                {content}
            </div>
        );
    }
}

export default Notice;