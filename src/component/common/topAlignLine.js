/**
 * Created by jibin on 17/11/19.
 */

import React from 'react';

const topAlignLine = ({className, style}) => (
    <div className={className} style={style}>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" style={{enableBackground: "new 0 0 50 50"}} xmlSpace="preserve">
            <rect x="0" y="0" width="4" height="7" fill="#333" transform="scale(1 2.97856)">
              <animateTransform attributeType="xml" attributeName="transform" type="scale" values="1,1; 1,3; 1,1" begin="0s" dur="0.6s" repeatCount="indefinite"/>
            </rect>
            <rect x="10" y="0" width="4" height="7" fill="#333" transform="scale(1 1.64523)">
              <animateTransform attributeType="xml" attributeName="transform" type="scale" values="1,1; 1,3; 1,1" begin="0.2s" dur="0.6s" repeatCount="indefinite"/>
            </rect>
            <rect x="20" y="0" width="4" height="7" fill="#333" transform="scale(1 1.6881)">
              <animateTransform attributeType="xml" attributeName="transform" type="scale" values="1,1; 1,3; 1,1" begin="0.4s" dur="0.6s" repeatCount="indefinite"/>
            </rect>
        </svg>
    </div>
);

export default topAlignLine;
