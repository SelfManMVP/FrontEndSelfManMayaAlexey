import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface ILightDarkModeState {
    currentLightDarkMode: boolean
}

const initialState: ILightDarkModeState = {
    currentLightDarkMode: true,
}

export const lightDarkModeSlice = createSlice ({
    name: 'lightDarkMode',
    initialState,
    reducers: {
        changeLightDarkMode: (state, action: PayloadAction<boolean>) => {
            state.currentLightDarkMode = action.payload;
        },
    }
});

export const {changeLightDarkMode} = lightDarkModeSlice.actions;
export default lightDarkModeSlice.reducer;