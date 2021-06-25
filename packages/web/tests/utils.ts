export const simulateTyping = (element: HTMLInputElement | HTMLTextAreaElement, text: string | string[]) => {
    const list = Array.isArray(text) ? text.entries() : text.split('').entries();
    for (const [i, char] of list) {
        const lastIndex = i - 1;
        element.dispatchEvent(
            new window.KeyboardEvent('keydown', {
                key: char,
                code: char,
                bubbles: true,
                ctrlKey: lastIndex > -1 && text[lastIndex] === 'Control',
                shiftKey: lastIndex > -1 && text[lastIndex] === 'Shift',
                altKey: lastIndex > -1 && text[lastIndex] === 'Alt',
                metaKey: lastIndex > -1 && text[lastIndex] === 'Meta',
            }),
        );
        element.dispatchEvent(
            new window.KeyboardEvent('keyup', {
                key: char,
                code: char,
                bubbles: true,
            }),
        );
        element.dispatchEvent(
            new window.KeyboardEvent('keypress', {
                key: char,
                code: char,
                bubbles: true,
            }),
        );
        element.dispatchEvent(
            new window.Event('input', {
                bubbles: true,
            }),
        );
        element.setAttribute('value', element.value + char);
    }
};

export const simulateFocusout = (element: HTMLInputElement | HTMLTextAreaElement) => {
    element.dispatchEvent(
        new window.Event('focusout', {
            bubbles: true,
        }),
    );
};
