/**
 * Created by jibin on 2018/1/25.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal';

export default function alert(
    title, message, actions = [{text: '确定'}], platform = 'ios',
){

    let closed = false;
    const prefixCls = 'pb-modal';

    if(!title && !message){
        return {
            close: ()=>{}
        };
    }

    const div = document.createElement('div');
    document.body.appendChild(div);

    const close = ()=>{
        if(div){
            ReactDOM.unmountComponentAtNode(div);
            if(div.parentNode){
                div.parentNode.removeChild(div);
            }
        }
    };

    const footer = actions.map(button => {
        const originPress = button.onPress || function(){};
        button.onPress = ()=>{
            if(closed) return;

            const res = originPress();
            if(res && res.then){
                res.then(()=>{
                    closed = true;
                    close();
                }).catch(()=>{});
            }else{
                closed = true;
                close();
            }
        };

        return button;
    });

    ReactDOM.render(<Modal
        visible
        normal
        title={title}
        closeable={false}
        maskCloseable={false}
        footer={footer}
        platform={platform}
    >
        <div className={`${prefixCls}-alert-content`}>{message}</div>
    </Modal>, div);

    return { close };
};
