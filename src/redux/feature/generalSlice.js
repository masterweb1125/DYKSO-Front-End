import { createSlice } from "@reduxjs/toolkit";

export const GeneralSlice = createSlice({
  name: "generalSlice",
  initialState: {
    captureData: {},
    serviceData: {},
   
  },

  reducers: {
  
      AddCaptureData: (state, action) => {
      state.captureData = action.payload;
      console.log("captureData load: ", action.payload);
      },

    AddServiceData: (state, action) => {
      state.serviceData = action.payload;
      console.log("action.payload general service data: ", action.payload);
    },

   
  },
});

export const {
AddCaptureData,  AddServiceData,
} = GeneralSlice.actions;

export default GeneralSlice.reducer;
