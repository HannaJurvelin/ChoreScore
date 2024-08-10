import { useEffect, useState } from "react";
import { getUsers } from "../supabase/getters";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchChores() {
      const Users = await getUsers();
      setUsers(Users);
    }
    fetchChores();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} {user.points}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
