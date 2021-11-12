import * as React from 'react';
import { Session } from '../../state/sessions/reducers';
export interface Props {
    onNewSession: any;
    isApp?: boolean;
}
export interface ReduxProps {
    sessions: Session[];
    selectedSessionId: string;
    reorderTabs: (src: number, dest: number) => void;
}
interface State {
    sorting: boolean;
}
declare class TabBar extends React.PureComponent<Props & ReduxProps, State> {
    state: {
        sorting: boolean;
    };
    render(): JSX.Element;
    private onSortStart;
    private onSortEnd;
    private getHelperDimensions;
}
declare const _default: import("react-redux").ConnectedComponent<typeof TabBar, Pick<React.ClassAttributes<TabBar> & Props & ReduxProps, "ref" | "key" | "onNewSession" | "isApp">>;
export default _default;
