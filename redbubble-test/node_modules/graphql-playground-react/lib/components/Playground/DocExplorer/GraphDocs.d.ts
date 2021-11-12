import * as React from 'react';
import { SideTabContentProps } from '../ExplorerTabs/SideTabs';
interface StateFromProps {
    docs: {
        navStack: any[];
        docsOpen: boolean;
        docsWidth: number;
        keyMove: boolean;
    };
}
interface DispatchFromProps {
    addStack: (sessionId: string, field: any, x: number, y: number) => any;
    toggleDocs: (sessionId: string) => any;
    setDocsVisible: (sessionId: string, open: boolean) => any;
    changeWidthDocs: (sessionId: string, width: number) => any;
    changeKeyMove: (sessionId: string, move: boolean) => any;
}
export interface State {
    searchValue: string;
    widthMap: any;
}
declare class GraphDocs extends React.Component<SideTabContentProps & StateFromProps & DispatchFromProps, State> {
    ref: any;
    constructor(props: any);
    UNSAFE_componentWillReceiveProps(nextProps: SideTabContentProps & StateFromProps): void;
    setWidth(props?: any): void;
    getWidth(props?: any): any;
    componentDidMount(): void;
    render(): JSX.Element;
    setRef: (ref: any) => void;
    showDocFromType: (type: any) => void;
    private handleSearch;
    private handleKeyDown;
}
declare const _default: import("react-redux").ConnectedComponent<typeof GraphDocs, Pick<React.ClassAttributes<GraphDocs> & SideTabContentProps & StateFromProps & DispatchFromProps, "sessionId" | "schema" | "ref" | "key" | "setWidth"> & SideTabContentProps>;
export default _default;
