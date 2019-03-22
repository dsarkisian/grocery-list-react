import React, { Component } from 'react';
import { Container, Header, Button, Table } from 'semantic-ui-react';
import './App.css';
import List from './list/List';

class App extends Component {

  state = {
    groceryItems: [
      {id: 1, name: 'Milk', complete: false},
      {id: 2, name: 'Bread', complete: false},
      {id: 3, name: 'Apple', complete: false}
    ],
  }

  completeItem = (id) => {
    const { groceryItems } = this.state;
    this.setState({
      groceryItems: groceryItems.map( item => {
        if (item.id === id) {
          return {
            ...item,
            complete: !item.complete
          }
        }
        return item
      })
    })
  }

  render() {
    const {groceryItems } = this.state
    return (
      <Container>
        <Header as='h1'>Grocery List</Header>
        <p>Current List: </p>
        <List groceryItems={groceryItems} complete={this.completeItem} />
      </Container>
    );
  }
}

export default App;
