import { combineReducers } from 'redux';
import { rssNewsById, rssNewsIds } from './rssNews';
import { filter } from './filter';
import { lang } from './lang';
import * as filterTypes from 'constants/filterConstants';
import { createSelector } from 'reselect'

// rssNews selector
const getAllNews = (state) => {
    return state.rssNewsIds.map(id => state.rssNewsById[id]);
};

const getNews = (state, props) => getAllNews(state);
const getFilterFromState = (state, props) => state.filter;
const getFilterFromProps = (state, props) => props.filter;

const getMemoFilteredNews = (allNews, filter) => {
    switch(filter) {
        case 'COMPLETED':
            return allNews.filter(todo => todo.completed);

        case 'ACTIVE':
            return allNews.filter(todo => !todo.completed);

        case 'ALL':
            return allNews;
        default:
            return allNews;
    }
};

const memoNews = createSelector(
    [getNews, getFilterFromState],
    getMemoFilteredNews
);

const memoFilter = createSelector(
    [getNews, getFilterFromProps],
    getMemoFilteredNews
);

const rootReducer = combineReducers({
    rssNewsById,
    rssNewsIds,
    filter,
    lang
});

export default rootReducer;
export { memoNews, memoFilter };
