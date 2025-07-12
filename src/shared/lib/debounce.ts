export function debounce<T extends (...args) => never>(cb: T, wait = 20) {
    let timeOut: number | null = null;

    const callable = (...args: ReturnType<T>) => {
        if (timeOut !== null) clearTimeout(timeOut);
        timeOut = setTimeout(() => cb(...args), wait);
    };

    return callable;
}