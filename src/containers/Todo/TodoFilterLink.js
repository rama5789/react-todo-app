import { connect } from 'react-redux';
import { todosVisibilityFilterAction } from '../../store/actions';
import Link from '../../components/UI/Link';

const mapStateToProps = (currentState, currentProps) => {
    const isLinkClicked = currentProps.filter === currentState.todosVisibilityFilter;
    const updatedProps = {
        active: isLinkClicked
    };
    return updatedProps;
};

const mapDispatchToProps = (dispatch, currentProps) => {
    const { setTodosVisibilityFilter } = todosVisibilityFilterAction;
    const updatedProps = {
        onClick: () => dispatch(setTodosVisibilityFilter(currentProps.filter))
    };
    return updatedProps;
};

export default connect(mapStateToProps, mapDispatchToProps)(Link);