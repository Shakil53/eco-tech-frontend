import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    userInfo: null,
    error: {},
  };

  
  export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
      addUserDetails: (state, actions) => {
        
        if (actions.payload) {
          state.userInfo = actions.payload;
        } else {
          state.error = actions.payload;
        }
      },
     
    },
  });

  export const { addUserDetails, } = userSlice.actions;
  export default userSlice.reducer;