import { formatUser } from './formatter.js';

export function getDisplayNames(): string[] {
  const mockUsers = [
    { firstName: 'Alice', lastName: 'Lovelace' },
    { firstName: 'Bob', lastName: 'Turing' }
  ];
  
  return mockUsers.map(formatUser);
}
