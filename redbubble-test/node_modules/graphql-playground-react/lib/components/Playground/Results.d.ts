import * as React from 'react';
import { List } from 'immutable';
import { ResponseRecord } from '../../state/sessions/reducers';
export interface Props {
    setRef: (ref: any) => void;
}
export interface ReduxProps {
    responses: List<ResponseRecord>;
}
declare const _default: import("react-redux").ConnectedComponent<React.SFC<Props & ReduxProps>, Pick<Props & ReduxProps, "setRef">>;
export default _default;
