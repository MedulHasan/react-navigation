import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {TopTabParamList} from '../Screens';
import Tab1 from '../../screens/TopTab/Tab1';
import Tab2 from '../../screens/TopTab/Tab2';

const Tab = createMaterialTopTabNavigator<TopTabParamList>();

const TopTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tab1" component={Tab1} />
      <Tab.Screen name="Tab2" component={Tab2} />
    </Tab.Navigator>
  );
};

export default TopTab;
