export function formatDateString(dateStr: string): string {
    // Convert the string to a Date object
    const date = new Date(dateStr);
  
    // Options to format the date
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  
    // Return the formatted date
    return date.toLocaleDateString('en-US', options);
  }