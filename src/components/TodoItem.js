import React, {Component} from 'react';
import TodosData from './TodosData';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    
    render() {
        return this.props.todos.map((todo) => (
            <
                TodosData key={todo.id} 
                todo={todo}
                toggleComplete={this.props.toggleComplete}
                assignTo = {this.props.assignTo}
                delButton = {this.props.delButton}
            />
        ));
    }
}

TodoItem.propTypes = {
    todos: PropTypes.array.isRequired
}
export default TodoItem;