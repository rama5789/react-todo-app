import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({ todos, editTodo, deleteTodo, toggleTodo }) => {
    return (
        <ol>
            {todos.map(todo => {
                const { id, text } = todo;
                return (
                    <div key={id}>
                        <Todo key={id} {...todo} onClick={() => toggleTodo(id)} />
                        <button onClick={() => editTodo(id, text)}>edit</button>
                        <button onClick={() => deleteTodo(id)}>remove</button>
                    </div>
                );
            })}
        </ol>
    );
};

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    editTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    toggleTodo: PropTypes.func.isRequired
};

export default TodoList;
