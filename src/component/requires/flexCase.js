/**
 * Created by jibin on 17/11/22.
 */

import React, {Component} from 'react';
import Template from '../common/template';
import Flex from '../grid/Flex';
import WhiteSpace from '../grid/WhiteSpace';
import WingBlank from '../grid/WingBlank';
import Tool from '../../config/Tool';
import FontAwesome from 'react-fontawesome';
import BreadCrumb from '../common/breadCrumb';


const FlexBoxContent = props => (
    <div style={{
        textAlign: 'center',
        width: '100%',
        height: '35px',
        lineHeight: '35px',
        color: '#fff',
        backgroundColor: '#f07c01'
    }} {...props}>
        {props.children}
    </div>
);

const routes = [{
    path: '/',
    breadcrumbName: <FontAwesome name="home"/>
}, {
    path: '/Flex-Box',
    breadcrumbName: 'Flex'
}];

const flex1 = {
    WebkitBoxFlex: 1,
    WebkitFlex: 1,
    msFlex: 1,
    flex: 1
};

const flex2 = {
    WebkitBoxFlex: 2,
    WebkitFlex: 2,
    msFlex: 2,
    flex: 2
};

const flex5 = {
    WebkitBoxFlex: 5,
    WebkitFlex: 5,
    msFlex: 5,
    flex: 5
};

class FlexCase extends Component {

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
                    <div className="section-title" style={{paddingTop: '10px'}}>等比</div>
                    <WingBlank size="md">
                        <Flex>
                            <Flex.Item>
                                <FlexBoxContent>1</FlexBoxContent>
                            </Flex.Item>
                            <Flex.Item>
                                <FlexBoxContent>2</FlexBoxContent>
                            </Flex.Item>
                        </Flex>
                        <WhiteSpace />
                        <Flex>
                            <Flex.Item>
                                <FlexBoxContent>1</FlexBoxContent>
                            </Flex.Item>
                            <Flex.Item>
                                <FlexBoxContent>2</FlexBoxContent>
                            </Flex.Item>
                            <Flex.Item>
                                <FlexBoxContent>3</FlexBoxContent>
                            </Flex.Item>
                            <Flex.Item>
                                <FlexBoxContent>4</FlexBoxContent>
                            </Flex.Item>
                        </Flex>
                        <WhiteSpace />
                        <Flex>
                            <Flex.Item>
                                <FlexBoxContent>1</FlexBoxContent>
                            </Flex.Item>
                            <Flex.Item>
                                <FlexBoxContent>2</FlexBoxContent>
                            </Flex.Item>
                            <Flex.Item>
                                <FlexBoxContent>3</FlexBoxContent>
                            </Flex.Item>
                            <Flex.Item>
                                <FlexBoxContent>4</FlexBoxContent>
                            </Flex.Item>
                            <Flex.Item>
                                <FlexBoxContent>5</FlexBoxContent>
                            </Flex.Item>
                        </Flex>
                    </WingBlank>
                    <div className="section-title">占比</div>
                    <WingBlank size="md">
                        <Flex>
                            <Flex.Item style={flex2}>
                                <FlexBoxContent>1</FlexBoxContent>
                            </Flex.Item>
                            <Flex.Item style={flex1}>
                                <FlexBoxContent>2</FlexBoxContent>
                            </Flex.Item>
                        </Flex>
                        <WhiteSpace />
                        <Flex>
                            <Flex.Item style={flex1}>
                                <FlexBoxContent>1</FlexBoxContent>
                            </Flex.Item>
                            <Flex.Item style={flex2}>
                                <FlexBoxContent>2</FlexBoxContent>
                            </Flex.Item>
                            <Flex.Item style={flex1}>
                                <FlexBoxContent>3</FlexBoxContent>
                            </Flex.Item>
                        </Flex>
                        <WhiteSpace />
                        <Flex>
                            <Flex.Item style={flex1}>
                                <FlexBoxContent>1</FlexBoxContent>
                            </Flex.Item>
                            <Flex.Item style={flex1}>
                                <FlexBoxContent>2</FlexBoxContent>
                            </Flex.Item>
                            <Flex.Item style={flex1}>
                                <FlexBoxContent>3</FlexBoxContent>
                            </Flex.Item>
                            <Flex.Item style={flex1}>
                                <FlexBoxContent>4</FlexBoxContent>
                            </Flex.Item>
                            <Flex.Item style={flex5}>
                                <FlexBoxContent>5</FlexBoxContent>
                            </Flex.Item>
                        </Flex>
                    </WingBlank>
                    <div className="section-title">换行</div>
                    <WingBlank size="md">
                        <Flex wrap="wrap">
                            <FlexBoxContent className="inline">1</FlexBoxContent>
                            <FlexBoxContent className="inline">2</FlexBoxContent>
                            <FlexBoxContent className="inline">3</FlexBoxContent>
                            <FlexBoxContent className="inline">4</FlexBoxContent>
                            <FlexBoxContent className="inline">5</FlexBoxContent>
                            <FlexBoxContent className="inline">6</FlexBoxContent>
                            <FlexBoxContent className="inline">7</FlexBoxContent>
                            <FlexBoxContent className="inline">8</FlexBoxContent>
                            <FlexBoxContent className="inline">9</FlexBoxContent>
                        </Flex>
                    </WingBlank>
                    <div className="section-title">对齐</div>
                    <WingBlank size="md">
                        <Flex justify="center">
                            <FlexBoxContent className="inline">1</FlexBoxContent>
                            <FlexBoxContent className="inline">2</FlexBoxContent>
                            <FlexBoxContent className="inline no-margin-right">3</FlexBoxContent>
                        </Flex>
                        <Flex justify="end">
                            <FlexBoxContent className="inline">1</FlexBoxContent>
                            <FlexBoxContent className="inline">2</FlexBoxContent>
                            <FlexBoxContent className="inline no-margin-right">3</FlexBoxContent>
                        </Flex>
                        <Flex justify="between">
                            <FlexBoxContent className="inline">1</FlexBoxContent>
                            <FlexBoxContent className="inline">2</FlexBoxContent>
                            <FlexBoxContent className="inline no-margin-right">3</FlexBoxContent>
                        </Flex>
                        <WhiteSpace size="xl"/>
                    </WingBlank>
                </div>
            </div>
        );
    }
}

export default Template({
    id: 'flexbox',
    component: FlexCase
});