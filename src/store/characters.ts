import { api } from "@/service";
import { Hero } from "@/types";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

export interface State {
  characters: Hero[];
  page: number;
  perPage: number;
}

const initialState: State = {
  characters: [],
  page: 1,
  perPage: 20,
};

export const getCharacters = createAsyncThunk(
  "characters/getCharacters",
  async (payload, { dispatch, getState }) => {
    const { page, perPage } = (getState() as RootState).characters;
    const data = await api.get("/characters", {
      params: {
        limit: perPage,
        offset: (page - 1) * perPage,
      },
    });
    dispatch(charactersActions.setCharacters(data.data.data.results));
  }
);

export const getHeroDetailsById = createAsyncThunk(
  "characters/getHeroDetailsById",
  async (id: number, { dispatch }) => {
    const data = await api.get(`/characters/${id}`);
    dispatch(charactersActions.setCharacter(data.data.data.results[0]));
  }
);

export const selectCharacterById = (id: number) => (state: RootState) =>
  state.characters.characters.find((character) => character.id === id);

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    setCharacters: (state, action: PayloadAction<Hero[]>) => {
      state.characters = action.payload;
    },
    setCharacter: (state, action: PayloadAction<Hero>) => {
      const character = action.payload;
      const index = state.characters.findIndex(({ id }) => character.id === id);

      if (index === -1) {
        state.characters = [character, ...state.characters];
        return;
      }
      state.characters[index] = character;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
});

export const charactersReducer = charactersSlice.reducer;
export const charactersActions = charactersSlice.actions;
