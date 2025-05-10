import {NavigatorScreenParams} from '@react-navigation/native';

export type LeftDrawerParamList = {
  AppStack: NavigatorScreenParams<AppStackParamList>;
};

export type AppStackParamList = {
  TopTab: undefined;
  Drawer1: undefined;
  Drawer2: undefined;
  Drawer3: undefined;
};

export type TopTabParamList = {
  Tab1: undefined;
  Tab2: undefined;
};

export type Drawer1StackParamList = {
  Drawer1Screen: undefined;
  Drawer1Child: undefined;
};

export type AppStackParamListKeys = keyof AppStackParamList;
