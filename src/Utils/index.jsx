/**
 * @param {Date} date
 * @returns {String} Formatted date
 */
const parseDate = (date) => {
    const dateString = date.toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric'
    });
    
    const timeString = date.toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });

    return `${dateString} ${timeString}`;
}

export { parseDate };