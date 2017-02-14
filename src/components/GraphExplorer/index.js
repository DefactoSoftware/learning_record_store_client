import React from 'react';
import { ListGroup, ListGroupItem, PageHeader } from 'react-bootstrap';

import CSS from './style.css';

export default ({ data: { loading, statements }})=> {
  return (
    <div className={CSS.GrapExplorer}>
      <PageHeader>Graph Explorer</PageHeader>
      {loading
        ? (<p>Loading statements...</p>)
        : (
          <ListGroup>
            {statements.map(({ id, actor: { mbox }, object: { id: objectId }, verb: { id: verbId } })=> {
              const verb = verbId.split('/')[verbId.split('/').length - 1];

              return (
                <ListGroupItem key={id}>
                  <p>{mbox} {verb} {objectId}</p>
                </ListGroupItem>
              );
            })}
          </ListGroup>
        )
      }
    </div>
  );
}
