import React from 'react';
import { Provider, useDispatch } from 'react-redux';
import {SafeAreaView, StatusBar} from 'react-native';

import { store } from './Redux/Reducers';
import Router from './Router';

const App = (props:any) => {
  return (
    <>
      <Provider store={store}>
        <Router  />
        {/* <FlashMessage position="top" /> */}
      </Provider>
    </>

  );
};

export default App;

