import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "../saga";
import commentsReducer from "../reducers/commentsReducer";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
   comments: commentsReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;