import React from 'react';
import { connect } from 'react-redux';

import { addNews } from 'actions/rssNewsActions';
import AddForm from 'components/AddForm';

const mapDispatchToProps = (dispatch, ownProps) => ({
    onSubmit: text => dispatch(addNews(text))
})

export default connect(
    null,
    mapDispatchToProps,
    // null,
    // { pure: false }
)(AddForm);
