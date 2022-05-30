import dayjs from 'dayjs';

export function formatDate(date, format) {
    if (format) {
        return dayjs(date).format(format);
    }
    return dayjs(date).format('MM-DD-YYYY');
}

export function isInPast(date) {
    return dayjs(date).isBefore(dayjs());
}

export function addDecimal(amount, subunit) {
    if (typeof amount !== 'string') {
        throw new TypeError('amount must be a string');
    }

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

export function highlight(text, searchTerm) {
    if (!searchTerm) {
        return text;
    }

    const escaped = new RegExp(searchTerm.replace(/[.*?^${}()[\]]/g, '\\$&'), 'i');

    return text.replace(escaped, '<mark class="bg-light-blue-vivid-600 text-white">$&</mark>');
}
