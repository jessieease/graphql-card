import * as React from 'react';
export interface Props {
    value: string;
    onChange: (value: string) => void;
}
declare class FileEditor extends React.Component<Props, {}> {
    render(): JSX.Element;
}
declare const _default: import("react-redux").ConnectedComponent<typeof FileEditor, Pick<React.ClassAttributes<FileEditor> & Props, "ref" | "key">>;
export default _default;
