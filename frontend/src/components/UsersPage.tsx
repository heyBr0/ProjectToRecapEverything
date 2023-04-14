import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
interface user {
  _id: string;
  userName: string;
  email: string;
}

const UsersPage = () => {
  const [users, setUsers] = useState<user[]>([]);

  const getAllUsers = (): void => {
    fetch("http://127.0.0.1:4000/users")
      .then((res: Response) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((result) => {
        if (result.success) {
          setUsers(result.data);
        } else {
          console.log(result.message);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const createUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const newUser = {
      userName: formData.get("userName"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      const response = await fetch("http://localhost:4000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      const data = await response.json();
      if (data.success) {
        console.log(data.message);
      } else {
        toast.error(JSON.stringify(data.message));
      }
    } catch (error) {
      console.error(error);
    }
  };

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
      <Toaster position="top-center" />
    </div>
  );
};

export default UsersPage;
