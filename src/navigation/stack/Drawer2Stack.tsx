import React from 'react';
import {Drawer2StackParamList} from '../Screens';
import {createStackNavigator} from '@react-navigation/stack';
import Drawer2 from '../../screens/LeftDrawer/Drawer2';
const Stack = createStackNavigator<Drawer2StackParamList>();

const Drawer2Stack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Drawer2Stack" component={Drawer2} />
    </Stack.Navigator>
  );
};

export default Drawer2Stack;
