import * as React from 'react';
import { GraphQLConfig } from '../graphqlConfig';
import { Map } from 'immutable';
export interface Props {
    config: GraphQLConfig;
    folderName: string;
    theme: string;
    activeEnv: string;
    onSelectEnv: (endpoint: string, projectName?: string) => void;
    onNewWorkspace?: () => void;
    showNewWorkspace: boolean;
    isElectron: boolean;
    activeProjectName?: string;
    configPath?: string;
}
export interface ReduxProps {
    counts: Map<string, number>;
    openConfigTab: () => void;
}
declare class ProjectsSideNav extends React.Component<Props & ReduxProps, {}> {
    render(): JSX.Element;
    private renderEndpoints;
}
declare const _default: import("react-redux").ConnectedComponent<typeof ProjectsSideNav, Pick<React.ClassAttributes<ProjectsSideNav> & Props & ReduxProps, "ref" | "key" | "theme" | "config" | "configPath" | "onSelectEnv" | "activeEnv" | "activeProjectName" | "folderName" | "onNewWorkspace" | "showNewWorkspace" | "isElectron">>;
export default _default;
