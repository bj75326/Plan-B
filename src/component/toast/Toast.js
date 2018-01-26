/**
 * Created by jibin on 17/9/15.
 */

import React from 'react';
import classNames from 'classnames';
import Notification from './Notification';

import FontAwesome from 'react-fontawesome';

import '../../style/toast.css';

//单独的WebApp（引用Notice & Notification组件）应考虑重写该Toast.js，写一个就够了，统一管理。

let newNotification;

const prefixCls = 'pb-toast';

const getNewNotification = ()=>{
    if(!newNotification){
        newNotification = Notification.reWrite();
    }
    return newNotification;
};

const notice = (content, icon, type, duration=3000, onClose, mask=true, position)=>{
    let notificationInstance = getNewNotification();
    let fontAwesomeName;
    if(!!icon){
        switch(type){
            case 'success':
                fontAwesomeName = 'check';
                break;
            case 'error':
                fontAwesomeName = 'exclamation-circle';
                break;
            case 'warning':
                fontAwesomeName = 'exclamation-triangle';
                break;
            default:
                fontAwesomeName = '';
        }
    }

    notificationInstance.notice({
        duration,
        mask: mask,
        content: !!icon && !!fontAwesomeName ? (
            <div className={classNames({
                [`${prefixCls}-wrapper`]: true
            })}>
                <div className={`${prefixCls}-icon`}>
                    <FontAwesome name={fontAwesomeName} />
                </div>
                <div className={`${prefixCls}-content`}>{content}</div>
            </div>
        ) : (
            <div className={classNames({
                [`${prefixCls}-wrapper`]: true
            })}>
                <div className={`${prefixCls}-content`}>{content}</div>
            </div>
        ),
        onClose: ()=>{
            if(onClose) onClose();
        },
        position
    });
};

export default {
    show(content, duration, icon, mask, onClose, position){
        return notice(content, false, null, duration, onClose, mask, position);
    },

    showSuccess(content, duration, icon, mask, onClose, position){
        return notice(content, icon, 'success', duration, onClose, mask, position);
    },

    showError(content, duration, icon, mask, onClose, position){
        return notice(content, icon, 'error', duration, onClose, mask, position);
    },

    showWarning(content, duration, icon, mask, onClose, position){
        return notice(content, icon, 'warning', duration, onClose, mask, position);
    },

    showTop(content, duration, icon, mask, onClose){
        return notice(content, false, null, duration, onClose, mask, 'top');
    },

    showMiddle(content, duration, icon, mask, onClose){
        return notice(content, false, null, duration, onClose, mask, 'middle');
    },

    showBottom(content, duration, icon, mask, onClose){
        return notice(content, false, null, duration, onClose, mask, 'bottom');
    }
};



