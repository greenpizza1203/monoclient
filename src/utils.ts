export function repeat(count: number, func: (number) => void) {
    for (let i = 0; i < count; i++) func(i)
}

export function array<T>(count: number, element: ((index: number) => T) | T): T[] {
    const arr = []

    repeat(count, (i) => arr.push(typeof element == "function" ? (element as (index: number) => T)(i) : element))
    return arr
}
