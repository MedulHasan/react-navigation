import React from 'react';
import {Drawer1StackParamList} from '../Screens';
import {createStackNavigator} from '@react-navigation/stack';
import D1Child from '../../screens/LeftDrawer/Drawer1/D1Child';
import Drawer1 from '../../screens/LeftDrawer/Drawer1';
const Stack = createStackNavigator<Drawer1StackParamList>();

const Drawer1Stack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Drawer1Screen" component={Drawer1} />
      <Stack.Screen name="Drawer1Child" component={D1Child} />
    </Stack.Navigator>
  );
};

export default Drawer1Stack;
