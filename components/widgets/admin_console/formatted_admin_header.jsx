// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import PropTypes from 'prop-types';

import AdminHeader from 'components/widgets/admin_console/admin_header.jsx';
import FormattedMarkdownMessage from 'components/formatted_markdown_message';

const FormattedAdminHeader = (props) => (
    <AdminHeader>
        <FormattedMarkdownMessage
            id={props.id}
            defaultMessage={props.defaultMessage}
            values={props.values}
        />
    </AdminHeader>
);

FormattedAdminHeader.propTypes = {

    /** Translation id of the text to be shown */
    id: PropTypes.string.isRequired,

    /** Default string to be shown when the translation is not found */
    defaultMessage: PropTypes.string.isRequired,

    /** Values to fill in translation string placeholders */
    values: PropTypes.object,
};

FormattedAdminHeader.defaultProps = {
    values: {},
};

export default FormattedAdminHeader;
