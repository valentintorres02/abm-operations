import React from 'react';
import '../../../App.css';

function TableItem({
  id, concept, amount, date, type, administrableOperations
}) {
  return (
    <>
      <tr>
        <th scope="row">{id}</th>
        <td>{concept}</td>
        <td>${amount}</td>
        <td>{date}</td>
        <td>{type}</td>
        {administrableOperations ?
          <td>
            <a href={`/edit-operation/${id}`}>
              <button type="button" className="btn btn-primary">Editar</button>
            </a>
            <button type="button" className="btn btn-danger">Eliminar</button>
          </td>
          : null}
      </tr>
    </>
  );
}

export default TableItem;
