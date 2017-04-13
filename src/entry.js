import React from 'react';
import {render} from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers/index';

import Add from './containers/add';
import AddRequest from './middlewares/add';

const createStoreMiddle = applyMiddleware(AddRequest);

const Store = createStore(reducer,createStoreMiddle);

render(
    <Provider store={Store}>
        <Add />
    </Provider>,document.getElementById('app')
);