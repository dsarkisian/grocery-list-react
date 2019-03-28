import React from 'react';
import { Table, Checkbox } from 'semantic-ui-react';

const ListItem = ({ id, name, complete, completion}) => (
  <Table.Row key={id}>
  <Table.Cell style={complete ? styles.complete : {} }>{name}</Table.Cell>
  <Table.Cell>
    <Checkbox  color='blue' onClick={() => completion(id)} label={<label>Completed</label>} />
  </Table.Cell>
</Table.Row>
)

const styles = {
  complete: { color: 'grey', textDecoration: 'line-through' },
};

export default ListItem;
