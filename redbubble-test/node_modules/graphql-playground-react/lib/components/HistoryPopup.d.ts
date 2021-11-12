import * as React from 'react';
import { HistoryFilter } from '../types';
import { Session } from '../state/sessions/reducers';
import { OrderedMap } from 'immutable';
export interface ReduxProps {
    isOpen: boolean;
    closeHistory: () => void;
    items: OrderedMap<string, Session>;
    toggleHistoryItemStarring: (sessionId: string) => void;
    duplicateSession: (session: Session) => void;
}
export interface State {
    selectedFilter: HistoryFilter;
    selectedItemIndex: string;
    searchTerm: string;
}
declare class HistoryPopup extends React.Component<ReduxProps, State> {
    constructor(props: ReduxProps);
    render(): JSX.Element;
    private handleClickUse;
    private handleItemSelect;
    private handleSelectFilter;
    private handleSearch;
}
declare const _default: import("react-redux").ConnectedComponent<typeof HistoryPopup, Pick<React.ClassAttributes<HistoryPopup> & ReduxProps, "ref" | "key">>;
export default _default;
