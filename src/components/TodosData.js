import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodosData extends Component {
    getStyle = () => {
        if(this.props.todo.Completed) {
            return {
                textDecoration:'line-through',
            }
        } else {
            return{
                textDecoration:'none'
            }
        }
    }

    render() {
        const {id, title} = this.props.todo;

        return(
            <div style={this.getStyle()}>
                <p>
                    <
                        input type="checkbox" 
                        checked = {this.props.todo.Completed}
                        onChange={this.props.toggleComplete.bind(this, id)}
                    />
                        {title}
                        <button onClick={this.props.delButton.bind(this, id)}>X</button>
                </p>
            </div>
        );
    }
}

TodosData.propTypes = {
    todos: PropTypes.object.isRequired
}

export default TodosData
