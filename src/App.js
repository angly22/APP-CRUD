import React, { useState } from "react";
import UserTable from "./components/UserTable";
import usersData from "./components/usersData";
import { v4 as uuidv4 } from "uuid";
import AddUserForm from "./components/AddUserForm";
import EditUserForm from "./components/EditUserForm";
import crudapp from "./crudapp.png";
export default function App() {
  //state
  const [users, setUsers] = useState(usersData);

  //add users
  const addUser = (user) => {
    //mi funcion que envia los dato
    user.id = uuidv4(); // le asigno un id llamando a la func
    setUsers([
      ...users, //me traigo los usuarios anteriones
      user, // mas el usuario que le entra por props
    ]);
  };

  // delete users
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  //edit users
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    id: null,
    name: " ",
    userName: " ",
  });

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id,
      name: user.name,
      username: user.username,
    });
  };

  const updateUser = (id, updateUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updateUser : user)));
  };

  return (
    <div className="container">
      <img src={crudapp} width="250" height="250" alt=""></img>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit User</h2>
              <EditUserForm currentUser={currentUser} updateUser={updateUser} />
            </div>
          ) : (
            <div>
              <h2>Add User</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View Users</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
      </div>
    </div>
  );
}
