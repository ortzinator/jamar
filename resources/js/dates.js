import dayjs from 'dayjs';

export function useDates() {
    function formatDate(date, format) {
        if (format) {
            return dayjs(date).format(format);
        }
        return dayjs(date).format('MM-DD-YYYY');
    }

    function isInPast(date) {
        return dayjs(date).isBefore(dayjs());
    }

    return { formatDate, isInPast };
}
