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
            let nestedRoute = false;
            if (routes?.length) {
              nestedRoute = routes[routes.length - 1].state ? true : false;
            }
            const isRouteExist = routes?.find(route => route.name === item);
            if (isRouteExist && routes?.length) {
              const popCount =
                routes.findIndex(route => route.name === item) + 1;

              const goBackCount = nestedRoute
                ? routes.length - popCount + 1
                : routes.length - popCount;
              for (let i = 0; i < goBackCount; i++) {
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
