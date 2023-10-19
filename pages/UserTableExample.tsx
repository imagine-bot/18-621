// ./pages/UserTableExample.tsx
import { UserTable } from '../components/UserTable';

const users = [
  { name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', address: '123 Main St' },
  { name: 'Jane Doe', email: 'jane@example.com', phone: '098-765-4321', address: '456 Elm St' },
];

export default function UserTableExample() {
  return <UserTable users={users} />;
}