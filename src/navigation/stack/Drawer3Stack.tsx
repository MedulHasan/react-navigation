import React from 'react';
import {Drawer3StackParamList} from '../Screens';
import {createStackNavigator} from '@react-navigation/stack';
import Drawer3 from '../../screens/LeftDrawer/Drawer3';
const Stack = createStackNavigator<Drawer3StackParamList>();

const Drawer3Stack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Drawer3Stack" component={Drawer3} />
    </Stack.Navigator>
  );
};

export default Drawer3Stack;
