import React, { useState, useRef, useEffect } from 'react';
import KeywriteWeb, { Input, InputMethod } from '@keywrite/web';
export const useKeywrite = (
    inputRef: React.MutableRefObject<Input | null | undefined>,
    inputMethods: Record<string, InputMethod>,
    isOn = true,
) => {
    const KeywriteRef = useRef<KeywriteWeb | null>(null);
    const [on, setOn] = useState(false);
    const [inputMethodList, setInputMethodList] = useState<string[]>([]);
    const [currentInputMethod, setCurrentInputMethod] = useState('');
    const toggle = () => {
        if (KeywriteRef.current) {
            KeywriteRef.current.on = !KeywriteRef.current.on;
            setOn(!on);
        }
    };
    const changeLayout = (newInputMethod: string) => {
        if (KeywriteRef.current) {
            KeywriteRef.current.current = newInputMethod;
            setCurrentInputMethod(KeywriteRef.current.current);
        }
    };
    useEffect(() => {
        if (inputRef.current) {
            KeywriteRef.current = new KeywriteWeb(inputRef.current, inputMethods, isOn);
            setOn(KeywriteRef.current.on);
            setCurrentInputMethod(KeywriteRef.current.current);
            setInputMethodList(KeywriteRef.current.inputMethods);
        }
    }, [inputRef]);
    return { toggle, currentInputMethod, on, changeLayout, inputMethodList, inputRef };
};
