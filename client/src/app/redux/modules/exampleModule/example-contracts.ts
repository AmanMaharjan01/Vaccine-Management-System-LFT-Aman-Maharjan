export interface ICounterState {
  data: object[];
  status: 'requesting' | 'received' | 'error' | null;
}

export interface IExampleAwareState {
  example: ICounterState;
}
