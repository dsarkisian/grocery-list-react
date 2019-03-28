import React, { Component } from 'react';
import {Form, Button} from 'semantic-ui-react';

class ListForm extends Component {
  state = { name: '' }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.add(this.state)
    this.setState({name: ''})
  }

  handleChange = (e) => {
      const {name, value} = e.target
    this.setState({ [name]: value })
  }
 
  render() {
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
            <label>Item</label>
            <input
                //placeholder= 'Item'
                name='itemName'
                value={this.state.name}
                onChange={this.handleChange}
            />
        </Form.Field>
        <Button type= 'submit'>Add</Button>    

      </Form>
    )
  }
}

export default ListForm;