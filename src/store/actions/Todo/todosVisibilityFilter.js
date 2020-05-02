import * as actionTypes from '../actionTypes';

export const setTodosVisibilityFilter = (filter) => ({
    type: actionTypes.SET_TODOS_VISIBILITY_FILTER,
    payload: {
        filter
    }
});