export interface User {
  firstName: string;
  lastName: string;
}

export function formatUser(user: User): string {
  return `${user.firstName} ${user.lastName}`.toUpperCase();
}
