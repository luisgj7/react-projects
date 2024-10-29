import { useCallback, useState } from "react";
import { UserService } from "../services";

export const useUser = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<ErrorType>();

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    setTimeout(async () => {
      try {
        const userService = new UserService();
        const users = await userService.getUsers();
        setUsers(users);
      } catch (error) {
        setLoading(false);
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    }, 1500)
    
  }, []);

  return { users, fetchUsers, loading, error };
};

type ErrorType = Error | null;

interface User {
  username: string;
  name: string;
  initialIsFollowing: boolean;
  avatarUrl: string;
}
