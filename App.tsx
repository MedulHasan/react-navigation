import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import LeftDrawer from './src/navigation/drawer/LeftDrawer';

const App = () => {
  return (
    <NavigationContainer>
      <LeftDrawer />
    </NavigationContainer>
  );
};

export default App;
