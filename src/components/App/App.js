import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import lang from 'lang';

import './App.css';

import AddFormContainer from 'containers/AddFormContainer';
import FilterPanel from 'components/FilterPanel';
import RssListContainer from 'containers/RssListContainer';
import SettignsArea from 'components/SettingsArea';

const App = (props, context) => {
    return (
        <div className="RssApp">
            <Helmet htmlAttributes={{ lang: context.lang }}></Helmet>
            <SettignsArea />
            <AddFormContainer />
            <FilterPanel />
            <RssListContainer />
        </div>
    )
};

lang.injectLangContextTypes(App);

export default App;
