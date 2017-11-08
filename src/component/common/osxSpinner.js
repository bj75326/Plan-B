/**
 * Created by jibin on 17/11/6.
 */

import React from 'react';

import '../../style/osxSpinner.css';

const OsxSpinner = ({className}) => (
    <div className={className}>
        <div className="osx-spinner">
            {Array.from({length: 12}).map((value, index)=>(
                <div key={index} className="osx-spinner-blade"/>
            ))}
        </div>
    </div>
);

export default OsxSpinner;