import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserData {
  id: string;
  name: string;
  address: string;
  email: string;
  phone: string;
}

const initialState: UserData[] = [];

const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    addUserData: (state, action: PayloadAction<UserData>) => {
      state.push(action.payload);
    },
  },
});

export const { addUserData } = userDataSlice.actions;

export default userDataSlice.reducer;