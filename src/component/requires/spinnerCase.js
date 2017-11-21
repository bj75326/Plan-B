/**
 * Created by jibin on 17/11/18.
 */

import React, {Component} from 'react';
import Template from '../common/template';
import Header from '../common/header';
import CellGroup from '../cell/CellGroup';

import ReverseSnake from '../common/reverseSnake';
import ShortSnake from '../common/shortSnake';
import LongSnake from '../common/longSnake';

import TopAlignLine from '../common/topAlignLine';
import Loading from '../common/loading';

import GradientLine from '../common/gradientLine';
import ComposeLine from '../common/composeLine';

import OsxSpinner from '../common/osxSpinner';
import AndroidSpinner from '../common/androidSpinner';


class SpinnerCase extends Component {

    render(){
        return (
            <div className="page subpage">
                <Header title="Spinner" currentAnimation={this.props.currentAnimation}/>
                <div className="viewport">
                    <CellGroup style={{marginTop: '11px'}}>
                        <CellGroup.Cell titleText="反色蛇形">
                            <ReverseSnake className="spinner-cell-value" style={{width: '40px', height: '40px'}}/>
                        </CellGroup.Cell>
                        <CellGroup.Cell titleText="短蛇形">
                            <ShortSnake className="spinner-cell-value" style={{width: '40px', height: '40px'}}/>
                        </CellGroup.Cell>
                        <CellGroup.Cell titleText="长蛇形">
                            <LongSnake className="spinner-cell-value" style={{width: '40px', height: '40px'}}/>
                        </CellGroup.Cell>
                        <CellGroup.Cell titleText="顶部对齐矩形">
                            <TopAlignLine style={{width: '24px', height: '24px', margin: '0 8px'}} className="spinner-cell-value"/>
                        </CellGroup.Cell>
                        <CellGroup.Cell titleText="中间对齐矩形">
                            <Loading style={{width: '24px', height: '30px', margin: '0 8px'}} className="spinner-cell-value"/>
                        </CellGroup.Cell>
                        <CellGroup.Cell titleText="渐变色矩形">
                            <GradientLine style={{width: '24px', height: '30px', margin: '0 8px'}} className="spinner-cell-value"/>
                        </CellGroup.Cell>
                        <CellGroup.Cell titleText="组合矩形">
                            <ComposeLine style={{width: '24px', height: '30px', margin: '0 8px'}} className="spinner-cell-value"/>
                        </CellGroup.Cell>
                    </CellGroup>
                    <CellGroup style={{marginBottom: '42px'}}>
                        <CellGroup.Cell titleText="适配IOS">
                            <OsxSpinner style={{width: '28px', height: '28px', stroke: '#69717d', margin: '0 6px'}}/>
                        </CellGroup.Cell>
                        <CellGroup.Cell titleText="适配Android">
                            <AndroidSpinner style={{width: '30px', height: '30px', margin: '0 5px', stroke: '#FF6700'}}/>
                        </CellGroup.Cell>
                    </CellGroup>
                </div>
            </div>
        );
    }
}

export default Template({
    id: 'spinner',
    component: SpinnerCase
});