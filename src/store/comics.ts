import { api } from "@/service";
import { Comic } from "@/types";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

export interface State {
  comics: Comic[];
}

const initialState: State = {
  comics: [],
};

export const getComicsByHeroId = createAsyncThunk(
  "characters/getComicsByHeroId",
  async (id: number, { dispatch }) => {
    const data = await api.get(`/characters/${id}/comics`);
    dispatch(comicsSlice.actions.setComics(data.data.data.results));
  }
);

export const comicsSlice = createSlice({
  name: "comics",
  initialState,
  reducers: {
    setComics: (state, action: PayloadAction<Comic[]>) => {
      state.comics = action.payload;
    },
  },
});

export const comicsReducer = comicsSlice.reducer;
export const comicsActions = comicsSlice.actions;
