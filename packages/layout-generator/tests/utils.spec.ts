import { resolvePath, toSequence, setDeep, toPath } from '../src';
const expectArrayEquivalence = <T>(actual: T[], expected: T[]) => {
    expect(actual).toEqual(expect.arrayContaining(expected));
    expect(expected).toEqual(expect.arrayContaining(actual));
};

describe('utils.ts', () => {
    describe('resolvePath', () => {
        it('should work with both array and string paths', () => {
            const obj: Record<any, any> = { val1: { val2: { val3: 'value3' } } };
            const expectedValue = 'value3';
            const stringPath = 'val1.val2.val3';
            const arrayPath = ['val1', 'val2', 'val3'];
            expect(resolvePath(stringPath, obj)).toBe(expectedValue);
            expect(resolvePath(arrayPath, obj)).toBe(expectedValue);
        });
        it('should work with a custom separator', () => {
            const obj: Record<any, any> = { val1: { val2: { val3: 'value3' } } };
            const expectedValue = 'value3';
            const stringPath = 'val1:val2:val3';
            expect(resolvePath(stringPath, obj, ':')).toBe(expectedValue);
        });
    });

    describe('toSequence', () => {
        it('square brackets means OR', () => {
            expect(toSequence('+[eE]')).toStrictEqual(['eE']);
            expect(toSequence('[qQ]')).toStrictEqual(['qQ']);
        });
        it('multiple characters without brackets means a SEQUENCE', () => {
            expect(toSequence('hh')).toStrictEqual(['h', 'h']);
            expect(toSequence('SS')).toStrictEqual(['S', 'S']);
        });
        it('should work will various key patterns', () => {
            expect(toSequence('+[aA] +[iI][eE]')).toStrictEqual(['aA', 'iI', 'eE']);
            expect(toSequence('+[uU][iI][eE]')).toStrictEqual(['uU', 'iI', 'eE']);
            expect(toSequence('a[eE][eE]')).toStrictEqual(['a', 'eE', 'eE']);
            expect(toSequence('[xX][xX]')).toStrictEqual(['xX', 'xX']);
        });
        it('should return empty array if no sequence in key', () => {
            expect(toSequence('')).toStrictEqual([]);
        });
    });

    describe('setDeep', () => {
        it('should overwrite object value', () => {
            const obj: Record<any, any> = { val1: { val2: { val3: 1 } } };
            const path = ['val1', 'val2', 'val3'];
            const value = 10;
            setDeep(obj, path, value);
            expect(obj?.val1?.val2?.val3).toEqual(value);
        });
        it('should create path if it does not exist on object', () => {
            const obj: Record<any, any> = { val1: null };
            const path = ['val1', 'val2', 'val3'];
            const value = 10;
            setDeep(obj, path, value);
            expect(obj?.val1?.val2?.val3).toEqual(value);
        });
        it('should work with path string', () => {
            const obj: Record<any, any> = {};
            const path = 'val1.val2.val3';
            const value = 10;
            setDeep(obj, path, value);
            expect(obj?.val1?.val2?.val3).toEqual(value);
        });
        it('should work with custom path separator', () => {
            const obj: Record<any, any> = {};
            const path = 'val1:val2:val3';
            const value = 10;
            setDeep(obj, path, value, ':');
            expect(obj?.val1?.val2?.val3).toEqual(value);
        });
    });

    describe('toPath', () => {
        it('should generate all possible path from sequence', () => {
            expectArrayEquivalence<string>(toPath(['aA', 'iI', 'eE']), [
                'a.next.i.next.e',
                'a.next.i.next.E',
                'a.next.I.next.e',
                'a.next.I.next.E',
                'A.next.i.next.e',
                'A.next.i.next.E',
                'A.next.I.next.e',
                'A.next.I.next.E',
            ]);
            expectArrayEquivalence<string>(toPath(['h', 'h']), ['h.next.h']);
            expectArrayEquivalence<string>(toPath(['s']), ['s']);
            expectArrayEquivalence<string>(toPath(['xX', 'xX']), ['x.next.x', 'x.next.X', 'X.next.x', 'X.next.X']);
        });

        it('should concatinate with previous path if given', () => {
            expectArrayEquivalence<string>(toPath(['aA', 'iI', 'eE'], 'previous.path'), [
                'previous.path.next.a.next.i.next.e',
                'previous.path.next.a.next.i.next.E',
                'previous.path.next.a.next.I.next.e',
                'previous.path.next.a.next.I.next.E',
                'previous.path.next.A.next.i.next.e',
                'previous.path.next.A.next.i.next.E',
                'previous.path.next.A.next.I.next.e',
                'previous.path.next.A.next.I.next.E',
            ]);
            expectArrayEquivalence<string>(toPath(['h', 'h'], 'previous.path'), ['previous.path.next.h.next.h']);
            expectArrayEquivalence<string>(toPath(['s'], 'previous.path'), ['previous.path.next.s']);
            expectArrayEquivalence<string>(toPath(['xX', 'xX'], 'previous.path'), [
                'previous.path.next.x.next.x',
                'previous.path.next.x.next.X',
                'previous.path.next.X.next.x',
                'previous.path.next.X.next.X',
            ]);
        });
        it('should return empty array if no sequence', () => {
            expectArrayEquivalence<string>(toPath([]), []);
        });
    });
});
