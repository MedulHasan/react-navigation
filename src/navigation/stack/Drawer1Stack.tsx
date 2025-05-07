import React from 'react';
import {Drawer1StackParamList} from '../Screens';
import {createStackNavigator} from '@react-navigation/stack';
import Drawer1 from '../../screens/LeftDrawer/Drawer1';
const Stack = createStackNavigator<Drawer1StackParamList>();

const Drawer1Stack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Drawer1Stack" component={Drawer1} />
    </Stack.Navigator>
  );
};

export default Drawer1Stack;
