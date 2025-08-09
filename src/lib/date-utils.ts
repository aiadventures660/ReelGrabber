// Utility function to format dates consistently for SSR
export function formatBlogDate(dateString: string): string {
  const date = new Date(dateString + 'T00:00:00.000Z'); // Ensure UTC
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  const month = months[date.getUTCMonth()];
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();
  
  return `${month} ${day}, ${year}`;
}
