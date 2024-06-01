import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import StorageUtils from '../utils/storageUtils';

interface UserData {
  id: string;
  name: string;
  address: string;
  email: string;
  phone: string;
}

const initialState = {} as UserData;

const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    addUserData: (state, action: PayloadAction<UserData>) => {
      Object.assign(state, action.payload);
      StorageUtils.saveToLocalStorage('userData', action.payload);
    },
  },
});

export const { addUserData } = userDataSlice.actions;

export default userDataSlice.reducer;