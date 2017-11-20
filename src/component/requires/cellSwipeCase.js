/**
 * Created by jibin on 17/9/20.
 */
import React, {Component} from 'react';
import template from '../common/template';
import Header from '../common/header';
import CellGroup from '../cell/CellGroup';

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

    render(){
        return (
            <div className="page subpage">
                <Header title="Cell Swipe" currentAnimation={this.props.currentAnimation}/>
                <div className="viewport">
                    <CellGroup title="向左滑动单元格出现功能按键，点击触发事件" style={{marginTop: '11px'}}>
                        <CellGroup.Cell titleText="Item-1" right={rightBtnGroup} swipeDisabled={false}/>
                        <CellGroup.Cell titleText="Item-2" right={rightBtnGroup} swipeDisabled={false}/>
                        <CellGroup.Cell titleText="Item-3" right={rightBtnGroup} swipeDisabled={false}/>
                    </CellGroup>
                    <CellGroup title="向右滑动单元格出现功能按键，点击触发事件">
                        <CellGroup.Cell titleText="Item-1" left={leftBtnGroup} swipeDisabled={false}/>
                        <CellGroup.Cell titleText="Item-2" left={leftBtnGroup} swipeDisabled={false}/>
                        <CellGroup.Cell titleText="Item-3" left={leftBtnGroup} swipeDisabled={false}/>
                    </CellGroup>
                    <CellGroup title="滑动单元格（向左为例），自动触发事件">
                        <CellGroup.Cell titleText="Item-1" />
                        <CellGroup.Cell titleText="Item-2" />
                        <CellGroup.Cell titleText="Item-3" />
                    </CellGroup>
                    <CellGroup title="自定义按键组" style={{marginBottom: '42px'}}>
                        <CellGroup.Cell titleText="Item-1" />
                        <CellGroup.Cell titleText="Item-2" />
                        <CellGroup.Cell titleText="Item-3" />
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