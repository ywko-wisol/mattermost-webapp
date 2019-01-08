// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {IntlProvider} from 'react-intl';
import {Router} from 'react-router-dom';

import {browserHistory} from 'utils/browser_history';

export default class StyleGuideWrapper extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
    };

    render() {
        return (
            <Router history={browserHistory}>
                <IntlProvider locale='en'>{this.props.children}</IntlProvider>
            </Router>
        );
    }
}
