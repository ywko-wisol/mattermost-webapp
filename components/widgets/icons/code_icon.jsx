// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';

export default class CodeIcon extends React.PureComponent {
    render() {
        return (
            <span {...this.props}>
                <svg
                    width='14'
                    height='8'
                    viewBox='0 0 14 8'
                    role='img'
                    aria-label='Code icon'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <g
                        stroke='none'
                        strokeWidth='1'
                        fill='currentColor'
                        fillRule='evenodd'
                    >
                        <path d='M8.71875 7.0625L11.8125 4L8.71875 0.9375L9.65625 0L13.6562 4L9.65625 8L8.71875 7.0625ZM5.28125 7.0625L2.1875 4L5.28125 0.9375L4.34375 0L0.34375 4L4.34375 8L5.28125 7.0625Z'/>
                    </g>
                </svg>
            </span>
        );
    }
}
