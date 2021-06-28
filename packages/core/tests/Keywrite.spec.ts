import Keywrite from '../src';
describe('Keywrite.ts', () => {
    let instance: any = null;
    const inputMethods = {
        inputMethod1: {
            a: { value: 'አ', next: null },
            i: {
                value: 'ኢ',
                next: {
                    e: {
                        value: 'ኤ',
                        next: null,
                    },
                },
            },
            s: {
                value: 'ስ',
                next: {
                    h: {
                        value: 'ሽ',
                        next: {
                            a: {
                                value: 'ሻ',
                                next: null,
                            },
                            e: {
                                value: 'ሸ',
                                next: {
                                    e: {
                                        value: 'ሼ',
                                        next: null,
                                    },
                                },
                            },
                            i: {
                                value: 'ሺ',
                                next: {
                                    e: {
                                        value: 'ሼ',
                                        next: null,
                                    },
                                },
                            },
                            u: {
                                value: 'ሹ',
                                next: {
                                    a: {
                                        value: 'ሿ',
                                        next: null,
                                    },
                                },
                            },
                            o: {
                                value: 'ሾ',
                                next: null,
                            },
                        },
                    },
                },
            },
        },
        inputMethod2: { b: { value: 'b', next: null }, a: { value: 'ኢ', next: null } },
    };
    beforeEach(() => {
        instance = new Keywrite(inputMethods);
    });
    it('should set current keyboard-input-method to first on map by default', () => {
        expect(instance.current).toBe('inputMethod1');
    });
    it('should set current keyboard-input-method using name', () => {
        const newInputMethod = 'inputMethod2';
        instance.current = newInputMethod;
        expect(instance.current).toBe(newInputMethod);
    });
    it("should throw error if the value set for `current` doesn't exist on keyboard-input-method map", () => {
        const unknownInputMethod = 'inputMethod-unknown';
        expect(() => {
            instance.current = unknownInputMethod;
        }).toThrow();
    });
    it('should get all avaliable keyboard-input-method names ', () => {
        expect(instance.inputMethods).toContain('inputMethod1');
        expect(instance.inputMethods).toContain('inputMethod2');
    });
    it('should set new keyboard-input-method map ', () => {
        const newInputMethods = {
            inputMethod3: { a: { value: 'a', next: null } },
            inputMethod4: { b: { value: 'b', next: null } },
        };
        instance.setInputMethods(newInputMethods);
        expect(instance.inputMethods).toContain('inputMethod3');
        expect(instance.inputMethods).toContain('inputMethod4');
    });

    it('should update current input method when new keyboard-input-method map is set ', () => {
        const newInputMethods = {
            inputMethod3: { a: { value: 'a', next: null } },
            inputMethod4: { b: { value: 'b', next: null } },
        };
        instance.setInputMethods(newInputMethods);
        expect(instance.current).toBe('inputMethod3');
    });

    it('should be able to use new input method after changing', () => {
        expect(instance.write('a')).toEqual({ symbol: 'አ', replace: false });
        const newInputMethod = 'inputMethod2';
        instance.current = newInputMethod;
        expect(instance.write('a')).toEqual({ symbol: 'ኢ', replace: false });
    });

    it('should be able to use new input method after new keyboard-input-methods map is set ', () => {
        expect(instance.write('a')).toEqual({ symbol: 'አ', replace: false });
        const newInputMethods = {
            inputMethod3: { a: { value: '@', next: null } },
            inputMethod4: { b: { value: '&', next: null } },
        };
        instance.setInputMethods(newInputMethods);
        expect(instance.write('a')).toEqual({ symbol: '@', replace: false });
    });

    it("should not replace last character if it doesn't exist in current scope", () => {
        expect(instance.write('a')).toEqual({ symbol: 'አ', replace: false });
        expect(instance.write('i')).toEqual({ symbol: 'ኢ', replace: false });
    });
    it('should replace last character if it does exist in current scope', () => {
        // two-level nesting
        expect(instance.write('i')).toEqual({ symbol: 'ኢ', replace: false });
        expect(instance.write('e')).toEqual({ symbol: 'ኤ', replace: true });
        // four-level nesting
        expect(instance.write('s')).toEqual({ symbol: 'ስ', replace: false });
        expect(instance.write('h')).toEqual({ symbol: 'ሽ', replace: true });
        expect(instance.write('i')).toEqual({ symbol: 'ሺ', replace: true });
        expect(instance.write('e')).toEqual({ symbol: 'ሼ', replace: true });
    });
    it("should return exact character if it doesn't exist in scope", () => {
        expect(instance.write('1')).toEqual({ symbol: '1', replace: false });
        expect(instance.write('/')).toEqual({ symbol: '/', replace: false });
    });
});
