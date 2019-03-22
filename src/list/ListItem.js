import React from 'react';
import List from 'List.js';

const styles = {
  todo: {
    cursor: 'pointer',
  },
  complete: {
    color: 'grey',
    textDecoration: 'line-through',
  },
}

const ListItem = ({ id, name, complete }) => (
  <li> 
  style={ complete ? { ...styles.ListItem, ...styles.complete } : styles.ListItem }
   onClick={ () => ListItemClick(id)}
    { name }
  </li>
)

export default ListItem;


