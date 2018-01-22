/**
 * Created by jibin on 2018/1/9.
 */
import React from 'react';
import Button from '../button/Button';
import Dialog from '../dialog/DialogWrapper';

import template from '../common/template';
import FontAwesome from 'react-fontawesome';
import BreadCrumb from '../common/breadCrumb';
import Tool from '../../config/Tool';

import WingBlank from '../grid/WingBlank';
import WhiteSpace from '../grid/WhiteSpace';
import TouchFeedback from '../common/touchFeedback';

import '../../style/dialog.css';

const routes = [{
    path: '/',
    breadcrumbName: <FontAwesome name="home"/>
}, {
    path: '/Dialog-Box',
    breadcrumbName: 'Dialog Box'
}];

class DialogCase extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            visible: false
        };

        this.breadCrumbClick = this.breadCrumbClick.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleDialogConfirm = this.handleDialogConfirm.bind(this);
    }

    breadCrumbClick(){
        this.props.currentAnimation('right', Tool.getWindowScrollTop());
    }

    handleBtnClick(){
        this.setState({
            visible: true
        });
    }

    //由于react-fastclick重写了createElement，在footer button上绑定合成事件
    handleDialogConfirm(){
        this.setState({
            visible: false
        });
    }

    render(){
        const {visible} = this.state;

        //纯dialog组件的生硬用法
        const dialog = (
            <Dialog
                visible={visible}
                header={<div className="pb-dialog-title">提示</div>}
                footer={(
                    <div className="pb-dialog-btn-group-v pb-dialog-btn-group-normal" role="group">
                        <TouchFeedback activeClassName="pb-dialog-button-active">
                            <a className="pb-dialog-button" onClick={this.handleDialogConfirm}>确认</a>
                        </TouchFeedback>
                    </div>
                )}
                className="pb-dialog-normal"
                animation="bounce"
                maskAnimation="fade"
            >
                <div>欢迎体验Plan-B!</div>
            </Dialog>
        );
        return (
            <div className="page subpage">
                <BreadCrumb routes={routes} param={{onClick: this.breadCrumbClick}}/>
                <div className="viewport" >
                    <WingBlank size="lg">
                        <h2 className="section-title-h2" style={{paddingTop: '10px'}}>基本样式</h2>
                        <Button onClick={this.handleBtnClick}>Basic</Button>
                        {dialog}
                    </WingBlank>
                </div>
            </div>
        );
    }

}

export default template({
    id: 'dialog',
    component: DialogCase
});