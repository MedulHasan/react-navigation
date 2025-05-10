import React from 'react';
import {AppStackParamList} from '../Screens';
import TopTab from '../tab/TopTab';
import {createStackNavigator} from '@react-navigation/stack';
import Drawer2 from '../../screens/LeftDrawer/Drawer2';
import Drawer3 from '../../screens/LeftDrawer/Drawer3';
import Drawer1Stack from './Drawer1Stack';
const Stack = createStackNavigator<AppStackParamList>();

const TopTabStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="TopTab" component={TopTab} />
      <Stack.Screen name="Drawer1" component={Drawer1Stack} />
      <Stack.Screen name="Drawer2" component={Drawer2} />
      <Stack.Screen name="Drawer3" component={Drawer3} />
    </Stack.Navigator>
  );
};

export default TopTabStack;
