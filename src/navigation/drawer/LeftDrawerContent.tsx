import {View, Button} from 'react-native';
import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerNavigationProp,
} from '@react-navigation/drawer';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {AppStackParamListKeys, LeftDrawerParamList} from '../Screens';

const DrawerTab: AppStackParamListKeys[] = [
  'TopTab',
  'Drawer1',
  'Drawer2',
  'Drawer3',
];

const LeftDrawerContent = (props: DrawerContentComponentProps) => {
  const {state} = props;
  const navigation = useNavigation<DrawerNavigationProp<LeftDrawerParamList>>();
  return (
    <View style={{marginTop: 100}}>
      {DrawerTab.map((item, index) => (
        <Button
          title={item}
          key={index}
          onPress={() => {
            const routes = state.routes[0].state?.routes;
            const isRouteExist = routes?.find(route => route.name === item);
            if (isRouteExist && routes?.length) {
              const popCount =
                routes.findIndex(route => route.name === item) + 1;
              for (let i = 0; i < routes.length - popCount; i++) {
                navigation.goBack();
              }
              navigation.dispatch(DrawerActions.closeDrawer());
            } else {
              navigation.navigate('AppStack', {screen: item});
            }
          }}
        />
      ))}
    </View>
  );
};

export default LeftDrawerContent;
