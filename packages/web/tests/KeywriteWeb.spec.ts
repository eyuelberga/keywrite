/**
 * @jest-environment jsdom
 */
import KeywriteWeb from '../src';
import InputMethod from './input-method';
import userEvent from '@testing-library/user-event';

const user = userEvent.setup();

describe('KeywriteWeb.ts', () => {
    describe('using beforeinput', () => {
        withBeforeInput(true);
        runKeywriteTests('beforeinput enabled');
    });

    describe('using keydown fallback', () => {
        withBeforeInput(false);
        runKeywriteTests('beforeinput disabled');
    });
});

function withBeforeInput(enabled: boolean) {
    let OriginalInputEvent: typeof InputEvent | undefined;

    beforeEach(() => {
        OriginalInputEvent = window.InputEvent;

        if (enabled) {
            // Force beforeinput path
            (window.InputEvent as any).prototype.getTargetRanges = () => [];
        } else {
            // Force fallback path
            // @ts-ignore
            delete (window as any).InputEvent;
        }
    });

    afterEach(() => {
        // Restore environment
        if (OriginalInputEvent) {
            (window as any).InputEvent = OriginalInputEvent;
        }
    });
}

function runKeywriteTests(label: string) {
    describe(label, () => {
        let input: any = null;
        let textarea: any = null;
        const InputMethods = { inputMethod1: InputMethod };

        beforeEach(() => {
            document.body.innerHTML = `
       <input/>
        <textarea></textarea/>
       `;
            // set reference to the input elements
            input = document.querySelector('input') as HTMLInputElement;
            textarea = document.querySelector('textarea') as HTMLTextAreaElement;
        });

        it('should work with HTMLInputElement & HTMLTextAreaElement', () => {
            const newInstance1 = new KeywriteWeb(input, InputMethods);
            const newInstance2 = new KeywriteWeb(textarea, InputMethods);
            expect(newInstance1).toBeDefined();
            expect(newInstance2).toBeDefined();
        });

        it('should be able to turn on after initialization', async () => {
            const inputInstance = new KeywriteWeb(input, InputMethods, false);
            const textareaInstance = new KeywriteWeb(textarea, InputMethods, false);
            const text = 'selam selam';
            const expectedText = 'ሰላም ሰላም';

            // input
            inputInstance.on = true;
            expect(inputInstance.on).toEqual(true);
            await user.type(input, text);
            await user.tab();
            expect(input.value).toEqual(expectedText);

            // textarea
            textareaInstance.on = true;
            expect(textareaInstance.on).toEqual(true);
            await user.type(textarea, text);
            await user.tab();
            expect(textarea.value).toEqual(expectedText);
        });

        it('should be able to turn off after initialization', async () => {
            const inputInstance = new KeywriteWeb(input, InputMethods, true);
            const textareaInstance = new KeywriteWeb(textarea, InputMethods, true);
            const text = 'selam';
            const expectedText = 'selam';

            // input
            inputInstance.on = false;
            expect(inputInstance.on).toEqual(false);
            await user.type(input, text);
            await user.tab();
            expect(input.value).toEqual(expectedText);

            // textarea
            textareaInstance.on = false;
            expect(textareaInstance.on).toEqual(false);
            await user.type(textarea, text);
            await user.tab();
            expect(textarea.value).toEqual(expectedText);
        });

        it('should not write character if (CTRL) key had been triggered ', async () => {
            new KeywriteWeb(input, InputMethods, true);
            new KeywriteWeb(textarea, InputMethods, true);

            const expectedText = 'ም';

            // input
            input.focus();
            await user.keyboard('{Control>}a{/Control}m');
            await user.tab();

            expect(input.value).toEqual(expectedText);

            // textarea
            textarea.focus();
            await user.keyboard('{Control>}a{/Control}m');
            await user.tab();

            expect(textarea.value).toEqual(expectedText);
        });

        it('should not write character if (ALT) key had been triggered ', async () => {
            new KeywriteWeb(input, InputMethods, true);
            new KeywriteWeb(textarea, InputMethods, true);

            const expectedText = 'ም';

            // input
            input.focus();
            await user.keyboard('{Alt>}a{/Alt}m');
            await user.tab();

            expect(input.value).toEqual(expectedText);

            // textarea
            textarea.focus();
            await user.keyboard('{Alt>}a{/Alt}m');
            await user.tab();

            expect(textarea.value).toEqual(expectedText);
        });

        it('should reset scope if input looses focus', async () => {
            new KeywriteWeb(input, InputMethods, true);
            new KeywriteWeb(textarea, InputMethods, true);
            const expectedText = 'ሰልአም';

            // input
            await user.type(input, 'sel');
            await user.tab();
            await user.type(input, 'am');

            // textarea
            await user.type(textarea, 'sel');
            await user.tab();
            await user.type(textarea, 'am');

            expect(input.value).toEqual(expectedText);
            expect(textarea.value).toEqual(expectedText);
        });
    });
}
