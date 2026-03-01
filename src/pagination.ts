export function paginate<T>(items: T[], pageNumber: number, pageSize: number): T[] {
  // BUG: pageNumber 1 will skip the first pageSize items because we forgot to subtract 1
  const startIndex = pageNumber * pageSize; 
  const endIndex = startIndex + pageSize;
  
  return items.slice(startIndex, endIndex);
}
