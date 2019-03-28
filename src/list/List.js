import React from 'react';
import ListItem from './ListItem';

import { Table } from 'semantic-ui-react';

const List = ({ groceryItems, completion }) => (
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Completion</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {
        groceryItems.map(item => (
          <ListItem key={item.id} {...item} completion={completion}/>
        ))
      }
    </Table.Body>
  </Table>
)

export default List

