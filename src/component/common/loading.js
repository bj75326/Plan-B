/**
 * Created by jibin on 17/9/1.
 */

import React from 'react';

const Loading = ({className, style}) => (
    <div className={className} style={style}>
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 30" xmlSpace="preserve">
            <rect x="0" y="5.13172" width="4" height="20.7366" fill="#333">
              <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0s" dur="0.6s" repeatCount="indefinite"/>
              <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0s" dur="0.6s" repeatCount="indefinite"/>
            </rect>
            <rect x="10" y="8.86828" width="4" height="13.2634" fill="#333">
              <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.15s" dur="0.6s" repeatCount="indefinite"/>
              <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.15s" dur="0.6s" repeatCount="indefinite"/>
            </rect>
            <rect x="20" y="12.8683" width="4" height="5.26345" fill="#333">
              <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.3s" dur="0.6s" repeatCount="indefinite"/>
              <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.3s" dur="0.6s" repeatCount="indefinite"/>
            </rect>
        </svg>
    </div>
);

export default Loading;
