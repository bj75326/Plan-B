/**
 * Created by jibin on 17/10/16.
 */

import React, {Component} from 'react';

class Input extends Component {

    constructor(props){
        super(props);

        this.onInputFocus = this.onInputFocus.bind(this);
        this.onInputBlur = this.onInputBlur.bind(this);
    }

    focus(){
        this.inputRef.focus();
    }

    onInputFocus(e){
        const value = e.target.value;
        if(this.props.onFocus){
            this.props.onFocus(value);
        }
    }

    onInputBlur(e){
        const value = e.target.value;
        if(this.props.onBlur){
            this.props.onBlur(value);
        }
    }

    render(){
        const {onBlur, onFocus, ...restProps} = this.props;

        return (
            <input ref={el => this.inputRef = el} onFocus={this.onInputFocus} onBlur={this.onInputBlur} {...restProps}/>
        );
    }
}

export default Input;
