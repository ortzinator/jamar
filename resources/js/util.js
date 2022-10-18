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

export function highlight(text, searchTerm) {
    if (!searchTerm) {
        return text;
    }

    const escaped = new RegExp(searchTerm.replace(/[.*?^${}()[\]]/g, '\\$&'), 'i');

    return text.replace(escaped, '<mark class="bg-light-blue-vivid-600 text-white">$&</mark>');
}

export function sanitize(input) {
    const decoder = document.createElement('div');
    decoder.innerHTML = input;
    return decoder.textContent;
}
