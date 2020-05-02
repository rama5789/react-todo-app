import React from 'react';
import AddTodo from '../../containers/Todo/AddTodo';
import VisibleTodoList from '../../containers/Todo/VisibleTodoList';
import TodoFooter from './TodoFooter';

const TodoPage = () => {
    return (
        <div>
            <AddTodo />
            <VisibleTodoList />
            <TodoFooter />
        </div>
    );
};

export default TodoPage;