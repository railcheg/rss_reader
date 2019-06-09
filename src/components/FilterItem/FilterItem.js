import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import lang from 'lang';

import './FilterItem.css';
import Control from 'components/Controls';

const FilterItem = (props, context) => {
    return (
        <div className='FilterItem'>
            <Control
                text={context.locale(props.text)}
                value={props.filter}
                type='radio'
                name='todo-filter'
                checked={props.isActive}
                onChange={props.onChange}
            />
            <div className='FilterItem-Count'>
                {props.count}
            </div>
        </div>
    );
};

lang.injectLangContextTypes(FilterItem);

export default FilterItem
