import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import strapiApi from "@Services/tools/strapiApi";

interface IState {
  user: any | null;
  isLoading: boolean;
  error: any;
}

const initialState: IState = {
  user: null,
  isLoading: false,
  error: null,
};

export const fetchAboutDetail = createAsyncThunk("user", async (id: string) => {
  const { data } = await strapiApi.get(`abouts/${id}?populate=avatar`);
  return data;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getMe(state, action) {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAboutDetail.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAboutDetail.fulfilled, (state, { payload }) => {
      state.user = payload?.data;
      state.isLoading = false;
    });
    builder.addCase(fetchAboutDetail.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error;
    });
  },
});

export const { getMe } = userSlice.actions;
export default userSlice.reducer;
