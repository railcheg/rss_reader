import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import * as rssNewsActions from 'actions/rssNewsActions';
import { memoNews, filterNews } from 'reducers';

import RssList from 'components/RssList';

class RssListContainer extends Component {
    render() {
        const { rssNews, rssNewsActions } = this.props;
        return (
            <RssList
                rssNews={rssNews}
                rssNewsActions={rssNewsActions}
            />
        )
    }
};

const mapStateToProps = (state, ownProps) => ({
    rssNews: memoNews(state, ownProps)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    rssNewsActions: bindActionCreators(rssNewsActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RssListContainer);
