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

export type AppStackParamListKeys = keyof AppStackParamList;
