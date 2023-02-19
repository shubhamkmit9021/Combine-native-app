
import 'react-native-gesture-handler';
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './Screens/Home';
import Counter from './Screens/Counter';
import TaskList from './Screens/TaskList';
import CustomDrawerContent from './Screens/CustomDrawerContent';
import StopWatch from './Screens/StopWatch';
import ProductPage from './Screens/ProductPage/ProductPage';


const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Counter" component={Counter} />
      <Drawer.Screen name="StopWatch" component={StopWatch} />
      <Drawer.Screen name="TaskList" component={TaskList} />
      <Drawer.Screen name='ProductPage' component={ProductPage} />
      

    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
        <MyDrawer />
    </NavigationContainer>
  );
}
