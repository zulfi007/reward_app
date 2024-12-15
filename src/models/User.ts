export interface User {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly phone: string;
  readonly location: string;
  readonly points: number;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

export interface UserCredentials {
  readonly username: string;
  readonly password: string;
}
