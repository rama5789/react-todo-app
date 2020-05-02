import * as actionTypes from '../actionTypes';

export const addTodo = (text) => ({
    type: actionTypes.ADD_TODO,
    payload: {
        text
    }
});

export const editTodo = (id, text) => ({
    type: actionTypes.EDIT_TODO,
    payload: {
        id,
        text
    }
});

export const deleteTodo = (id) => ({
    type: actionTypes.DELETE_TODO,
    payload: {
        id
    }
});

export const toggleTodo = (id) => ({
    type: actionTypes.TOGGLE_TODO,
    payload: {
        id
    }
});