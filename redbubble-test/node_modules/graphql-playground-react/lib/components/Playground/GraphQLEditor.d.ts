import * as React from 'react';
import { GraphQLSchema } from 'graphql';
import { List } from 'immutable';
import { ResponseRecord } from '../../state/sessions/reducers';
/**
 * The top-level React component for GraphQLEditor, intended to encompass the entire
 * browser viewport.
 */
export interface Props {
    onRef?: any;
    shareEnabled?: boolean;
    fixedEndpoint?: boolean;
    schema?: GraphQLSchema;
}
export interface ReduxProps {
    setStacks: (sessionId: string, stack: any[]) => void;
    updateQueryFacts: () => void;
    runQueryAtPosition: (position: number) => void;
    fetchSchema: () => void;
    openQueryVariables: () => void;
    closeQueryVariables: () => void;
    openVariables: (height: number) => void;
    closeVariables: (height: number) => void;
    openTracing: (height: number) => void;
    closeTracing: (height: number) => void;
    toggleTracing: () => void;
    toggleVariables: () => void;
    setEditorFlex: (flex: number) => void;
    stopQuery: (sessionId: string) => void;
    changeWidthDocs: (sessionId: string, width: number) => void;
    navStack: any[];
    docsOpen: boolean;
    queryRunning: boolean;
    responses: List<ResponseRecord>;
    subscriptionActive: boolean;
    variableEditorOpen: boolean;
    variableEditorHeight: number;
    currentQueryStartTime?: Date;
    currentQueryEndTime?: Date;
    responseTracingOpen: boolean;
    responseTracingHeight: number;
    responseExtensions: any;
    tracingSupported?: boolean;
    editorFlex: number;
    headers: string;
    headersCount: number;
    queryVariablesActive: boolean;
    operationName: string;
    query: string;
    sessionId: string;
}
export interface SimpleProps {
    children?: any;
}
export interface ToolbarButtonProps extends SimpleProps {
    onClick: (e: any) => void;
    title: string;
    label: string;
}
declare class GraphQLEditor extends React.PureComponent<Props & ReduxProps> {
    codeMirrorSizer: any;
    queryEditorComponent: any;
    variableEditorComponent: any;
    resultComponent: any;
    editorBarComponent: any;
    docExplorerComponent: any;
    graphExplorerComponent: any;
    schemaExplorerComponent: any;
    private queryResizer;
    private responseResizer;
    private queryVariablesRef;
    private httpHeadersRef;
    private containerComponent;
    private activeSideTabContent;
    componentDidMount(): void;
    componentDidUpdate(): void;
    render(): JSX.Element;
    setQueryVariablesRef: (ref: any) => void;
    setHttpHeadersRef: (ref: any) => void;
    setQueryResizer: (ref: any) => void;
    setResponseResizer: (ref: any) => void;
    setEditorBarComponent: (ref: any) => void;
    setQueryEditorComponent: (ref: any) => void;
    setVariableEditorComponent: (ref: any) => void;
    setResultComponent: (ref: any) => void;
    setDocExplorerRef: (ref: any) => void;
    setGraphExplorerRef: (ref: any) => void;
    setSchemaExplorerRef: (ref: any) => void;
    setContainerComponent: (ref: any) => void;
    handleClickReference: (reference: any) => void;
    setSideTabActiveContentRef: (ref: any) => void;
    /**
     * Inspect the query, automatically filling in selection sets for non-leaf
     * fields which do not yet have them.
     *
     * @public
     */
    autoCompleteLeafs(): string;
    private runQueryAtCursor;
    private handleHintInformationRender;
    private handleResizeStart;
    private didClickDragBar;
    private handleTracingResizeStart;
    private handleVariableResizeStart;
    private onClickHintInformation;
    private setDocsWidth;
}
declare const _default: import("react-redux").ConnectedComponent<typeof GraphQLEditor, any>;
export default _default;
