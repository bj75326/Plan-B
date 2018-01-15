/**
 * Created by jibin on 2017/12/27.
 */

const EVENT_NAME_MAP = {
    transitionend: {
        transition: 'transitionend',
        WebkitTransition: 'webkitTransitionEnd',
        MozTransition: 'mozTransitionEnd',
        OTransition: 'oTransitionEnd',
        msTransition: 'MSTransitionEnd'
    },

    animationend: {
        animation: 'animationEnd',
        WebkitAnimation: 'webkitAnimationEnd',
        MozAnimation: 'mozAnimationEnd',
        OAnimation: 'oAnimationEnd',
        msAnimation: 'MSAnimationEnd'
    }
};

const endEvents = [];

const detectEvents = ()=>{
    const testEl = document.createElement('div');
    const style = testEl.style;

    if(!('AnimationEvent' in window)){
        delete EVENT_NAME_MAP.animationend.animation;
    }

    if(!('TransitionEvent' in window)){
        delete EVENT_NAME_MAP.transitionend.transition;
    }

    for(const baseEventName in EVENT_NAME_MAP){
        if(EVENT_NAME_MAP.hasOwnProperty(baseEventName)){
            const baseEvents = EVENT_NAME_MAP[baseEventName];
            for(const styleName in baseEvents){
                if(styleName in style){
                    endEvents.push(baseEvents[styleName]);
                    break;
                }
            }
        }
    }
};

if(typeof window !== 'undefined' && typeof document !== 'undefined'){
    detectEvents();
}

const addEventListener = (node, eventName, eventListener)=>{
    node.addEventListener(eventName, eventListener, false);
};

const removeEventListener = (node, eventName, eventListener)=>{
    node.removeEventListener(eventName, eventListener, false);
};

const TransitionEvents = {
    addEndEventListener(node, eventListener){
        if(endEvents.length === 0){
            window.setTimeout(eventListener, 0);
            return;
        }
        endEvents.forEach(endEvent => {
            addEventListener(node, endEvent, eventListener);
        });
    },

    endEvents,

    removeEndEventListener(node, eventListener){
        if(endEvents.length === 0){
            return;
        }
        endEvents.forEach(endEvent => {
            removeEventListener(node, endEvent, eventListener);
        });
    }
};

export default TransitionEvents;


