import React, { Component } from 'react';
import { Container, Header, Button, Table } from 'semantic-ui-react';
import './App.css';
import List from './list/List';
import ListForm from './list/ListForm';



class App extends Component {

  state = {
    items: [
      {id: 1, name: 'Milk', complete: false},
      {id: 2, name: 'Bread', complete: false},
      {id: 3, name: 'Apple', complete: false}
    ],
    showForm: true
  }
toggleForm = () => {
  this.setState({showForm: !this.state.showForm})
}

  addItem= (itemData) => {
    let item={id: this.getId(), ...itemData}
    this.setState({items: [item, ...this.state.items]})
  }

  getId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1)
  }

  removeItem = (id) => {
    const items = this.state.items.filter( item => {
      if (item.id !== id )
        return item
    })
    this.setState({ items: [...items]})
  }

  completeItem = (id) => {
    const { items } = this.state;
    this.setState({
      items: items.map( item => {
        if (item.id === id) {
          return {
            ...item,
            complete: !item.complete
            //Add_item:
          }
        }
        return item
      })
    })
  }

  renderListForm = () => {
    
    return <ListForm/>
  }
      
  render() {
    
    const {items, showForm } = this.state
    return (
      <Container>
        <Header as='h1'>Bob's Grocery List</Header>
        <List items={items} complete={this.completeItem} />
        <>
          <Button icon color='brown' onClick={this.toggleForm}>
            Add Item
          </Button>
          { showForm ? <ListForm add={this.addItem} /> : null } 
        </>
        <br />
      </Container>
    );
  }
}


export default App;
