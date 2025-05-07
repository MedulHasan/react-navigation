import {View, Button} from 'react-native';
import React from 'react';
import {DrawerContentComponentProps} from '@react-navigation/drawer';

const DrawerTab = ['TopTab', 'Drawer1', 'Drawer2', 'Drawer3'];

const LeftDrawerContent = (props: DrawerContentComponentProps) => {
  const {navigation} = props;
  // const navigation = useNavigation<DrawerNavigationProp<LeftDrawerParamList>>();
  return (
    <View style={{marginTop: 100}}>
      {DrawerTab.map((item, index) => (
        <Button
          title={item}
          key={index}
          onPress={() => {
            navigation.navigate(item);
          }}
        />
      ))}
    </View>
  );
};

export default LeftDrawerContent;
