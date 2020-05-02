import { combineReducers } from 'redux';
import todosReducer from './Todo/todos';
import todosVisibilityFilterReducer from './Todo/todosVisibilityFilter';

// combine all reducers
const rootReducer = combineReducers({
    todos: todosReducer,
    todosVisibilityFilter: todosVisibilityFilterReducer
});

export default rootReducer;