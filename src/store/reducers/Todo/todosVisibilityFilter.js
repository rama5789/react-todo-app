import * as actionTypes from '../../actions/actionTypes';
import { TodosVisibilityFilters } from '../../constants';

/* initial "todosVisibilityFilter" state */
const initialState = TodosVisibilityFilters.SHOW_ALL_TODOS;

const setTodosVisibilityFilter = (currentState, action) => {
    const updatedState = action.payload.filter;
    return updatedState;
};

/* Reducer */
const todosVisibilityFilterReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_TODOS_VISIBILITY_FILTER:
            return setTodosVisibilityFilter(state, action);
        default: return state;
    }
}

export default todosVisibilityFilterReducer;