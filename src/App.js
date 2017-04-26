import 'babel-polyfill';
import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { ReduxAsyncConnect } from 'redux-connect';
import { Home } from 'src/containers';
import { configureStore } from './store';

const App = ({
  initialState,
  enhancers
}) => {
  const store = configureStore({ initialState, enhancers });
  return (
    <Provider store={store} key="provider">
      <Router history={browserHistory} render={(props) => <ReduxAsyncConnect {...props} />}>
        <Route path="/" component={Home} />
      </Router>
    </Provider>
  );
};

App.propTypes = {
  initialState: PropTypes.object,
  enhancers: PropTypes.func
};
export default App;
