/**
 * Created by jibin on 17/11/19.
 */

import React from 'react';

const GradientLine = ({className, style}) => (
    <div className={className} style={style}>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 30" style={{enableBackground:"new 0 0 50 50"}} xmlSpace="preserve">
            <rect x="3" y="5" width="4" height="20" fill="#333">
                <animate attributeName="opacity" attributeType="XML" values="1; .2; 1" begin="0s" dur="0.6s" repeatCount="indefinite"/>
            </rect>
            <rect x="10" y="5" width="4" height="20" fill="#333">
                <animate attributeName="opacity" attributeType="XML" values="1; .2; 1" begin="0.2s" dur="0.6s" repeatCount="indefinite"/>
            </rect>
            <rect x="17" y="5" width="4" height="20" fill="#333">
                <animate attributeName="opacity" attributeType="XML" values="1; .2; 1" begin="0.4s" dur="0.6s" repeatCount="indefinite"/>
            </rect>
        </svg>
    </div>
);

export default GradientLine;
