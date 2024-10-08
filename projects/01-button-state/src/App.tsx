import { useEffect, useState } from "react";
import "./App.css";
import { Card } from "./components";
import { UserService } from "./services";

function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const userService = new UserService();
    userService.getUsers().then((usersData) => setUsers(usersData));
  }, []);

  return (
    <section className="app">
      {users.map(({ username, name, initialIsFollowing, avatarUrl }) => (
        <Card
          key={username}
          username={username}
          name={name}
          isFollowing={initialIsFollowing}
          avatarUrl={avatarUrl}
        ></Card>
      ))}
    </section>
  );
}

export default App;

export interface User {
  username: string;
  name: string;
  initialIsFollowing: boolean;
  avatarUrl: string;
}
