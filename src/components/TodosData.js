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
                <div className="p">
                    <
                        input type="checkbox" 
                        checked = {this.props.todo.Completed}
                        onChange={this.props.toggleComplete.bind(this, id)}
                    />
                        <p>{title}</p>
                        <select 
                            onChange={this.props.assignTo.bind(this.id)}
                            name="Assign to:"
                            >
                                <option value="">Assign to..</option>
                                <option value="teresa">Teresa</option>
                                <option value="candy">Candy</option>
                                <option value="ortiz">Ortiz</option>
                                <option value="jesus">Jesus</option>
                        </select>
                        <button onClick={this.props.delButton.bind(this, id)}>X</button>
                </div>
            </div>
        );
    }
}

TodosData.propTypes = {
    todos: PropTypes.object.isRequired
}

export default TodosData
