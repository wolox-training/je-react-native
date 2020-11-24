import React from 'react';
import { StatusBar } from 'react-native';
import Library from '@screens/Library';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Library />
    </>
  );
};

export default App;
