import * as constants from 'constants/filterConstants';

export const filterChange = (filter) => ({
    type: constants.RSS_NEWS_FILTER_CHANGE,
    filter
});
