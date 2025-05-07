/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {LeftDrawerParamList} from '../Screens';
import LeftDrawerContent from './LeftDrawerContent';
import TopTabStack from '../stack/TopTabStack';
import Drawer1Stack from '../stack/Drawer1Stack';
import Drawer2Stack from '../stack/Drawer2Stack';
import Drawer3Stack from '../stack/Drawer3Stack';

const Drawer = createDrawerNavigator<LeftDrawerParamList>();

const LeftDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: true, drawerType: 'front'}}
      drawerContent={props => {
        return <LeftDrawerContent {...props} />;
      }}>
      <Drawer.Screen name="StackNav" component={TopTabStack} />
      {/* <Drawer.Screen name="TopTab" component={TopTabStack} />
      <Drawer.Screen name="Drawer1" component={Drawer1Stack} />
      <Drawer.Screen name="Drawer2" component={Drawer2Stack} />
      <Drawer.Screen name="Drawer3" component={Drawer3Stack} /> */}
    </Drawer.Navigator>
  );
};

export default LeftDrawer;
