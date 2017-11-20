/**
 * Created by jibin on 17/11/20.
 */

import React from 'react';

import '../../style/androidSpinner.css';

const AndroidSpinner = ({className, style}) => (
    <div className={className} style={style}>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="pb-as-svg">
            <circle cx="25" cy="25" r="20" fill="none" strokeWidth="5" className="pb-as-circle"/>
        </svg>
    </div>
);

export default AndroidSpinner;