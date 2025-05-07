/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {LeftDrawerParamList} from '../Screens';
import LeftDrawerContent from './LeftDrawerContent';
import TopTabStack from '../stack/TopTabStack';

const Drawer = createDrawerNavigator<LeftDrawerParamList>();

const LeftDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        drawerType: 'front',
        drawerStyle: {width: 200},
      }}
      drawerContent={props => {
        return <LeftDrawerContent {...props} />;
      }}>
      <Drawer.Screen name="AppStack" component={TopTabStack} />
    </Drawer.Navigator>
  );
};

export default LeftDrawer;
