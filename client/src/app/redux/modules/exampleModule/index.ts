import { ISagaModule } from 'redux-dynamic-modules-saga';
import { IExampleAwareState } from './example-contracts';
import insightWatcherSaga from './example-saga';
import exampleSlice, { requestExample } from './example-slice';

export default function getExampleModule(): ISagaModule<IExampleAwareState> {
  return {
    id: 'career-module',
    reducerMap: {
      example: exampleSlice,
    },
    sagas: [insightWatcherSaga],
    // Actions to fire when this module is added/removed
    initialActions: [requestExample()],
    // finalActions: [],
  };
}
