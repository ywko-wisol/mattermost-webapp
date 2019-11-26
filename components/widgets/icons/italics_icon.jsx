// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';

export default class ItalicsIcon extends React.PureComponent {
    render() {
        return (
            <span {...this.props}>
                <svg
                    width='8'
                    height='10'
                    viewBox='0 0 8 10'
                    role='img'
                    aria-label='Italics icon'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <g
                        stroke='none'
                        strokeWidth='1'
                        fill='currentColor'
                        fillRule='evenodd'
                    >
                        <path d='M2.65625 0.65625V2.65625H4.125L1.875 8H0V10H5.34375V8H3.875L6.125 2.65625H8V0.65625H2.65625Z'/>
                    </g>
                </svg>
            </span>
        );
    }
}
