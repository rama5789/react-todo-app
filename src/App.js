import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import TodoPage from './components/Todo/TodoPage';
import UserPage from './components/User/UserPage';
import NotFoundPage from './components/NotFoundPage';
import configureStore from './store/configureStore';

// configure redux store
const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li><Link to='/'>Todos</Link></li>
              <li><Link to='/users'>Users</Link></li>
            </ul>
          </nav>
          <Switch>
            <Route exact path='/' component={TodoPage} />
            <Route path='/users' component={UserPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
