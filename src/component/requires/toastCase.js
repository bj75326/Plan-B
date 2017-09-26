/**
 * Created by jibin on 17/9/7.
 */

import React, {Component} from 'react';
import template from '../common/template';
import Header from '../common/header';
import CellGroup from '../cell/CellGroup';

class ToastCase extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="page subpage">
                <Header title="Toast" currentAnimation={this.props.currentAnimation}/>
                <div className="viewport">
                    <CellGroup title="点击单元格显示toast基本样式" style={{marginTop: '11px'}}>
                        <CellGroup.Cell titleIcon="commenting-o" titleText="default" allowRight={true}/>
                    </CellGroup>
                    <CellGroup title="点击单元格显示带有icon的toast" >
                        <CellGroup.Cell className="text-success" titleIcon="check" titleText="success" allowRight={true}/>
                        <CellGroup.Cell className="text-danger" titleIcon="exclamation-circle" titleText="error" allowRight={true}/>
                        <CellGroup.Cell className="text-warning" titleIcon="exclamation-triangle" titleText="warning" allowRight={true}/>
                    </CellGroup>
                    <CellGroup title="点击单元格显示不同位置的toast">
                        <CellGroup.Cell titleIcon="chevron-up" titleText="top" allowRight={true}/>
                        <CellGroup.Cell titleIcon="minus" titleText="middle" allowRight={true}/>
                        <CellGroup.Cell titleIcon="chevron-down" titleText="bottom" allowRight={true}/>
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


