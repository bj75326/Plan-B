/**
 * Created by jibin on 17/9/15.
 */

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Notice from './Notice';
import PropTypes from 'prop-types';

let noticeNumber = 0;

const getUuid = ()=>{
    return "notification-" + new Date().getTime() + '-' + noticeNumber++;
};

class Notification extends Component {
    constructor(props){
        super(props);
        this.state = {
            notices: [],
            hasMask: true
        };
    }

    static defaultProps = {
        prefixCls: 'pb-toast'
    };

    static PropTypes = {
        prefixCls: PropTypes.string
    };

    add(notice){
        const key = notice.key ? notice.key : notice.key = getUuid();
        const mask = notice.mask ? notice.mask : false;
        const temp = this.state.notices.filter(notice => notice.key === key);

        if(!temp.length){
            const notices = [...this.state.notices, notice];
            this.setState({
                notices: notices,
                hasMask: mask
            });
        }
    }

    remove(key){
        this.setState(previousState=>{
            return {
                notices: previousState.notices.filter(notice => notice.key !== key)
            };
        });
    }

    getNoticeDOM(){
        const {notices} = this.state;
        let result = [];

        notices.map(notice => {
            const closeCallback = ()=>{
                this.remove(notice.key);
                if(notice.onClose) notice.onClose();
            };

            result.push(
                <Notice key={notice.key} {...notice} onClose={closeCallback}/>
            );
        });

        return result;
    }

    getMaskDOM(){
        const {notices, hasMask} = this.state;
        if(notices.length > 0 && hasMask === true) return <div className={`${this.props.prefixCls}-mask`}></div>;
    }

    render(){
        console.log('notification render');
        return (
            <div className={`${this.props.prefixCls}-box`}>
                {this.getNoticeDOM()}
                {this.getMaskDOM()}
            </div>
        );
    }
}

Notification.reWrite = properties=>{
    const {...props} = properties || {};
    let ele = document.createElement('div');
    document.body.appendChild(ele);

    const notification = ReactDOM.render(<Notification {...props} />, ele);

    return {
        component: notification,
        notice(noticeProps){
            notification.add(noticeProps);
        },
        removeNotice(key){
            notification.remove(key);
        },
        destroy(){
            ReactDOM.unmountComponentAtNode(ele);
            document.body.removeChild(ele);
        }
    };
};

export default Notification;