import React from 'react';
import PropTypes from 'prop-types';

import lang from 'lang';

import Control from 'components/Controls';
import './News.css';

const News = (props, context) => {
    const { locale } = context;
    return (
        <div className={'News' + (props.completed ? ' News--Completed' : '')}>
            <Control
                className='News-StatusIcon'
                value={props.status}
                type='checkbox'
                checked={props.completed}
                onChange={props.onChange}
            />
            <div className='News-Text'>{props.children}</div>
            <button className='News-Delete'
                title={locale('delete-link')}
                type='button'
                onClick={props.onDelete}
            ></button>
        </div>
    );
};

lang.injectLangContextTypes(News);

export default News;
