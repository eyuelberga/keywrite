/* eslint-disable @typescript-eslint/no-explicit-any */
import { ObjectPath } from './interfaces';
export const resolvePath = (path: ObjectPath, obj: Record<string, any>, separator = '.'): any => {
    const properties = Array.isArray(path) ? path : path.split(separator);
    return properties.reduce((prev, curr) => prev && prev[curr], obj);
};
export const toSequence = (key: string): string[] => {
    // match all inclosed in square brackets, or any word character and some selected symbols
    const matches = key.match(/\[.*?\]|\w|[<>,.;:]/g);
    if (matches) {
        //eslint-disable-next-line
        return matches.map((k) => k.replace(/[\]\[()+]/g, ''));
    }
    return [];
};
// Create a nested structure of objects along path within obj. Only overwrites the final value.
export const setDeep = (obj: Record<any, any>, path: ObjectPath, value: any, separator = '.') => {
    const properties = Array.isArray(path) ? path : path.split(separator);
    return (setStructure(obj, properties.slice(0, -1))[properties[properties.length - 1]] = value);
};
// Set obj[key] to value if key is not in object, and return obj[key]
const setDefault = (obj: Record<any, any>, key: any, value: any) => {
    if (!obj[key]) {
        obj[key] = value;
    }
    return obj[key];
};

// Create a nested structure of objects along path within obj. Does not overwrite any value.
const setStructure = (obj: Record<any, any>, path: string[]) =>
    path.reduce((obj, segment) => setDefault(obj, segment, {}), obj);
// create path combination
export const toPath = (sequence: string[], previous?: string): string[] => {
    const pathList: string[] = [];
    const addPrevious = previous ? `${previous}.next.` : '';
    if (sequence.length > 1) {
        for (const c of sequence[0]) {
            for (const c2 of sequence[1]) {
                if (sequence[2]) {
                    for (const c3 of sequence[2]) {
                        pathList.push(`${addPrevious}${c}.next.${c2}.next.${c3}`);
                    }
                } else {
                    pathList.push(`${addPrevious}${c}.next.${c2}`);
                }
            }
        }
    } else if (sequence.length) {
        for (const c of sequence[0]) {
            pathList.push(`${addPrevious}${c}`);
        }
    }

    return pathList;
};
