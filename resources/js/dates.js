import dayjs from 'dayjs';

function formatDate(date, format) {
    if (format) {
        return dayjs(date).format(format);
    }
    return dayjs(date).format('MM-DD-YYYY');
}

function isInPast(date) {
    return dayjs(date).isBefore(dayjs());
}

export { formatDate, isInPast };
