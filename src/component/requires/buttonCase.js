/**
 * Created by jibin on 17/11/20.
 */
import React, {Component} from 'react';
import Button from '../button/Button';
import Flex from '../grid/Flex';
import WhiteSpace from '../grid/WhiteSpace';
import WingBlank from '../grid/WingBlank';
import template from '../common/template';

import CellGroup from '../cell/CellGroup';
import Tool from '../../config/Tool';
import FontAwesome from 'react-fontawesome';
import BreadCrumb from '../common/breadCrumb';

const routes = [{
    path: '/',
    breadcrumbName: <FontAwesome name="home"/>
}, {
    path: '/Button',
    breadcrumbName: 'Button'
}];

class ButtonCase extends Component {

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
                    <WingBlank size="lg">
                        <h2 className="section-title-h2" style={{paddingTop: '10px'}}>按键类型</h2>
                        <Button >Default</Button>
                        <WhiteSpace/>
                        <Button type="primary">Primary</Button>
                        <WhiteSpace/>
                        <Button type="ghost">Ghost</Button>
                        <h2 className="section-title-h2">按键尺寸</h2>
                        <Button >Normal</Button>
                        <WhiteSpace/>
                        <Button inline={true} style={{marginRight: '10px'}}>Normal</Button>
                        <Button inline={true} size="small" style={{marginRight: '10px'}}>Small</Button>
                        <Button inline={true} size="mini" >Mini</Button>
                        <h2 className="section-title-h2">禁用按键</h2>
                        <Button disabled={true}>Default Disabled</Button>
                        <WhiteSpace/>
                        <Button inline={true} type="warning" style={{marginRight: '10px'}}>Warning</Button>
                        <Button inline={true} type="warning" disabled={true}>Warning Disabled</Button>
                        <h2 className="section-title-h2">加载</h2>
                        <Button loading={true}>Loading</Button>
                        <h2 className="section-title-h2">场景</h2>
                        <Flex>
                            <Flex.Item >
                                <Button type="primary">Click</Button>
                            </Flex.Item>
                            <Flex.Item >
                                <Button type="warning">Click</Button>
                            </Flex.Item>
                        </Flex>
                    </WingBlank>
                    <CellGroup style={{marginBottom: '42px'}}>
                        <CellGroup.Cell titleText="标题文字" className="no-feedback-cell">
                            <Button size="small" icon="angle-left" type='primary' style={{
                                width: '72px'
                            }}>按键</Button>
                        </CellGroup.Cell>
                    </CellGroup>
                </div>
            </div>
        );
    }
}

export default template({
    id: 'button',
    component: ButtonCase
});

