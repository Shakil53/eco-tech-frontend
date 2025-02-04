import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    show: true,
  };

  
  export const popUpSlice = createSlice({
    name: "popUp",
    initialState,
    reducers: {
      initPopUp: (state, actions) => {
        
        
          state.show = actions.payload;
        
      },
    },
  });
  export const { initPopUp } = popUpSlice.actions;
  export default popUpSlice.reducer;