import React from 'react';
import { connect } from 'react-redux';
import { todosAction } from '../../store/actions';

const AddTodo = ({ dispatch }) => {
    let todoTextInput;

    const dispatchAddTodo = (e) => {
        e.preventDefault();
        const { addTodo } = todosAction;

        if (!todoTextInput.value.trim()) {
            return;
        }
        dispatch(addTodo(todoTextInput.value));
        todoTextInput.value = '';
    };

    return (
        <div>
            <form onSubmit={dispatchAddTodo}>
                <input ref={(node) => todoTextInput = node} />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    );
};

export default connect()(AddTodo);