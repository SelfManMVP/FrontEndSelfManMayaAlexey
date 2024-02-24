import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export interface ICreateUserDataState {
    email: string,
    password: string
}

const initialState: ICreateUserDataState = {
    email: '',
    password: ''
}

export const createUserDataSlice = createSlice({
    name: 'createUserData',
    initialState,
    reducers: {
        setCreateUserData:(state, action:PayloadAction<ICreateUserDataState>) => {
            state.email = action.payload.email;
            state.password = action.payload.password
        }
    }
})

export const {setCreateUserData} = createUserDataSlice.actions;
export default createUserDataSlice.reducer;
