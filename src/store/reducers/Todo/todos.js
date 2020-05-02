import * as actionTypes from '../../actions/actionTypes';

/* initial "todos" state */
const initialState = [];
/* const initialState = [{
    id: 0,
    text: 'Laundry',
    completed: false
}, {
    id: 1,
    text: 'Check Email',
    completed: false
}]; */

const addTodo = (currentState, action) => {
    const { text } = action.payload;
    let nextTodoId = 0;

    if (currentState.length) {
        const lastTodoId = currentState[currentState.length - 1].id;
        nextTodoId = lastTodoId + 1;
    }
    const newTodo = {
        id: nextTodoId,
        text,
        completed: false
    };
    const updatedState = [...currentState, newTodo];
    return updatedState;
};

const editTodo = (currentState, action) => {
    const editTodoId = action.payload.id;
    const updatedState = currentState.map(todo => {
        if (todo.id === editTodoId) {
            const updatedTodo = {
                ...todo,
                ...action.payload
            };
            return updatedTodo;
        } else {
            return todo;
        }
    });
    return updatedState;
};

const deleteTodo = (currentState, action) => {
    const deleteTodoId = action.payload.id;
    const updatedState = currentState.filter(todo => todo.id !== deleteTodoId);
    return updatedState;
};

const toggleTodo = (currentState, action) => {
    const toggleTodoId = action.payload.id;
    const updatedState = currentState.map(todo => {
        if (todo.id === toggleTodoId) {
            const updatedTodo = {
                ...todo,
                completed: !todo.completed
            };
            return updatedTodo;
        } else {
            return todo;
        }
    });
    return updatedState;
};

/* Reducer */
const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TODO: return addTodo(state, action);
        case actionTypes.EDIT_TODO: return editTodo(state, action);
        case actionTypes.DELETE_TODO: return deleteTodo(state, action);
        case actionTypes.TOGGLE_TODO: return toggleTodo(state, action);
        default: return state;
    }
}

export default todosReducer;