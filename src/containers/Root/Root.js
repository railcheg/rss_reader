import React from 'react';
import { Provider } from 'react-redux';

import 'normalize.css/normalize.css';
import App from 'components/App';
import lang from '../../lang';

const Root = ({ store }) => {
    return (
        <Provider store={store}>
            <lang.Provider>
                <App />
            </lang.Provider>
        </Provider>
    );
}

export default Root;
