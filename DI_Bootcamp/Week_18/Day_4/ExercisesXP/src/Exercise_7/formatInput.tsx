interface HasToString {
    toString(): string;
}

function formatInput<T extends HasToString>(input: T): string {
    const strInput = input.toString() as string;

    return `Formatted input: ${strInput.trim().toUpperCase()}`;
}

export default formatInput;