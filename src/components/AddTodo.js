import React, {Component} from 'react';

class AddTodo extends Component {
  state = {
    content: ''
  }
  handleChange = (event) => {
    // update this.state.content
    this.setState({
      content: event.target.value
    });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    console.log('form submitted');
    console.log(this.state);
  }
  render() {
    return (
      <div className="row">
        <form className="col s12" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <input
                type="text"
                id="todo"
                className="validate"
                placeholder="Enter a todo"
                onChange={this.handleChange}
                value={this.state.content}
              />
              <label htmlFor="todo">Todo</label>
              <span
                className="helper-text"
                data-error="Please enter a valid todo"
              >Helper text</span>
            </div>
          </div>
          <button className="btn waves-effect waves-light" type="submit">
            Submit
            <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
    );
  }
};

export default AddTodo;