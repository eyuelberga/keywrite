/**
 * @jest-environment jsdom
 */
import { KeywriteWeb } from '../src';
import Layout from './layout';
import { simulateTyping, simulateFocusout } from './utils';
describe('KeywriteWeb.ts', () => {
    let input: any = null;
    let textarea: any = null;
    const KeyboardLayouts = { layout1: Layout };
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
        const newInstance1 = new KeywriteWeb(input, KeyboardLayouts);
        const newInstance2 = new KeywriteWeb(textarea, KeyboardLayouts);
        expect(newInstance1).toBeDefined();
        expect(newInstance2).toBeDefined();
    });
    it('should be able to turn on after initialization', () => {
        const inputInstance = new KeywriteWeb(input, KeyboardLayouts, false);
        const textareaInstance = new KeywriteWeb(textarea, KeyboardLayouts, false);
        const text = 'selam selam';
        const expectedText = 'ሰላም ሰላም';
        // input
        inputInstance.on = true;
        expect(inputInstance.on).toEqual(true);
        simulateTyping(input, text);
        expect(input.value).toEqual(expectedText);
        // textarea
        textareaInstance.on = true;
        expect(textareaInstance.on).toEqual(true);
        simulateTyping(textarea, text);
        expect(input.value).toEqual(expectedText);
    });
    it('should be able to turn off after initialization', () => {
        const inputInstance = new KeywriteWeb(input, KeyboardLayouts, true);
        const textareaInstance = new KeywriteWeb(textarea, KeyboardLayouts, true);
        const text = 'selam';
        const expectedText = 'selam';
        // input
        inputInstance.on = false;
        expect(inputInstance.on).toEqual(false);
        simulateTyping(input, text);
        simulateFocusout(input);
        expect(input.value).toEqual(expectedText);
        // textarea
        textareaInstance.on = false;
        expect(textareaInstance.on).toEqual(false);
        simulateTyping(textarea, text);
        simulateFocusout(textarea);
        expect(input.value).toEqual(expectedText);
    });
    it('should not write character if (CTRL) key had been triggered ', () => {
        new KeywriteWeb(input, KeyboardLayouts, true);
        new KeywriteWeb(textarea, KeyboardLayouts, true);

        const text = ['s', 'e', 'l', 'Control', 'a', 'm'];
        const expectedText = 'ሰልም';
        // input
        simulateTyping(input, text);
        expect(input.value).toEqual(expectedText);
        // textarea
        simulateTyping(textarea, text);
        expect(input.value).toEqual(expectedText);
    });

    it('should not write character if (ALT) key had been triggered ', () => {
        new KeywriteWeb(input, KeyboardLayouts, true);
        new KeywriteWeb(textarea, KeyboardLayouts, true);

        const text = ['s', 'e', 'l', 'Alt', 'a', 'm'];
        const expectedText = 'ሰልም';
        // input
        simulateTyping(input, text);
        expect(input.value).toEqual(expectedText);
        // textarea
        simulateTyping(textarea, text);
        expect(input.value).toEqual(expectedText);
    });

    it('should not write character if (META) key had been triggered ', () => {
        new KeywriteWeb(input, KeyboardLayouts, true);
        new KeywriteWeb(textarea, KeyboardLayouts, true);

        const text = ['s', 'e', 'l', 'Meta', 'a', 'm'];
        const expectedText = 'ሰልም';
        // input
        simulateTyping(input, text);
        expect(input.value).toEqual(expectedText);
        // textarea
        simulateTyping(textarea, text);
        expect(input.value).toEqual(expectedText);
    });

    it('should reset scope if input looses focus', () => {
        new KeywriteWeb(input, KeyboardLayouts, true);
        new KeywriteWeb(textarea, KeyboardLayouts, true);
        const texts = [
            ['s', 'e', 'l'],
            ['a', 'm'],
        ];
        const expectedText = 'ሰልአም';
        for (const text of texts) {
            // input
            simulateTyping(input, text);
            simulateFocusout(input);
            // textarea
            simulateTyping(textarea, text);
            simulateFocusout(textarea);
        }
        expect(input.value).toEqual(expectedText);
        expect(input.value).toEqual(expectedText);
    });
});
