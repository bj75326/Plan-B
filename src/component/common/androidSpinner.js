/**
 * Created by jibin on 17/11/20.
 */

import React from 'react';

import '../../style/androidSpinner.css';

const AndroidSpinner = ({className, style}) => (
    <div className={className} style={style}>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" className="pb-as-svg">
            <circle cx="20" cy="20" r="10" className="pb-as-circle"/>
        </svg>
    </div>
);

export default AndroidSpinner;