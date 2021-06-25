import { Keywrite } from '../src';
describe('Keywrite.ts', () => {
    let instance: any = null;
    const layouts = {
        layout1: {
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
        layout2: { b: { value: 'b', next: null }, a: { value: 'ኢ', next: null } },
    };
    beforeEach(() => {
        instance = new Keywrite(layouts);
    });
    it('should set current keyboard-layout to first on map by default', () => {
        expect(instance.current).toBe('layout1');
    });
    it('should set current keyboard-layout using name', () => {
        const newLayout = 'layout2';
        instance.current = newLayout;
        expect(instance.current).toBe(newLayout);
    });
    it("should throw error if input for current keyboard-layout doesn't exist on map", () => {
        const unknownLayout = 'layout-unknown';
        expect(() => {
            instance.current = unknownLayout;
        }).toThrow();
    });
    it('should get all avaliable keyboard-layout names ', () => {
        expect(instance.layouts).toContain('layout1');
        expect(instance.layouts).toContain('layout2');
    });
    it('should set new keyboard-layout map ', () => {
        const newLayouts = {
            layout3: { a: { value: 'a', next: null } },
            layout4: { b: { value: 'b', next: null } },
        };
        instance.setLayouts(newLayouts);
        expect(instance.layouts).toContain('layout3');
        expect(instance.layouts).toContain('layout4');
    });

    it('should update current layout when new keyboard-layout map is set ', () => {
        const newLayouts = {
            layout3: { a: { value: 'a', next: null } },
            layout4: { b: { value: 'b', next: null } },
        };
        instance.setLayouts(newLayouts);
        expect(instance.current).toBe('layout3');
    });

    it('should be able to use new layout after change', () => {
        expect(instance.write('a')).toEqual({ symbol: 'አ', replace: false });
        const newLayout = 'layout2';
        instance.current = newLayout;
        expect(instance.write('a')).toEqual({ symbol: 'ኢ', replace: false });
    });

    it('should be able to use new layout after new keyboard-layout map is set ', () => {
        expect(instance.write('a')).toEqual({ symbol: 'አ', replace: false });
        const newLayouts = {
            layout3: { a: { value: '@', next: null } },
            layout4: { b: { value: '&', next: null } },
        };
        instance.setLayouts(newLayouts);
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
