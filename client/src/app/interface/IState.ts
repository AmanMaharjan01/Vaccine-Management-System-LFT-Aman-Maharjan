import { IExampleAwareState } from 'app/redux/modules/exampleModule/example-contracts';

export type IStateType = IExampleAwareState;

export type IState = Partial<IStateType>;
