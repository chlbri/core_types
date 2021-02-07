export interface Login {
  login: string;
  password: string;
}

export type LoginWithoutPassword = Omit<Login, "password">;
