/**
 *  Copyright (c) Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
 */
/// <reference types="react" />
export interface ReduxProps {
    runQuery: (operationName?: string) => void;
    stopQuery: (sessionId: string) => void;
    queryRunning: boolean;
    operations: any[];
    sessionId: string;
}
export interface State {
    optionsOpen: boolean;
    highlight: any;
}
declare const _default: import("react-redux").ConnectedComponent<(wrappedComponentProps: any) => JSX.Element, Pick<any, string | number | symbol>>;
export default _default;
