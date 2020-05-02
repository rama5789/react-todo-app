import React from 'react';
import { TodosVisibilityFilters } from '../../store/constants';
import TodoFilterLink from '../../containers/Todo/TodoFilterLink';

const TodoFooter = () => {
    const {
        SHOW_ALL_TODOS,
        SHOW_ACTIVE_TODOS,
        SHOW_COMPLETED_TODOS
    } = TodosVisibilityFilters;

    return (
        <div>
            <span>Show: </span>
            <TodoFilterLink filter={SHOW_ALL_TODOS}>All</TodoFilterLink>
            <TodoFilterLink filter={SHOW_ACTIVE_TODOS}>Active</TodoFilterLink>
            <TodoFilterLink filter={SHOW_COMPLETED_TODOS}>Completed</TodoFilterLink>
        </div>
    );
};

export default TodoFooter;