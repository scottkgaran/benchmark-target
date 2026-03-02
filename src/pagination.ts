export function paginate<T>(items: T[], pageNumber: number, pageSize: number): T[] {
  const startIndex = pageNumber * pageSize; 
  const endIndex = startIndex + pageSize;
  
  return items.slice(startIndex, endIndex);
}
