import { offline } from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';
import { Config } from '@redux-offline/redux-offline/lib/types';
import { IState } from 'app/interface/IState';
import { applyMiddleware, Middleware, StoreEnhancer } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, IModuleStore } from 'redux-dynamic-modules';
import { getSagaExtension } from 'redux-dynamic-modules-saga';
import getExampleModule from './modules/exampleModule';

const configureOffline = (offlineConfigOverrides: Partial<Config>) =>
  offline({
    ...offlineConfig,
    ...offlineConfigOverrides,
  }) as StoreEnhancer;

const middlewares: Middleware[] = [];
const middlewareEnhancer = applyMiddleware(...middlewares);

const enhancers = [middlewareEnhancer, configureOffline(offlineConfig)];

const store: IModuleStore<IState> = createStore(
  {
    initialState: {},
    enhancers,
    extensions: [getSagaExtension({} /* saga context */)],
    advancedComposeEnhancers: composeWithDevTools({
      trace: true,
    }),
  },

  getExampleModule()

  /* ...any additional modules */
);

export default store;
