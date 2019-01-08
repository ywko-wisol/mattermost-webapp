// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import PropTypes from 'prop-types';
import React from 'react';

import Setting from './setting.jsx';

export default class TextSetting extends React.Component {
    static propTypes = {

        /** id attribute of the input field */
        id: PropTypes.string.isRequired,

        /** Text to show as label */
        label: PropTypes.node.isRequired,

        /** Extra class names to add to the label */
        labelClassName: PropTypes.string,

        /** Placeholder for the input field */
        placeholder: PropTypes.string,

        /** Text with the help information of the setting */
        helpText: PropTypes.node,

        /** Text to show at the very end of the setting */
        footer: PropTypes.node,

        /** Value in the input field */
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]).isRequired,

        /** Extra class names to add to the input container */
        inputClassName: PropTypes.string,

        /** Max length of the input field */
        maxLength: PropTypes.number,

        /** Allow to resize the input field */
        resizable: PropTypes.bool,

        /** Function executed for each change in the input field */
        onChange: PropTypes.func,

        /** Disable the input field */
        disabled: PropTypes.bool,

        /** Input field type */
        type: PropTypes.oneOf([
            'input',
            'textarea',
            'number',
            'email',
            'tel',
            'url',
        ]),
    };

    static defaultProps = {
        labelClassName: '',
        inputClassName: '',
        type: 'input',
        maxLength: null,
        resizable: true,
    };

    handleChange = (e) => {
        if (this.props.type === 'number') {
            this.props.onChange(this.props.id, parseInt(e.target.value, 10));
        } else {
            this.props.onChange(this.props.id, e.target.value);
        }
    }

    render() {
        const {resizable} = this.props;
        let {type} = this.props;
        let input = null;

        if (type === 'textarea') {
            const style = {};
            if (!resizable) {
                style.resize = 'none';
            }

            input = (
                <textarea
                    id={this.props.id}
                    style={style}
                    className='form-control'
                    rows='5'
                    placeholder={this.props.placeholder}
                    value={this.props.value}
                    maxLength={this.props.maxLength}
                    onChange={this.handleChange}
                    disabled={this.props.disabled}
                />
            );
        } else {
            type = ['input', 'email', 'tel', 'number', 'url'].includes(type) ? type : 'input';

            input = (
                <input
                    id={this.props.id}
                    className='form-control'
                    type={type}
                    placeholder={this.props.placeholder}
                    value={this.props.value}
                    maxLength={this.props.maxLength}
                    onChange={this.handleChange}
                    disabled={this.props.disabled}
                />
            );
        }

        return (
            <Setting
                label={this.props.label}
                labelClassName={this.props.labelClassName}
                inputClassName={this.props.inputClassName}
                helpText={this.props.helpText}
                inputId={this.props.id}
                footer={this.props.footer}
            >
                {input}
            </Setting>
        );
    }
}
