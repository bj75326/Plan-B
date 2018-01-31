/**
 * Created by jibin on 17/9/20.
 */
import React, {Component} from 'react';
import template from '../common/template';
import BreadCrumb from '../common/breadCrumb';
import CellGroup from '../cell/CellGroup';
import Tool from '../../config/Tool';
import FontAwesome from 'react-fontawesome';

const routes = [{
    path: '/',
    breadcrumbName: <FontAwesome name="home"/>
}, {
    path: '/Cell-Swipe',
    breadcrumbName: 'Cell Swipe'
}];

const rightBtnGroup = [{
    text: 'Mark as Unread',
    style: {
        background: 'lightgray',
        color: '#fff',
        boxShadow: '0 -1px lightgray'
    },
    onPress(){
        console.log('1');
    }
}, {
    text: 'Delete',
    style: {
        background: 'red',
        color: '#fff',
        boxShadow: '0 -1px red'
    },
    onPress(){
        console.log('2');
    }
}];

const leftBtnGroup = [{
    text: 'Delete',
    style: {
        background: 'red',
        color: '#fff',
        boxShadow: '0 -1px red'
    },
    onPress(){
        console.log('3');
    }
}];

class CellSwipeCase extends Component {

    constructor(props){
        super(props);
        this.breadCrumbClick = this.breadCrumbClick.bind(this);
    }

    breadCrumbClick(){
        this.props.currentAnimation('right', Tool.getWindowScrollTop());
    }

    render(){
        return (
            <div className="page subpage">
                <BreadCrumb routes={routes} param={{onClick: this.breadCrumbClick}}/>
                <div className="viewport">
                    <CellGroup title="向左滑动单元格出现功能按键，点击触发事件">
                        <CellGroup.Cell
                            titleText="Item-1"
                            right={rightBtnGroup}
                            swipeDisabled={false}
                            component="a"
                        />
                        <CellGroup.Cell
                            titleText="Item-2"
                            right={rightBtnGroup}
                            swipeDisabled={false}
                            component="a"
                        />
                        <CellGroup.Cell
                            titleText="Item-3"
                            right={rightBtnGroup}
                            swipeDisabled={false}
                            component="a"
                        />
                    </CellGroup>
                    <CellGroup title="向右滑动单元格出现功能按键，点击触发事件">
                        <CellGroup.Cell
                            titleText="Item-1"
                            left={leftBtnGroup}
                            swipeDisabled={false}
                            component="a"
                        />
                        <CellGroup.Cell
                            titleText="Item-2"
                            left={leftBtnGroup}
                            swipeDisabled={false}
                            component="a"
                        />
                        <CellGroup.Cell
                            titleText="Item-3"
                            left={leftBtnGroup}
                            swipeDisabled={false}
                            component="a"
                        />
                    </CellGroup>
                    <CellGroup title="滑动单元格（向左为例），自动触发事件">
                        <CellGroup.Cell titleText="Item-1" component="a"/>
                        <CellGroup.Cell titleText="Item-2" component="a"/>
                        <CellGroup.Cell titleText="Item-3" component="a"/>
                    </CellGroup>
                    <CellGroup title="自定义按键组" style={{marginBottom: '42px'}}>
                        <CellGroup.Cell titleText="Item-1" component="a"/>
                        <CellGroup.Cell titleText="Item-2" component="a"/>
                        <CellGroup.Cell titleText="Item-3" component="a"/>
                    </CellGroup>
                </div>
            </div>
        );
    }
}

export default template({
    id: 'cellSwipe',
    component: CellSwipeCase
});