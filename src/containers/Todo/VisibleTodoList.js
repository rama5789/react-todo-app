import { connect } from 'react-redux';
import { TodosVisibilityFilters } from '../../store/constants';
import { todosAction } from '../../store/actions';
import TodoList from '../../components/Todo/TodoList';

const getVisibleTodos = (todos, filter) => {
    const {
        SHOW_ALL_TODOS,
        SHOW_ACTIVE_TODOS,
        SHOW_COMPLETED_TODOS
    } = TodosVisibilityFilters;

    switch (filter) {
        case SHOW_ALL_TODOS: return todos;
        case SHOW_COMPLETED_TODOS: return todos.filter(todo => todo.completed);
        case SHOW_ACTIVE_TODOS: return todos.filter(todo => !todo.completed);
        default: throw new Error('Unknown filter: ' + filter);
    }
};

const mapStateToProps = (currentState) => {
    const { todos, todosVisibilityFilter } = currentState;
    const updatedProps = {
        todos: getVisibleTodos(todos, todosVisibilityFilter)
    };
    return updatedProps;
};

const mapDispatchToProps = (dispatch) => {
    const { toggleTodo, deleteTodo, editTodo } = todosAction;
    const updatedProps = {
        editTodo: (id, text) => dispatch(editTodo(id, text)),
        deleteTodo: (id) => dispatch(deleteTodo(id)),
        toggleTodo: (id) => dispatch(toggleTodo(id))
    };
    return updatedProps;
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);