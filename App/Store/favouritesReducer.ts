import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IGetFavourite, getFavourites } from "../Api/getFavourites";
import { IFavourites } from "../Interfaces/ApiResponses";

export const loadFavorites = createAsyncThunk<
  IFavourites[],
  IGetFavourite,
  { rejectValue: string }
>("getFavourites", async (param: IGetFavourite, { rejectWithValue }) => {
  try {
    const result = await getFavourites(param);
    if (!result.ok) return rejectWithValue(result.data.message);
    return result.data;
  } catch (error) {
    throw new Error("oops something went wrong");
  }
});

type IFavouritesSchema = {
  loading: boolean;
  error: boolean;
  errorMessage?: string;
  data: IFavourites[];
};

const initialState: IFavouritesSchema = {
  data: [],
  error: false,
  loading: false,
  errorMessage: undefined,
};

const favouritesSlice = createSlice({
  initialState,
  name: "favouritesSlice",
  reducers: {
    loadMore: () => {
      console.log("I am going to load the favourites lazily");
    },
  },
  extraReducers(builder) {
    builder.addCase(loadFavorites.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loadFavorites.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
      state.errorMessage = action.payload
        ? action.payload
        : action.error.message;
    });
    builder.addCase(loadFavorites.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.data = payload;
    });
  },
});

export const { loadMore } = favouritesSlice.actions;

export default favouritesSlice.reducer;
