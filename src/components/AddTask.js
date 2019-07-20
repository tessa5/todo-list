import React, {Component} from 'react'

class AddTask extends Component {
    state = {
        title:''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: ''})
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value});

    render(){
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    type="text"
                    name="title" 
                    placeholder="Add Task..." 
                    style={{flex:'10'}}  
                    value={this.state.title}    
                    onChange={this.onChange}
                />
                <input
                    type="submit"
                    value="Submit"
                    className="bttn"
                    style={{flex:'1'}}
                />
            </form>
        )
    }
    
}

export default AddTask
