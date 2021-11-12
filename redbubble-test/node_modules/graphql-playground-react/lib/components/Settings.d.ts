import * as React from 'react';
export interface Props {
    onClick: () => void;
}
declare class Settings extends React.Component<Props, {}> {
    render(): JSX.Element;
}
declare const _default: import("react-redux").ConnectedComponent<typeof Settings, Pick<React.ClassAttributes<Settings> & Props, "ref" | "key">>;
export default _default;
