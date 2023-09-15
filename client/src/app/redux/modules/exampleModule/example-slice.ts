import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { REQUEST_EXAMPLE } from './example-constants';
import { ICounterState } from './example-contracts';

const initialState: ICounterState = { data: [], status: null };

export const requestExample = createAction(REQUEST_EXAMPLE);

const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    getData(state) {
      const myState = { ...state };
      myState.status = 'requesting';
    },
    recievedData(state, action: PayloadAction<object>) {
      const myState = { ...state };
      myState.data = action.payload as object[];
      myState.status = 'received';
    },
    errorData(state) {
      const myState = { ...state };
      myState.data = [] as object[];
      myState.status = 'error';
    },
  },
});

export const { getData, recievedData, errorData } = exampleSlice.actions;
export default exampleSlice.reducer;
