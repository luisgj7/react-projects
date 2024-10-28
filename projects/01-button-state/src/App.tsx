import "./App.css";
import { useEffect } from "react";
import { Card } from "./components";
import { useUser } from "./hooks/user-user.hook";

function App() {
  const { users, fetchUsers, loading, error } = useUser();

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <>
      { loading && <p>Loading...</p> }
      { error 
        ?  <p>{JSON.stringify(error)}</p>
        :  <section className="app">
            { 
              users.map(({ username, name, initialIsFollowing, avatarUrl }) => (
                <Card
                  key={username}
                  username={username}
                  name={name}
                  isFollowing={initialIsFollowing}
                  avatarUrl={avatarUrl}
                ></Card>
               )) 
            }
            </section> 
        }
    </>
  );
}

export default App;
