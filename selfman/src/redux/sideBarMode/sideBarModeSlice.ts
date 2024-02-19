import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface ISideBarModeState {
    currentSideBarMode: boolean,
}

const initialState: ISideBarModeState = {
    currentSideBarMode: true,
}

export const sideBarModeSlice = createSlice ({
    name: 'sideBarMode',
    initialState,
    reducers: {
        changeSideBarMode: (state, action: PayloadAction<boolean>) => {
            state.currentSideBarMode = action.payload
        },
    }
});

export const {changeSideBarMode} = sideBarModeSlice.actions;
export default sideBarModeSlice.reducer;