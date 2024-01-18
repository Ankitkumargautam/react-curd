import axios from 'axios';
import React, { useEffect, useState } from 'react';

const TableComponent = ({ currentId, setCurrentId, setUpdateData }) => {
  const [empData, setEmpData] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get('/api/getEmp');
      setEmpData(data);
    })();
  }, [currentId]);

  const handleUpdate = (e, id, updateObj) => {
    e.preventDefault();
    setCurrentId(id);
    setUpdateData(updateObj);
  };
  const handleDelete = async (e, id) => {
    const { data } = await axios.delete(`/api/deleteEmp/${id}`);
    console.log('delete:', data);
    setEmpData(empData.filter((emp) => emp._id !== data._id));
  };
  return (
    <table>
      <thead>
        <tr>
          <th>sno</th>
          <th>Name</th>
          <th>email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {empData.map((emp, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{emp.name}</td>
            <td>{emp.email}</td>
            <td>
              <button
                onClick={(e) =>
                  handleUpdate(e, emp._id, { name: emp.name, email: emp.email })
                }
              >
                Update
              </button>
              |<button onClick={(e) => handleDelete(e, emp._id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
