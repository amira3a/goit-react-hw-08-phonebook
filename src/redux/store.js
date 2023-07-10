import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './contacts/slice';
//import { changeFilter } from './contacts/slice';
import userSlice from './users/userSlice';
// import storage from 'redux-persist/lib/storage';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';


// const authPersistConfig = {
//   key: 'user',
//   storage,
//   whitelist: ['token'],
// };

// export const store = configureStore({
//   reducer: {
//     user: persistReducer(authPersistConfig, userSlice),
//     contacts: rootReducer,
//     filter: changeFilter,
//   },
//   middleware(getDefaultMiddleware) {
//     return getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     });
//   },
//   devTools: process.env.NODE_ENV === 'development',
// });





const store = configureStore({
  reducer: {
    data: rootReducer,
    user: userSlice,
  },
});

// configureStore({
//   reducer: rootReducer
// })

export default store;
