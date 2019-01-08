// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import PropTypes from 'prop-types';

const Setting = (props) => {
    const {
        children,
        footer,
        helpText,
        inputId,
        label,
        labelClassName,
        inputClassName,
    } = props;

    return (
        <div className='form-group'>
            <label
                className={'control-label ' + labelClassName}
                htmlFor={inputId}
            >
                {label}
            </label>
            <div className={inputClassName}>
                {children}
                <div className='help-text'>
                    {helpText}
                </div>
                {footer}
            </div>
        </div>
    );
};

Setting.propTypes = {

    /** for attribute of the label to bind it to the input field */
    inputId: PropTypes.string,

    /** Text to show as label */
    label: PropTypes.node.isRequired,

    /** Extra class names to add to the label */
    labelClassName: PropTypes.string,

    /** Extra class names to add to the input container */
    inputClassName: PropTypes.string,

    /** Input field */
    children: PropTypes.node.isRequired,

    /** Text with the help information of the setting */
    helpText: PropTypes.node,

    /** Text to show at the very end of the setting */
    footer: PropTypes.node,
};

export default Setting;
