import { generateMapForRow } from '../src/core';
describe('core.ts', () => {
    it('should work as expected', () => {
        const layout = {};
        const row = {
            KEY: 'h',
            '+[eE]': 'ሀ',
            '+[uU]': 'ሁ',
            '+[iI]': 'ሂ',
            '+[aA]': 'ሃ',
            '+[iI][eE]': 'ሄ',
            _: 'ህ',
            '+[oO]': 'ሆ',
            '+[oO][aA]': ' ',
            '+[uU][eE]': 'ኈ',
            '+[uU][uU]': 'ኍ',
            '+[uU][iI]': 'ኊ',
            '+[uU][aA]': 'ኋ',
            '+[uU][iI][eE]': 'ኌ',
        };
        generateMapForRow(layout, row);
        expect(layout).toEqual({
            h: {
                value: 'ህ',
                next: {
                    e: { value: 'ሀ', next: null },
                    E: { value: 'ሀ', next: null },
                    u: {
                        value: 'ሁ',
                        next: {
                            e: { value: 'ኈ', next: null },
                            E: { value: 'ኈ', next: null },
                            u: { value: 'ኍ', next: null },
                            U: { value: 'ኍ', next: null },
                            i: {
                                value: 'ኊ',
                                next: {
                                    e: { value: 'ኌ', next: null },
                                    E: { value: 'ኌ', next: null },
                                },
                            },
                            I: {
                                value: 'ኊ',
                                next: {
                                    e: { value: 'ኌ', next: null },
                                    E: { value: 'ኌ', next: null },
                                },
                            },
                            a: { value: 'ኋ', next: null },
                            A: { value: 'ኋ', next: null },
                        },
                    },
                    U: {
                        value: 'ሁ',
                        next: {
                            e: { value: 'ኈ', next: null },
                            E: { value: 'ኈ', next: null },
                            u: { value: 'ኍ', next: null },
                            U: { value: 'ኍ', next: null },
                            i: {
                                value: 'ኊ',
                                next: {
                                    e: { value: 'ኌ', next: null },
                                    E: { value: 'ኌ', next: null },
                                },
                            },
                            I: {
                                value: 'ኊ',
                                next: {
                                    e: { value: 'ኌ', next: null },
                                    E: { value: 'ኌ', next: null },
                                },
                            },
                            a: { value: 'ኋ', next: null },
                            A: { value: 'ኋ', next: null },
                        },
                    },
                    i: {
                        value: 'ሂ',
                        next: {
                            e: { value: 'ሄ', next: null },
                            E: { value: 'ሄ', next: null },
                        },
                    },
                    I: {
                        value: 'ሂ',
                        next: {
                            e: { value: 'ሄ', next: null },
                            E: { value: 'ሄ', next: null },
                        },
                    },
                    a: { value: 'ሃ', next: null },
                    A: { value: 'ሃ', next: null },
                    o: { value: 'ሆ', next: null },
                    O: { value: 'ሆ', next: null },
                },
            },
        });
    });
    it('should work custom key and default columns', () => {
        const layout = {};
        const row = {
            CODE: 'h',
            '+[eE]': 'ሀ',
            '+[uU]': 'ሁ',
            '+[iI]': 'ሂ',
            '+[aA]': 'ሃ',
            '+[iI][eE]': 'ሄ',
            DEFAULT: 'ህ',
            '+[oO]': 'ሆ',
            '+[oO][aA]': ' ',
            '+[uU][eE]': 'ኈ',
            '+[uU][uU]': 'ኍ',
            '+[uU][iI]': 'ኊ',
            '+[uU][aA]': 'ኋ',
            '+[uU][iI][eE]': 'ኌ',
        };
        generateMapForRow(layout, row, 'CODE', 'DEFAULT');
        expect(layout).toEqual({
            h: {
                value: 'ህ',
                next: {
                    e: { value: 'ሀ', next: null },
                    E: { value: 'ሀ', next: null },
                    u: {
                        value: 'ሁ',
                        next: {
                            e: { value: 'ኈ', next: null },
                            E: { value: 'ኈ', next: null },
                            u: { value: 'ኍ', next: null },
                            U: { value: 'ኍ', next: null },
                            i: {
                                value: 'ኊ',
                                next: {
                                    e: { value: 'ኌ', next: null },
                                    E: { value: 'ኌ', next: null },
                                },
                            },
                            I: {
                                value: 'ኊ',
                                next: {
                                    e: { value: 'ኌ', next: null },
                                    E: { value: 'ኌ', next: null },
                                },
                            },
                            a: { value: 'ኋ', next: null },
                            A: { value: 'ኋ', next: null },
                        },
                    },
                    U: {
                        value: 'ሁ',
                        next: {
                            e: { value: 'ኈ', next: null },
                            E: { value: 'ኈ', next: null },
                            u: { value: 'ኍ', next: null },
                            U: { value: 'ኍ', next: null },
                            i: {
                                value: 'ኊ',
                                next: {
                                    e: { value: 'ኌ', next: null },
                                    E: { value: 'ኌ', next: null },
                                },
                            },
                            I: {
                                value: 'ኊ',
                                next: {
                                    e: { value: 'ኌ', next: null },
                                    E: { value: 'ኌ', next: null },
                                },
                            },
                            a: { value: 'ኋ', next: null },
                            A: { value: 'ኋ', next: null },
                        },
                    },
                    i: {
                        value: 'ሂ',
                        next: {
                            e: { value: 'ሄ', next: null },
                            E: { value: 'ሄ', next: null },
                        },
                    },
                    I: {
                        value: 'ሂ',
                        next: {
                            e: { value: 'ሄ', next: null },
                            E: { value: 'ሄ', next: null },
                        },
                    },
                    a: { value: 'ሃ', next: null },
                    A: { value: 'ሃ', next: null },
                    o: { value: 'ሆ', next: null },
                    O: { value: 'ሆ', next: null },
                },
            },
        });
    });
});
