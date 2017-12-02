/**
 * Created by jibin on 17/8/28.
 */

import * as config from './Config';

const {target} = config;
const Tool = {};

Tool.paramType = data => {
    if(Object.prototype.toString.call(data).slice(8, -1) === 'Object'
        && Object.keys(data).length > 0){
        return '?' + Object.keys(data).map(key => key + '=' +data[key]).join("&");
    }
    return '';
};

Tool.isArray = arr => Object.prototype.toString.call(arr).slice(8, -1) === 'Array';

Tool.flattenArray = arr => {
    if(!Tool.isArray(arr)){
        return arr;
    }
    return Array.prototype.concat.apply([], arr.map(arr => Tool.flattenArray(arr)));
};

Tool.trim = str => ('' + str).replace(/(^\s+)|(\s+$)/g, '');

Tool.hasClass = (node, className)=>{
    if(node.classList){
        return node.classList.contains(className);
    }
    const originClass = node.className;
    return ` ${originClass} `.indexOf(` ${className} `) > -1;
};

Tool.addClass = (node, className)=>{
    if(node.classList){
        node.classList.add(className);
    }else{
        if(!Tool.hasClass(node, className)) node.className = `${node.className} ${className}`;
    }
};

Tool.removeClass = (node, className)=>{
    if(node.classList){
        node.classList.remove(className);
    }else{
        if(Tool.hasClass(node.className)) node.className = ` ${node.className} `.replace(` ${className} `, ' ');
    }
};

Tool.isString = (str)=>{
    return typeof str === 'string';
};

export default Tool;


