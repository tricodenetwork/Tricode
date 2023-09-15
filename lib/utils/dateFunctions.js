export function extractHoursAndMinutes(dateString) {
    const dateObject = new Date(dateString);
    const hours = dateObject.getHours();
    const minutes = dateObject.getMinutes();
    

    return `${hours}:${minutes}`
  
}