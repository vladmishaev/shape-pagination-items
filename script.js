const pageCount = 20;
const limit = 5; //odd number

const shapePaginationItems = (pageCount, currentPage, limit) => {
    if (pageCount <= 0 || limit <= 0) return [];

    const items = [];

    const halfLimit = Math.floor(limit / 2);

    let start = Math.max(1, currentPage - halfLimit);
    let end = Math.min(pageCount, currentPage + halfLimit);

    if (end - start + 1 < limit) {
        if (start === 1) {
            end = Math.min(pageCount, start + limit - 1);
        } else if (end === pageCount) {
            start = Math.max(1, end - limit + 1);
        }
    }

    if (start > 1) {
        items.push(1);
        items.push('...');
    }

    for (let i = start; i <= end; i++) {
        items.push(i);
    }

    if (end < pageCount) {
        items.push('...');
        items.push(pageCount);
    }

    return items;
};
