interface OptionalObj {
    prop?: {
        is?: string
    }
}

export function optional(value?: OptionalObj): string | undefined {
    return value?.prop?.is;
}
