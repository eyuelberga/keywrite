export type KeyboardLayout = Record<string, SymbolMap>;
export interface SymbolMap {
    value: string | null;
    next: KeyboardLayout | null;
}

export class Keywrite {
    private level: number;
    private scope: KeyboardLayout;
    private keyboardLayouts: Record<string, KeyboardLayout>;
    private currentLayout: string;
    protected keyBlacklist: string[] = [
        'Shift',
        'CapsLock',
        'Alt',
        'Control',
        'Meta',
        'Backspace',
        'Space',
        'End',
        'Home',
        'PageUp',
        'PageDown',
        'ArrowLeft',
        'ArrowUp',
        'ArrowRight',
        'ArrowDown',
        'Delete',
        'Escape',
        'Insert',
        'Enter',
        'Tab',
    ];

    constructor(layouts: Record<string, KeyboardLayout>) {
        this.level = 0;
        this.scope = {};
        this.keyboardLayouts = layouts;
        this.currentLayout = Object.keys(this.keyboardLayouts)[0];
    }
    get current(): string {
        return this.currentLayout;
    }

    set current(layout: string) {
        if (layout in this.keyboardLayouts) {
            this.currentLayout = layout;
            this.resetScope();
        } else {
            throw new Error('Layout does not exists');
        }
    }

    get layouts(): string[] {
        return Object.keys(this.keyboardLayouts);
    }
    setLayouts(layouts: Record<string, KeyboardLayout>): void {
        this.keyboardLayouts = layouts;
        this.currentLayout = Object.keys(this.keyboardLayouts)[0];
        this.resetScope();
    }
    public write(char: string): { symbol: string; replace: boolean } {
        const symbol = this.getSymbolFromScope(char);
        const replace = this.updateScope(char);
        return { symbol, replace };
    }
    private updateScope(char: string): boolean {
        // should replace previous character
        const replace = !!(this.level > 0 && this.scope[char]);
        const nextScope = this.scope[char]?.next;
        if (nextScope) {
            this.scope = nextScope;
            this.level += 1;
        } else {
            this.resetScope();
        }
        return replace;
    }
    protected resetScope(): void {
        this.scope = this.keyboardLayouts[this.currentLayout];
        this.level = 0;
    }

    private getSymbolFromScope(char: string): string {
        const valueFromScope = this.scope[char]?.value;
        if (valueFromScope) {
            return valueFromScope;
        } else {
            this.resetScope();
            return this.scope[char]?.value || char;
        }
    }
}
