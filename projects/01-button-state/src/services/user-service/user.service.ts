import { AbstractBaseEntityService } from "../abstract-base-entity-service/abstract-base-entity.service";
const USERS_URL = "/mocks/users.json";

export class UserService extends AbstractBaseEntityService {
  constructor() {
    super(USERS_URL);
  }

  async getUsers(): Promise<User[]> {
    const { data } = await super.getAll<User[]>();
    return (data ?? []).length ? data : [];
  }
}

export interface User {
  username: string;
  name: string;
  initialIsFollowing: boolean;
  avatarUrl: string;
}
