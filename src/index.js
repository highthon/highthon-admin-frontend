import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers'

import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './App';
import { NotFound, Main } from './pages';

import * as serviceWorker from './serviceWorker';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas);

ReactDOM.render(
<Provider store={store}>
    <Router>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/main" component={Main}/>
            <Route component={NotFound}/>
        </Switch>
    </Router>
</Provider>
, document.getElementById('root'));

serviceWorker.unregister();
