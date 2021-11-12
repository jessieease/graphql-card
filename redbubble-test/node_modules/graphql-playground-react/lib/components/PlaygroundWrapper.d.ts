import * as React from 'react';
import { Playground as IPlayground } from './Playground';
import { GraphQLConfig } from '../graphqlConfig';
import { EditorColours } from '../styled/theme';
import { ISettings } from '../types';
import { Session, Tab } from '../state/sessions/reducers';
import { ApolloLink } from 'apollo-link';
import { GraphQLSchema } from 'graphql';
export interface PlaygroundWrapperProps {
    endpoint?: string;
    endpointUrl?: string;
    subscriptionEndpoint?: string;
    setTitle?: boolean;
    settings?: ISettings;
    shareEnabled?: boolean;
    fixedEndpoint?: boolean;
    folderName?: string;
    configString?: string;
    showNewWorkspace?: boolean;
    isElectron?: boolean;
    canSaveConfig?: boolean;
    onSaveConfig?: (configString: string) => void;
    onNewWorkspace?: () => void;
    getRef?: (ref: any) => void;
    platformToken?: string;
    env?: any;
    config?: GraphQLConfig;
    configPath?: string;
    injectedState?: any;
    createApolloLink?: (session: Session, subscriptionEndpoint?: string) => ApolloLink;
    tabs?: Tab[];
    schema?: {
        __schema: any;
    };
    codeTheme?: EditorColours;
    workspaceName?: string;
    headers?: any;
}
export interface ReduxProps {
    theme: string;
    injectTabs: (tabs: Tab[]) => void;
}
export interface State {
    endpoint: string;
    subscriptionPrefix?: string;
    subscriptionEndpoint?: string;
    shareUrl?: string;
    platformToken?: string;
    configIsYaml?: boolean;
    configString?: string;
    activeProjectName?: string;
    activeEnv?: string;
    headers?: any;
    schema?: GraphQLSchema;
}
declare class PlaygroundWrapper extends React.Component<PlaygroundWrapperProps & ReduxProps, State> {
    playground: IPlayground;
    constructor(props: PlaygroundWrapperProps & ReduxProps);
    mapPropsToState(props: PlaygroundWrapperProps): State;
    extractEndpointAndHeaders(endpoint: any): {
        endpoint: any;
        headers?: undefined;
    } | {
        headers: any;
        endpoint: any;
    };
    removeLoader(): void;
    normalizeSubscriptionUrl(endpoint: any, subscriptionEndpoint: any): any;
    getGraphcoolSubscriptionEndpoint(endpoint: any): any;
    UNSAFE_componentWillReceiveProps(nextProps: PlaygroundWrapperProps & ReduxProps): void;
    getInitialActiveEnv(config?: GraphQLConfig): {
        projectName?: string;
        activeEnv?: string;
    };
    isConfigYaml(configString: string): boolean;
    absolutizeUrl(url: any): any;
    UNSAFE_componentWillMount(): void;
    componentDidMount(): void;
    setInitialWorkspace(props?: Readonly<PlaygroundWrapperProps & ReduxProps> & Readonly<{
        children?: React.ReactNode;
    }>): void;
    removePlaygroundInClass(): void;
    render(): JSX.Element;
    handleUpdateSessionCount: () => void;
    getPlaygroundRef: (ref: any) => void;
    handleChangeConfig: (configString: string) => void;
    handleSaveConfig: () => void;
    handleSelectEnv: (env: string, projectName?: string) => void;
    private handleChangeEndpoint;
    private handleChangeSubscriptionsEndpoint;
    private getTitle;
    private updateSubscriptionsUrl;
    private getSubscriptionsUrlCandidated;
    private wsEndpointValid;
    private getProjectId;
}
declare const _default: import("react-redux").ConnectedComponent<typeof PlaygroundWrapper, any>;
export default _default;
