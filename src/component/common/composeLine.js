/**
 * Created by jibin on 17/11/19.
 */

import React from 'react';

const ComposeLine = ({className, style}) => (
    <div className={className} style={style}>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 30" style={{enableBackground:"new 0 0 50 50"}} xmlSpace="preserve">
            <rect x="2" y="9.10989" width="4" height="11.7802" fill="#333" opacity="0.2">
                <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0s" dur="0.6s" repeatCount="indefinite"/>
                <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0s" dur="0.6s" repeatCount="indefinite"/>
                <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0s" dur="0.6s" repeatCount="indefinite"/>
            </rect>
            <rect x="10" y="8.39011" width="4" height="13.2198" fill="#333" opacity="0.2">
                <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.15s" dur="0.6s" repeatCount="indefinite"/>
                <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite"/>
                <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite"/>
            </rect>
            <rect x="18" y="5.89011" width="4" height="18.2198" fill="#333" opacity="0.2">
                <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.3s" dur="0.6s" repeatCount="indefinite"/>
                <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite"/>
                <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite"/>
            </rect>
        </svg>
    </div>
);

export default ComposeLine;