import React from 'react';
import { Table, TableCell, Button, Checkbox} from 'semantic-ui-react';


const List = ({ items, complete}) => (
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Number</Table.HeaderCell>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Completion</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {
        items.map(item => (
          <Table.Row key={item.id}>
            <TableCell>{item.id}</TableCell>
            <TableCell style={ item.complete ? { ...styles.item, ...styles.complete } : styles.item }>{item.name}</TableCell>
            <Table.Cell>
              <Checkbox color='blue'  onClick={() => complete(item.id)} label={<label>Complete</label>} />
              
            </Table.Cell>
          </Table.Row>
        ))
      }
    </Table.Body>
  </Table>

)

const styles = {
  complete: { color: 'grey', textDecoration: 'line-through' },
};
export default List;