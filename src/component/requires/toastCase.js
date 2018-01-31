/**
 * Created by jibin on 17/9/7.
 */

import React, {Component} from 'react';
import template from '../common/template';
import CellGroup from '../cell/CellGroup';
import Toast from '../toast/Toast';
import BreadCrumb from '../common/breadCrumb';
import FontAwesome from 'react-fontawesome';
import Tool from '../../config/Tool';

const routes = [{
    path: '/',
    breadcrumbName: <FontAwesome name="home"/>
}, {
    path: '/Toast',
    breadcrumbName: 'Toast'
}];

class ToastCase extends Component {
    constructor(props){
        super(props);
        this.breadCrumbClick = this.breadCrumbClick.bind(this);
    }

    show(){
        return Toast.show('欢迎体验Plan B', 3000, false, true, null);
    }

    showSuccess(){
        return Toast.showSuccess('操作成功', 3000, true, true, null);
    }

    showError(){
        return Toast.showError('操作失败', 3000, true, true, null);
    }

    showWarning(){
        return Toast.showWarning('警告风险', 3000, true, true, null);
    }

    showTop(){
        return Toast.showTop('设置显示位置', 3000, false, true, null);
    }

    showMiddle(){
        return Toast.showMiddle('设置显示位置', 3000, false, true, null);
    }

    showBottom(){
        return Toast.showBottom('设置显示位置', 3000, false, true, null);
    }

    breadCrumbClick(){
        this.props.currentAnimation('right', Tool.getWindowScrollTop());
    }

    render(){
        return (
            <div className="page subpage">
                <BreadCrumb routes={routes} param={{onClick: this.breadCrumbClick}}/>
                <div className="viewport">
                    <CellGroup title="点击单元格显示toast基本样式">
                        <CellGroup.Cell
                            titleIcon="commenting-o"
                            titleText="default"
                            allowRight={true}
                            onCellClick={this.show.bind(this)}
                            component="a"
                        />
                    </CellGroup>
                    <CellGroup title="点击单元格显示带有icon的toast">
                        <CellGroup.Cell
                            className="text-success"
                            titleIcon="check"
                            titleText="success"
                            allowRight={true}
                            onCellClick={this.showSuccess.bind(this)}
                            component="a"
                        />
                        <CellGroup.Cell
                            className="text-danger"
                            titleIcon="exclamation-circle"
                            titleText="error"
                            allowRight={true}
                            onCellClick={this.showError.bind(this)}
                            component="a"
                        />
                        <CellGroup.Cell
                            className="text-warning"
                            titleIcon="exclamation-triangle"
                            titleText="warning"
                            allowRight={true}
                            onCellClick={this.showWarning.bind(this)}
                            component="a"
                        />
                    </CellGroup>
                    <CellGroup title="点击单元格显示不同位置的toast" style={{marginBottom: '42px'}}>
                        <CellGroup.Cell
                            titleIcon="chevron-up"
                            titleText="top"
                            allowRight={true}
                            onCellClick={this.showTop.bind(this)}
                            component="a"
                        />
                        <CellGroup.Cell
                            titleIcon="minus"
                            titleText="middle"
                            allowRight={true}
                            onCellClick={this.showMiddle.bind(this)}
                            component="a"
                        />
                        <CellGroup.Cell
                            titleIcon="chevron-down"
                            titleText="bottom"
                            allowRight={true}
                            onCellClick={this.showBottom.bind(this)}
                            component="a"
                        />
                    </CellGroup>
                </div>
            </div>
        );
    }
}

export default template({
    id: 'toast',
    component: ToastCase
});


