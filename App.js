import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider, useSelector } from 'react-redux';
import store from './store/store';
import LoadingScreen from './components/LoadingScreen';
import Toast from 'react-native-toast-message';
import Sidebar from './components/Sidebar';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AppStack from './AppStack'; 

const Drawer = createDrawerNavigator();

const Navigator = () => {
  const [initialRoute, setInitialRoute] = useState('Home');
  const { uid } = useSelector((state) => state.user);

  useEffect(() => {
    setInitialRoute(uid ? 'AppStack' : 'Home');
  }, [uid]);

  if (initialRoute === null) {
    return <LoadingScreen />;
  }

  return (
    <Drawer.Navigator 
      screenOptions={{ headerShown: false }} 
      initialRouteName={initialRoute}
      drawerContent={(props) => <Sidebar {...props} />}
    >
      <Drawer.Screen name="AppStack" component={AppStack} />
    </Drawer.Navigator>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      {/* <ErrorBoundary> */}
        <NavigationContainer>
          <Navigator />
          <Toast />
        </NavigationContainer>
      {/* </ErrorBoundary> */}
    </Provider>
  );
};

export default App;
