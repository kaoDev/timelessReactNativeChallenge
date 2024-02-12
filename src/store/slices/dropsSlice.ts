import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IDropItem} from 'src/types';

interface IDropsState {
  dropItems: Array<IDropItem>;

  favoriteDropItems: Array<IDropItem>;
}

export const initialState: IDropsState = {
  dropItems: [],
  favoriteDropItems: [],
};

const dropsSlice = createSlice({
  name: 'drops',
  initialState,
  reducers: {
    setDropItems: (state, action) => {
      const {value} = action.payload;
      state.dropItems = [...value];
    },
    addFavoriteDropItems: (state, action) => {
      const {value} = action.payload;
      state.dropItems.push(value);
    },
    removeFavoriteDropItems: (state, action) => {
      const {id} = action.payload;
      const dropItems = state.dropItems;
      const filterDropItems = dropItems.filter(item => item.id !== id);

      state.dropItems = [...filterDropItems];
    },
  },
});

export const {setDropItems, addFavoriteDropItems, removeFavoriteDropItems} =
  dropsSlice.actions;

export const dropsReducer = dropsSlice.reducer;
