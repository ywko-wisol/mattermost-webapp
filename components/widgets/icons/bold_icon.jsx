// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';

export default class BoldIcon extends React.PureComponent {
    render() {
        return (
            <span {...this.props}>
                <svg
                    width='8'
                    height='10'
                    viewBox='0 0 8 10'
                    role='img'
                    aria-label='Bold icon'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <g
                        stroke='none'
                        strokeWidth='1'
                        fill='currentColor'
                        fillRule='evenodd'
                    >
                        <path d='M5 8.34375H2.65625V6.34375H5C5.27083 6.34375 5.5 6.4375 5.6875 6.625C5.89583 6.8125 6 7.05208 6 7.34375C6 7.61458 5.89583 7.85417 5.6875 8.0625C5.5 8.25 5.27083 8.34375 5 8.34375ZM2.65625 2.34375H4.65625C4.94792 2.34375 5.1875 2.4375 5.375 2.625C5.5625 2.8125 5.65625 3.05208 5.65625 3.34375C5.65625 3.61458 5.5625 3.85417 5.375 4.0625C5.1875 4.25 4.94792 4.34375 4.65625 4.34375H2.65625V2.34375ZM6.40625 5.1875C6.71875 4.95833 6.97917 4.67708 7.1875 4.34375C7.39583 4.01042 7.5 3.67708 7.5 3.34375C7.5 2.59375 7.23958 1.95833 6.71875 1.4375C6.21875 0.916667 5.59375 0.65625 4.84375 0.65625H0.65625V10H5.375C6.0625 10 6.64583 9.76042 7.125 9.28125C7.60417 8.78125 7.84375 8.17708 7.84375 7.46875C7.84375 6.96875 7.70833 6.52083 7.4375 6.125C7.1875 5.70833 6.84375 5.39583 6.40625 5.1875Z'/>
                    </g>
                </svg>
            </span>
        );
    }
}
