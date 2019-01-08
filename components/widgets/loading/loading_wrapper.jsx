// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import PropTypes from 'prop-types';
import React from 'react';

import LoadingSpinner from './loading_spinner.jsx';

export default class LoadingWrapper extends React.Component {
    static propTypes = {

        /** Show or not the loading spinner and text */
        loading: PropTypes.bool.isRequired,

        /** Text to show aside the spinner while loading */
        text: PropTypes.string,

        /** Content to show while is not loading */
        children: PropTypes.node,
    }

    static defaultProps = {
        loading: true,
        text: '',
        children: '',
    }

    render() {
        const {text, loading, children} = this.props;
        if (!loading) {
            return children;
        }

        return <LoadingSpinner text={text}/>;
    }
}
