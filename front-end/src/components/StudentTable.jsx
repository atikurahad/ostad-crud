import React from 'react';
import Table from 'react-bootstrap/Table';


const StudentTable = () => {
    return (
        <div>
        
        <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>firstName</th>
            <th>lastName</th>
            <th>gender</th>
            <th>dateOfBirth</th>
            <th>nationality</th>
            <th>address</th>
            <th>email</th>
            <th>dmissionDate</th>
            <th>courses</th>
       
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
         
        </tbody>
      </Table>

        </div>
    );
}

export default StudentTable;
