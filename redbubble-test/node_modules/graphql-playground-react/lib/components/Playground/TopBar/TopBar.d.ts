import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Session } from '../../../state/sessions/reducers';
import { ISettings } from '../../../types';
export interface Props {
    endpoint: string;
    shareEnabled?: boolean;
    fixedEndpoint?: boolean;
    isPollingSchema: boolean;
    endpointUnreachable: boolean;
    session: Session;
    editEndpoint: (value: string) => void;
    prettifyQuery: () => void;
    openHistory: () => void;
    share: () => void;
    refetchSchema: () => void;
    settings: ISettings;
}
declare class TopBar extends React.Component<Props, {}> {
    static contextTypes: {
        store: PropTypes.Requireable<PropTypes.InferProps<{
            subscribe: PropTypes.Validator<(...args: any[]) => any>;
            dispatch: PropTypes.Validator<(...args: any[]) => any>;
            getState: PropTypes.Validator<(...args: any[]) => any>;
        }>>;
    };
    render(): JSX.Element;
    copyCurlToClipboard: () => void;
    onChange: (e: any) => void;
    onKeyDown: (e: any) => void;
    openHistory: () => void;
    getCurl: () => string;
}
declare const _default: import("react-redux").ConnectedComponent<typeof TopBar, Pick<React.ClassAttributes<TopBar> & Props, "ref" | "key" | "shareEnabled">>;
export default _default;
export declare const Button: any;
