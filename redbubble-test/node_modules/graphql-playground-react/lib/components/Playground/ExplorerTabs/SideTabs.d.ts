import * as React from 'react';
import { GraphQLSchema } from 'graphql';
interface StateFromProps {
    docs: {
        navStack: any[];
        docsOpen: boolean;
        docsWidth: number;
        keyMove: boolean;
        activeTabIdx: number;
    };
}
interface DispatchFromProps {
    addStack: (sessionId: string, field: any, x: number, y: number) => any;
    toggleDocs: (sessionId: string, activeTabIdx?: number | null) => any;
    setDocsVisible: (sessionId: string, open: boolean, idx?: number | null) => any;
    changeWidthDocs: (sessionId: string, width: number) => any;
    changeKeyMove: (sessionId: string, move: boolean) => any;
}
export interface Props {
    schema: GraphQLSchema;
    sessionId: string;
    children: Array<React.ReactElement<any>>;
    maxWidth: number;
    setWidth: (props?: any) => any;
    setActiveContentRef: (ref: any) => void;
}
export interface SideTabContentProps {
    schema: GraphQLSchema;
    sessionId?: string;
    ref?: any;
    setWidth?: (props?: any) => any;
}
export interface State {
    searchValue: string;
    widthMap: any;
}
declare class SideTabs extends React.Component<Props & StateFromProps & DispatchFromProps, State> {
    ref: any;
    private refContentContainer;
    private clientX;
    private clientY;
    constructor(props: any);
    componentDidUpdate(prevProps: any): void;
    componentDidMount(): any;
    render(): JSX.Element;
    setRef: (ref: any) => void;
    private setContentContainerRef;
    private handleTabClick;
    private handleKeyDown;
    private handleDocsResizeStart;
    private handleMouseMove;
}
declare const ConnectedGraphDocs: import("react-redux").ConnectedComponent<typeof SideTabs, Pick<React.ClassAttributes<SideTabs> & Props & StateFromProps & DispatchFromProps, "sessionId" | "schema" | "ref" | "children" | "key" | "maxWidth" | "setWidth" | "setActiveContentRef"> & Props>;
export default ConnectedGraphDocs;
