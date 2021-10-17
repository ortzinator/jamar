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

function addDecimal(amount, subunit) {
    let output = amount;
    let { length } = output;
    if (subunit > length - 1) {
        const zeros = subunit - length + 1;
        output = '0'.repeat(zeros) + output;
        length = output.length;
    }
    const pos = length - subunit;
    output = `${output.slice(0, pos)}.${output.slice(pos)}`;
    return output;
}

export { formatDate, isInPast, addDecimal };
