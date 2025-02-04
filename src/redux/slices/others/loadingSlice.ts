import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    show: true,
  };

  
  export const loadingSlice = createSlice({
    name: "BaseLoader",
    initialState,
    reducers: {
      initBaseLoader: (state, actions) => {
        
        
          state.show = actions.payload;
        
      },
    },
  });
  export const { initBaseLoader } = loadingSlice.actions;
  export default loadingSlice.reducer;