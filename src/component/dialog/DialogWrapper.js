/**
 * Created by jibin on 2017/12/29.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Dialog from './Dialog';
import PropTypes from 'prop-types';

const noop = ()=>{};

const IS_REACT_16 = !!ReactDOM.createPortal;

class DialogWrapper extends React.Component {
    constructor(props){
        super(props);

        this.removeContainer = this.removeContainer.bind(this);
        this.saveRef = this.saveRef.bind(this);
    }

    static defaultProps = {
        prefixCls: 'pb-dialog',
        visible: false,
        onClose: noop
    };

    static PropTypes = {
        prefixCls: PropTypes.string,
        visible: PropTypes.bool,
        onClose: PropTypes.func
    };

    componentDidMount(){
        if(this.props.visible){
            this.componentDidUpdate();
        }
    }

    componentWillUnmount(){
        if(this.props.visible){
            if(!IS_REACT_16){
                this.renderDialog(false);
            }else{
                this.removeContainer();
            }
        }else{
            this.removeContainer();
        }
    }

    shouldComponentUpdate(nextProps){
        const {visible} = nextProps;
        return !!(this.props.visible || visible);
    }

    componentDidUpdate(){
        if(!IS_REACT_16){
            this.renderDialog(this.props.visible);
        }
    }

    saveRef(el){
        if(IS_REACT_16){
            this._component = el;
        }
    }

    getComponent(visible){
        const props = {...this.props};
        ['visible', 'onAnimateLeave'].forEach(prop=>{
            if(props.hasOwnProperty(prop)){
                delete props[prop];
            }
        });
        return <Dialog {...props} visible={visible} onAnimateLeave={this.removeContainer} ref={this.saveRef}/>
    }

    removeContainer(){
        if(this.container){
            ReactDOM.unmountComponentAtNode(this.container);
            document.body.removeChild(this.container);
            this.container = null;
        }
    }

    getContainer(){
        if(!this.container){
            const container = document.createElement('div');
            const containerId = `${this.props.prefixCls}-container-${+new Date()}`;
            container.setAttribute('id', containerId);
            document.body.appendChild(container);
            this.container = container;
        }
        return this.container;
    }

    renderDialog(visible){
        ReactDOM.unstable_renderSubtreeIntoContainer(
            this,
            this.getComponent(visible),
            this.getContainer()
        );
    }

    render(){
        const {visible} = this.props;
        //visible 为false 需要判断是否已经有dom渲染
        if(IS_REACT_16 && (visible || this._component)){
            return ReactDOM.createPortal(this.getComponent(visible), this.getContainer());
        }
        return null;
    }
}

export default DialogWrapper;