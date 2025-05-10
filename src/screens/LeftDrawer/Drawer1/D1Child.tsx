import {View, Text, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Drawer1StackParamList} from '../../../navigation/Screens';

const D1Child = () => {
  const navigation =
    useNavigation<StackNavigationProp<Drawer1StackParamList>>();
  return (
    <View>
      <Text>D1Child</Text>
      <Button title="Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default D1Child;
