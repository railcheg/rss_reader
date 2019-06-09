import * as constants from 'constants/rssNewsConstants';
import createReducer from './createReducer';


export const todo = createReducer({}, {
    [constants.RSS_NEWS_ADD](state, action) {
        return {
            id: action.id,
            text: action.text,
            completed: false
        };
    },

    [constants.RSS_NEWS_TOGGLE](state, action) {
        if (state.id !== action.id) {
            return state;
        };

        return {
            ...state,
            completed: !state.completed
        };
    }
});


export const rssNewsById = createReducer({}, {
    [constants.RSS_NEWS_ADD](state, action) {
        return {
            ...state,
            [action.id]: todo(state[action.id], action)
        };
    },

    [constants.RSS_NEWS_TOGGLE](state, action) {
        return {
            ...state,
            [action.id]: todo(state[action.id], action)
        };
    },

    [constants.RSS_NEWS_DELETE](state, action) {
        let curState = Object.assign({}, state);
        delete curState[action.id];
        return curState;
    }
});


export const rssNewsIds = createReducer([], {
    [constants.RSS_NEWS_ADD](state, action) {
        return [...state, action.id];
    },

    [constants.RSS_NEWS_DELETE](state, action) {
        return state.filter(id => id !== action.id);
    }
});
