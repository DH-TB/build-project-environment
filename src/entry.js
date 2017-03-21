import React,{component} from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers';
import Add from './components/add';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <Add />
    </Provider>,document.getElementById('app'));