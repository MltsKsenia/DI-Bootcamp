interface HasLength {
    length: number;
}

function logLength<T extends HasLength>(item: T): number {
    return item.length;
}

export default logLength;