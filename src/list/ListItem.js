import React from 'react';
//import List from 'List.js';
import { Checkbox, Header, Button, Icon } from 'semantic-ui-react';



const ListItem = ({ id, name, complete, updateListItem, deleteListItem }) => (
  <div style={styles.flex}>
    <div>
      <Checkbox
        defaultChecked={complete}
        onClick={ () => updateListItem(id) }
      />
      <div style={complete ? styles.complete : {} } className='center'>
        <Header>{ name }</Header>
      </div>
    </div>
    <Button
      onClick={ () => deleteListItem(id) }
      icon
      size='tiny'
      color='red'
    >
      <Icon name="trash"/>
    </Button>
  </div>
)

const styles = {
    todo: {
        cursor: 'pointer',
      },
    complete: {
      textDecoration: 'line-through',
      color: 'grey',
    },
    flex: {
      display: 'flex',
      alignItems: 'center',
    },
  }
  
export default ListItem;


