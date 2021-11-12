/**
 *  Copyright (c) Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */
import * as React from 'react';
import { VariableToType } from '../../state/sessions/reducers';
interface Props {
    onHintInformationRender: (elem: any) => void;
    onRunQuery: () => void;
    prettifyQuery?: () => void;
    getRef?: (editor: VariableEditor) => void;
}
interface ReduxProps {
    value: string;
    variableToType?: VariableToType;
    onChange: (variable: string) => void;
}
/**
 * VariableEditor
 *
 * An instance of CodeMirror for editing variables defined in QueryEditor.
 *
 * Props:
 *
 *   - variableToType: A mapping of variable name to GraphQLType.
 *   - value: The text of the editor.
 *   - onEdit: A function called when the editor changes, given the edited text.
 *   - readOnly: Turns the editor to read-only mode.
 *
 */
declare class VariableEditor extends React.PureComponent<Props & ReduxProps> {
    cachedValue: any;
    editor: any;
    ignoreChangeEvent: boolean;
    _node: any;
    constructor(props: any);
    componentDidMount(): void;
    componentDidUpdate(prevProps: any): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    /**
     * Public API for retrieving the CodeMirror instance from this
     * React component.
     */
    getCodeMirror(): any;
    /**
     * Public API for retrieving the DOM client height for this component.
     */
    getClientHeight(): any;
    _onKeyUp: (cm: any, event: any) => void;
    _onEdit: () => void;
    _onHasCompletion: (cm: any, data: any) => void;
}
export declare const VariableEditorComponent: import("react-redux").ConnectedComponent<typeof VariableEditor, Pick<React.ClassAttributes<VariableEditor> & Props & ReduxProps, "prettifyQuery" | "ref" | "onHintInformationRender" | "onRunQuery" | "getRef" | "key">>;
export declare const HeadersEditorComponent: import("react-redux").ConnectedComponent<typeof VariableEditor, Pick<React.ClassAttributes<VariableEditor> & Props & ReduxProps, "variableToType" | "prettifyQuery" | "ref" | "onHintInformationRender" | "onRunQuery" | "getRef" | "key">>;
export {};
