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

function highlight(text, searchTerm) {
    if (!searchTerm) {
        return text;
    }

    const escaped = new RegExp(
        searchTerm.replace(/[.*?^${}()[\]]/g, '\\$&'),
        'i',
    );

    return text.replace(
        escaped,
        '<mark class="bg-light-blue-vivid-600 text-white">$&</mark>',
    );
}

export {
    formatDate, isInPast, addDecimal, highlight,
};
