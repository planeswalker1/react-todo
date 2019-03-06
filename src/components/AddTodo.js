import React, {Component} from 'react';

class AddTodo extends Component {
  state = {
    content: ''
  }
  // return true iff state.content.length < 1
  validateInput = () => {
    let isError = false;
    if (this.state.content.length < 1) {
      console.log('there was an error');
      console.log('length of input', this.state.content.length);
      isError = true;
    }
    return isError;
  }
  handleChange = (event) => {
    let input = document.querySelector('input');
    // update this.state.content
    this.setState({
      content: event.target.value
    });
    // remove valid or invalid class if there is any
    input.classList = '';
  }
  handleSubmit = (event) => {
    event.preventDefault();
    console.log('form submitted');
    console.log('state', this.state);
    let form = document.querySelector('form');
    // error validation
    let err = this.validateInput();
    if (!err) {
      console.log('no error');
      // call parent component function to update state
      this.props.addTodo(this.state);
      // clear form
      this.setState({
        content: ''
      });
    } else {
      console.log('there was an error');
      // set materialize css class for error
      form.todo.classList.add('invalid');
    }
    return;
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
                name="todo"
                placeholder="Enter a todo"
                onChange={this.handleChange}
                value={this.state.content}
              />
              <label htmlFor="todo">Todo</label>
              <span
                className="helper-text"
                data-error="Please enter a valid todo"
                data-success="success"
              >Helper text</span>
            </div>
          </div>
          <button className="btn waves-effect waves-light" type="submit">
            Submit
            <i title="Add todo" className="material-icons right">send</i>
          </button>
        </form>
      </div>
    );
  }
};

export default AddTodo;