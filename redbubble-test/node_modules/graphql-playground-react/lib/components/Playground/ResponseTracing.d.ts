import * as React from 'react';
export interface TracingFormat {
    version: 1;
    startTime: string;
    endTime: string;
    duration: number;
    execution: {
        resolvers: Array<{
            path: Array<string | number>;
            parentType: string;
            fieldName: string;
            returnType: string;
            startOffset: number;
            duration: number;
        }>;
    };
}
export interface ReduxProps {
    tracing?: TracingFormat;
    tracingSupported?: boolean;
    startTime?: Date;
    endTime?: Date;
    queryRunning: boolean;
}
interface Props {
    open: boolean;
}
declare class ResponseTracing extends React.PureComponent<ReduxProps & Props> {
    render(): JSX.Element;
}
declare const _default: import("react-redux").ConnectedComponent<typeof ResponseTracing, Pick<React.ClassAttributes<ResponseTracing> & ReduxProps & Props, "open" | "ref" | "key">>;
export default _default;
