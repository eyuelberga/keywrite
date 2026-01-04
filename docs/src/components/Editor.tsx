import { Sandpack } from '@codesandbox/sandpack-react';
import { useColorMode } from '@docusaurus/theme-common';

export interface EditorProps {
    files: Record<string, string>;
}
export default function Editor(props: EditorProps) {
    const { isDarkTheme } = useColorMode();

    return (
        <Sandpack
            options={{
                showNavigator: true,
                showInlineErrors: true,
                editorHeight: 500,
                autorun: true,
                autoReload: true,
                recompileMode: 'delayed',
            }}
            files={props.files}
            theme={isDarkTheme ? 'dark' : 'light'}
        />
    );
}
