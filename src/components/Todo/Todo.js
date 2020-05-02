import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ onClick, completed, text }) => {
    const style = {
        textDecoration: completed ? 'line-through' : 'none',
        color: completed ? 'red' : 'blue'
    };

    return (
        <li onClick={onClick} style={style}>{text}</li>
    );
};

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};

export default Todo;