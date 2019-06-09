import { getId } from 'utils';
import * as constants from 'constants/rssNewsConstants';

export const addNews = (text) => ({
    type: constants.RSS_NEWS_ADD,
    id: getId(),
    text: text,
    completed: false
});

export const toggleNews = (id) => ({
    type: constants.RSS_NEWS_TOGGLE,
    id
});

export const updateNews = ({ id, text, completed }) => ({
    type: constants.RSS_NEWS_UPDATE,
    id,
    text,
    completed
});

export const deleteNews = (id) => ({
    type: constants.RSS_NEWS_DELETE,
    id
});
