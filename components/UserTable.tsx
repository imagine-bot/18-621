// ./components/UserTable.tsx
import React, { useState } from 'react';

type User = {
  name: string;
  email: string;
  phone: string;
};

type Props = {
  users: User[];
};

export const UserTable: React.FC<Props> = ({ users }) => {
  const [filter, setFilter] = useState('');
  const [tableData, setTableData] = useState(users);

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
    const filteredData = users.filter(user =>
      user.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setTableData(filteredData);
  };

  const handleAddUser = () => {
    setTableData([...tableData, { name: '', email: '', phone: '' }]);
  };

  return (
    <div>
      <input type="text" value={filter} onChange={handleFilterChange} />
      <button onClick={handleAddUser}>Add User</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};