import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { shopApi } from "./api/shop.api";
import { allItemsReducer } from "./Slices/allItemsSlice";
import { openCloseReducer } from "./Slices/openCloseSlice";

export const store = configureStore({
  reducer: {
    allItems: allItemsReducer,
    openClose: openCloseReducer,
    [shopApi.reducerPath]: shopApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shopApi.middleware),

});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
