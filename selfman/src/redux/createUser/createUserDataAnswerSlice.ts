import { PayloadAction, UnknownAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_BASE_URL } from "../../utils/constants";
import { ICreateUserDataState } from "./createUserDataSlice";

interface ICreateUserDataAnswer {
  id: number;
  confirmed: string;
  roles: [
    {
      name: string;
    }
  ];
}
interface ICreateUserDataAnswerState {
  answer: ICreateUserDataAnswer;
  loading: boolean;
  error: string | null;
}

const initialState: ICreateUserDataAnswerState = {
  answer: {
    id: 0,
    confirmed: "1",
    roles: [
      {
        name: "2",
      },
    ],
  },
  loading: false,
  error: null,
};

export const fetchCreateUserDataAnswer = createAsyncThunk<
  ICreateUserDataAnswer,
  ICreateUserDataState,
  { rejectValue: string }
>(
  "createUserDataAnswer/fetchCreateUserDataAnswer",
  async function (createUserData, { rejectWithValue }) {
    const requestOptions = {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(createUserData),
    };
    const response = await fetch(
      `${API_BASE_URL}/api/user/register`,
      requestOptions
    );
    if (!response.ok) return rejectWithValue("ServerError");
    return (await response.json()) as ICreateUserDataAnswer;
  }
);

const isError = (action: UnknownAction) => {
  return action.type.endsWith('rejected');
}

export const createUserDataAnswerSlice = createSlice({
  name: "createUserDataAnswer",
  initialState,
  reducers: {
    // setCreateUserDataAnswer: (
    //   state,
    //   action: PayloadAction<ICreateUserDataAnswerState>
    // ) => {
    //   state.id = action.payload.id;
    //   state.confirmed = action.payload.confirmed;
    //   state.roles[0].name = action.payload.roles[0].name;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCreateUserDataAnswer.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCreateUserDataAnswer.fulfilled, (state, action) => {
        state.answer=action.payload;
        state.loading=false;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false;
      })
  }
});

// export const { setCreateUserDataAnswer } = createUserDataAnswerSlice.actions;
export default createUserDataAnswerSlice.reducer;
