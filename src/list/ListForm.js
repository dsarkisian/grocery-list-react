import React, {Component} from 'react'; 
import {Button, Form} from 'semantic-ui-react';

class ListForm extends Component {
  state = { name: ""};

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.add(this.state);
    this.setState({ name: "", });
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value, });
  }; 

  render() {

    const {name} = this.state

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input 
            fluid 
            label="Add a grocery item" 
            placeholder="Item" 
            name="name" 
            value={name} 
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button>Submit</Button>
      </Form>
    )  
  }
}

export default ListForm;