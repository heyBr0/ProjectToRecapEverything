import React, { useState } from "react";

interface user {
  _id: string;
  userName: string;
  email: string;
}

const UsersPage = () => {
  const [users, setUsers] = useState<user[]>([]);

  const getAllUsers = (): void => {
    fetch("http://localhost:4000/users/")
      .then((res: Response) => res.json())
      .then((result) => {
        if (result.success) {
          setUsers(result.data);
        } else {
          console.log(result.message);
        }
      });
  };


  const createUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const formData = new FormData(e.currentTarget);
  
    try {
      const response = await fetch("/users", {
        method: "POST",
        body: formData,
      });
  
      const data = await response.json();
      if (data.success) {
        console.log(data.message);
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };
  


/*   const createUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    try {
      const response = await fetch("http://localhost:4000/users/", {
        method: "POST",
        body: data,
      });
      const result = await response.json();

      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }; */

  /*    const createUser = (e: any) => {
    e.preventDefault();

    const data = new FormData(e.target);

    fetch("http://localhost:4000/users/", {
      method: "POST",
      body: data,
    
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          console.log(result.message);
        } else {
          console.log(result.message);
        }
      });
  };  */

  return (
    <div>
      <h1>UsersPage</h1>
      <h2>Create new User:</h2>
      <form onSubmit={createUser}>
        <label>userName:</label>
        <input type="text" name="userName" required />
        <br />
        <label>email:</label>
        <input type="email" name="email" required />
        <br />
        <label>password:</label>
        <input type="password" name="password" required />
        <br />
        <button>Create User</button>
      </form>
      <button onClick={() => getAllUsers()}>Get users</button>
      <p>{users.length}</p>
      <div>
        {users.map((user) => (
          <ul key={user._id}>
            <li>{user.userName}</li>
            <li>{user.email}</li>
            <li>{user._id}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
