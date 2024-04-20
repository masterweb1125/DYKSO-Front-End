import { createSlice } from "@reduxjs/toolkit";

export const UserInfo = createSlice({
  name: "user",
  initialState: {
    userData: {},
    serviceData: {},
    token: "",
    loading: false,
    error: false,
  },

  reducers: {
    MakingApiRequest: (state) => {
      state.loading = true;
    },

    setUserData: (state, action) => {
      console.log("login action.payload: ", action.payload);
      state.userData = action.payload.data;
      state.token = action.payload.token;
    },

    LogOutUser: (state) => {
      state.userData = {};
      state.token = "";
    },


    AddServiceData: (state, action) => {
      state.serviceData = action.payload;
      console.log("action.payload service data: ", action.payload);
    },

    ApiRequestFailed: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  setUserData,
  ApiRequestFailed,
  MakingApiRequest,
  LogOutUser,
  AddServiceData,
} = UserInfo.actions;

export default UserInfo.reducer;
