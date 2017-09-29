/**
 * Created by jibin on 17/9/17.
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FontAwesome from 'react-fontawesome';

import '../../style/cell.css';

let isTouched = false;

let startX, startY;
let timestamp;

//let initTouchMove = false;
//let swipeLocked = false;
//let scrollLocked = false;

let swipeDistance = null;

let noop = ()=>{};

class Cell extends Component {
    constructor(props){
        super(props);
        this.state = {
            swiping: false
        };
        this.handleTouchStart = this.handleTouchStart.bind(this);
        this.handleTouchMove = this.handleTouchMove.bind(this);
        this.handleTouchEnd = this.handleTouchEnd.bind(this);
        this.handleCoverTouchStart = this.handleCoverTouchStart.bind(this);
        this.captureWidth = this.captureWidth.bind(this);

        this.openedLeft = false;
        this.openedRight = false;
    }

    static defaultProps = {
        prefixCls: 'pb-cell',
        left: [],
        right: [],
        autoClose: false,
        swipeDisabled: true,
        allowRight: false,
        customTitle: false
    };

    static PropTypes = {
        prefixCls: PropTypes.string,
        className: PropTypes.string,
        swipeDisabled: PropTypes.bool,
        left: PropTypes.array,
        right: PropTypes.array,
        onOpen: PropTypes.func,
        onClose: PropTypes.func,
        autoClose: PropTypes.bool,
        hasCellSwiped: PropTypes.bool,

        titleText: PropTypes.string,
        titleLabel: PropTypes.string,
        titleIcon: PropTypes.string,

        allowRight: PropTypes.bool,

        customTitle: PropTypes.bool
    };

    captureWidth(){
        this.leftBtnsWidth = this.left ? this.left.offsetWidth : 0;
        this.rightBtnsWidth = this.right ? this.right.offsetWidth : 0;
    }

    componentDidMount(){

        window.addEventListener('load', this.captureWidth);

        this.leftBtnsWidth = this.left ? this.left.offsetWidth : 0;
        this.rightBtnsWidth = this.right ? this.right.offsetWidth : 0;
    }

    componentWillUnmount(){
        window.removeEventListener('load', this.captureWidth);
    }

    componentWillUpdate(nextProps){
        if(!nextProps.hasCellSwiped && (this.openedLeft || this.openedRight)){
            this.close();
        }
    }

    _getContentEasing(value, limit){
        const delta = Math.abs(value) - Math.abs(limit);
        const isOverflow = delta > 0;
        const factor = limit === 0 ? (value > 0 ? 1 : -1) : (limit > 0 ? 1 : -1);

        if(isOverflow){
            value = limit + Math.pow(delta, 0.85) * factor;
            return Math.abs(value) > Math.abs(limit) ? value : limit;
        }

        return value;
    }

    _setStyle(value){
        const limit = value > 0 ? this.leftBtnsWidth : -this.rightBtnsWidth;
        const distance = this._getContentEasing(value, limit);
        const transform = `translate3d(${distance}px, 0px, 0px)`;

        const distanceForLeft = distance - this.leftBtnsWidth;
        const distanceForRight = distance + this.rightBtnsWidth;

        const transformLeft = `translate3d(${distanceForLeft}px, 0px, 0px)`;
        const transformRight = `translate3d(${distanceForRight}px, 0px, 0px)`;

        this.content.style.transform = transform;
        if(this.left) this.left.style.transform = transformLeft;
        if(this.right) this.right.style.transform = transformRight;

        if(this.cover){
            this.cover.style.display = Math.abs(value) > 0 ? 'block' : 'none';
            this.cover.style.transform = transform;
        }
    }

    handleTouchStart(event){
        if(!isTouched){
            isTouched = true;

            if(this.props.hasCellSwiped){
                this.props.changeCellGroupState(false);
            }

            const touch = event.touches[0];
            startX = touch.clientX;
            startY = touch.clientY;
            timestamp = +new Date();
        }
    }

    handleTouchMove(event){
        if(isTouched){
            const touch = event.touches[0];
            const deltaX = touch.clientX - startX;
            const deltaY = touch.clientY - startY;

            //initTouchMove 判断执行默认的滚动屏幕，还是swipe Cell
            /*
            if(!initTouchMove){
                initTouchMove = true;
                if(Math.abs(deltaX) > Math.abs(deltaY)){
                    //do swipe cell
                    scrollLocked = true;
                }else{
                    swipeLocked = true;
                }
            }*/

            /*if(scrollLocked && !swipeLocked){
                event.preventDefault();*/
                if(!this.state.swiping){
                    this.setState({
                        swiping: true
                    });
                }
                this._setStyle(deltaX);
                swipeDistance = deltaX;
            /*}*/
        }
    }

    handleTouchEnd(event){
        if(isTouched){
            isTouched = false;

            this.setState({
                swiping: false
            });

            const deltaTime = +new Date() - timestamp;

            if(deltaTime < 300){
                if(swipeDistance > 0 && this.leftBtnsWidth > 0){
                    this.doOpenLeft();
                }else if(swipeDistance < 0 && this.rightBtnsWidth > 0){
                    this.doOpenRight();
                }else{
                    this._setStyle(0);
                }
            }else{
                if(swipeDistance < -this.rightBtnsWidth/2 && this.rightBtnsWidth > 0){
                    this.doOpenRight();
                }else if(swipeDistance > this.leftBtnsWidth/2 && this.leftBtnsWidth > 0){
                    this.doOpenLeft();
                }else{
                    this._setStyle(0);
                }
            }

            /*initTouchMove = false;
            scrollLocked = false;
            swipeLocked = false;*/
            swipeDistance = null;
        }
    }

    handleCoverTouchStart(){
        this.props.changeCellGroupState(false);
    }

    doOpenLeft(){
        this.open(this.leftBtnsWidth, true, false);
    }

    doOpenRight(){
        this.open(-this.rightBtnsWidth, false, true);
    }

    open(value, openedLeft, openedRight){
        if(!this.openedLeft && !this.openedRight && this.props.onOpen){
            this.onOpen();
        }

        this.openedLeft = openedLeft;
        this.openedRight = openedRight;
        this._setStyle(value);
        this.props.changeCellGroupState(true);
    }

    close(){
        if((this.openedLeft || this.openedRight) && this.props.onClose){
            this.props.onClose();
        }
        this._setStyle(0);
        this.openedLeft = false;
        this.openedRight = false;
    }

    onBtnClick(ev, btn){
        ev.preventDefault();
        ev.stopPropagation();
        const onPress = btn.onPress;
        if(onPress){
            onPress(ev);
        }

        if(this.props.autoClose){
            this.close();
        }
    }

    renderButtons(buttons){
        /**
         *  buttons:
         *  [{
         *      text: @String
         *      className: @String
         *      style: @Object
         *      onPress: @Function
         *  },...]
         */
        const prefixCls = this.props.prefixCls;

        return (buttons && buttons.length)? (
            <div className={`${prefixCls}-btnGroup`}>
                {
                    buttons.map((btn, i)=>(
                        <span key={i}
                            className={`${prefixCls}-swipe-btn ${btn.hasOwnProperty('className') ? btn.className: ''}`}
                            onClick={(e) => this.onBtnClick(e, btn)}
                            style={btn.style}
                            role="button"
                        >
                            {btn.text || 'Click'}
                        </span>
                    ))
                }
            </div>
        ) : null;
    }

    renderContent(){
        const {prefixCls, titleIcon, titleText, titleLabel, swipeDisabled, customTitle, children} = this.props;

        return (
            <div className={`${prefixCls}-content`} ref={el => this.content = el}
                onTouchStart={!swipeDisabled ? this.handleTouchStart : noop}
                onTouchMove={!swipeDisabled ? this.handleTouchMove : noop}
                onTouchEnd={!swipeDisabled ? this.handleTouchEnd : noop}
            >
                {customTitle ? ( React.Children.count(children) === 1 ? children :
                        children[0]
                    )
                    : (
                    !titleIcon ? (
                        <div className={`${prefixCls}-title`}>
                            {titleText ? <span className={`${prefixCls}-text`}>{titleText}</span> : null}
                            {titleLabel ? <span className={`${prefixCls}-label`}>{titleLabel}</span> : null}
                        </div>
                    ) : (
                        [
                            <div className={`${prefixCls}-icon`}>
                                <FontAwesome name={titleIcon} className="fa-lg"/>
                            </div>,
                            <div className={`${prefixCls}-title`}>
                                {[
                                    titleText ? <span className={`${prefixCls}-text`}>{titleText}</span> : null,
                                    titleLabel ? <span className={`${prefixCls}-label`}>{titleLabel}</span> : null
                                ]}
                            </div>
                        ]
                    ))
                }
                <div className={`${prefixCls}-value`}>
                    {customTitle ? children[1] : children}
                </div>
            </div>
        );
    }

    renderAllowRight(){
        const {allowRight, prefixCls} = this.props;

        if (!allowRight) return null;

        return (
            <div className={`${prefixCls}-allow-right`}>
                <FontAwesome name="angle-right" />
            </div>
        );
    }

    render(){
        const {prefixCls, className, left, right, swipeDisabled, ...restProps} = this.props;
        const {swiping} = this.state;

        const cellClassName = classNames({
            [prefixCls]: !!prefixCls,
            [className]: !!className,
            [`${prefixCls}-swipe`]: !swipeDisabled,
            [`${prefixCls}-swiping`]: swiping
        });

        return (left.length || right.length) && !swipeDisabled ? (
            <a className={cellClassName}>
                <div className={`${prefixCls}-cover`} ref={el => this.cover = el}
                     onTouchStart={this.handleCoverTouchStart}
                />
                <div className={`${prefixCls}-left`} ref={el => this.left = el}>
                    {this.renderButtons(left)}
                </div>
                {this.renderContent()}
                <div className={`${prefixCls}-right`} ref={el => this.right = el}>
                    {this.renderButtons(right)}
                </div>
                {this.renderAllowRight()}
            </a>
        ) : (
            <a className={cellClassName}>
                {this.renderContent()}
                {this.renderAllowRight()}
            </a>
        );
    }
}

export default Cell;