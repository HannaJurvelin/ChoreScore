import { useEffect, useState } from "react";
import { getUsers } from "../supabase/getters";
import { useSelector, useDispatch } from "react-redux";
import { setUsers as setStoreUsers, setActiveUser } from "../store/usersSlice";

function Users() {
  const storeUser = useSelector((state) => state.users.value);
  const dispatch = useDispatch();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchChores() {
      const Users = await getUsers();
      setUsers(Users);
      dispatch(setStoreUsers(Users));
      dispatch(setActiveUser(Users[0].id));
    }
    fetchChores();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <input
              type="radio"
              name="user"
              value={user.name}
              id={user.name}
              checked={storeUser.find(
                (storeUser) => storeUser.id === user.id && storeUser.active
              )}
              onChange={() => {
                dispatch(setActiveUser(user.id));
              }}
            />
            <label htmlFor={user.name}>
              {user.name} {user.points}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
