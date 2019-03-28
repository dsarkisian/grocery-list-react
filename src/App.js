import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';
import ListForm from "./list/ListForm";
import List from './list/List';

class App extends Component {

  state = {
    groceryItems: [
      {id: 1, name: 'Milk', complete: false},
      {id: 2, name: 'Bread', complete: false},
      {id: 3, name: 'Apple', complete: false}
    ],
  }

  getId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  addItem = (itemData) => {
    let item = { id: this.getId(), ...itemData, };
    this.setState({ groceryItems: [item, ...this.state.groceryItems], });
  };

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
        <List groceryItems={groceryItems} completion={this.completeItem} />
        <ListForm add={this.addItem}/>
      </Container>
    );
  }
}

export default App;
