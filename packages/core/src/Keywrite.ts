export type InputMethod = Record<string, SymbolMap>;
export interface SymbolMap {
    value: string | null;
    next: InputMethod | null;
}

export default class Keywrite {
    private level: number;
    private scope: InputMethod;
    private keyboardInputMethods: Record<string, InputMethod>;
    private currentInputMethod: string;
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

    constructor(inputMethods: Record<string, InputMethod>) {
        this.level = 0;
        this.scope = {};
        this.keyboardInputMethods = inputMethods;
        this.currentInputMethod = Object.keys(this.keyboardInputMethods)[0];
    }
    get current(): string {
        return this.currentInputMethod;
    }

    set current(inputMethod: string) {
        if (inputMethod in this.keyboardInputMethods) {
            this.currentInputMethod = inputMethod;
            this.resetScope();
        } else {
            throw new Error('Input Method does not exists');
        }
    }

    get inputMethods(): string[] {
        return Object.keys(this.keyboardInputMethods);
    }
    setInputMethods(inputMethods: Record<string, InputMethod>): void {
        this.keyboardInputMethods = inputMethods;
        this.currentInputMethod = Object.keys(this.keyboardInputMethods)[0];
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
        this.scope = this.keyboardInputMethods[this.currentInputMethod];
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
