/**
 * Created by jibin on 17/8/24.
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Loading from '../component/common/loading';

class Bundle extends Component{
    constructor(props){
        super(props);
        this.state = {
            mod: null
        };
    }

    static propTypes = {
        load: PropTypes.func,
        children: PropTypes.func
    };

    componentWillMount(){
        this.load(this.props);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.load !== this.props.load){
            this.load(nextProps);
        }
    }

    load(props){
        this.setState({
            mod: null
        });
        props.load((mod)=>{
            //exception handling will be put here.
            console.log(mod);
            this.setState({
                mod: mod.default ? mod.default : mod
            });
        });
    }

    render(){
        return this.state.mod ? this.props.children(this.state.mod) : <Loading className="page subpage"/>
    }
}

export default Bundle;

