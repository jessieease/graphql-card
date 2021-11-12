import * as React from 'react';
import { Session } from '../../state/sessions/reducers';
export interface Props {
    session: Session;
    selectedSessionId: string;
}
export interface ReduxProps {
    selectTab: (sessionId: string) => void;
    closeTab: (sessionId: string) => void;
    editName: (name: string) => void;
}
export interface State {
    overCross: boolean;
    editingName: boolean;
}
declare class Tab extends React.PureComponent<Props & ReduxProps, State> {
    constructor(props: any);
    render(): JSX.Element;
    private startEditName;
    private stopEditName;
    private handleKeyDown;
    private handleMouseOverCross;
    private handleMouseOutCross;
    private handleSelectSession;
    private handleCloseSession;
    private handleEditName;
}
declare const _default: import("react-redux").ConnectedComponent<typeof Tab, Pick<React.ClassAttributes<Tab> & Props & ReduxProps, "session" | "selectedSessionId" | "ref" | "key">>;
export default _default;
