import React from 'react';
import { Provider } from 'react-redux';
import AppNavigator from './src/navigation/AppNavigator.js'
import { store } from './src/store/Store.js'
import { NativeBaseProvider } from 'native-base';

const App = () => {
  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </NativeBaseProvider>
  )
}

export default App