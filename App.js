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

// const firebaseConfig = {
//   apiKey: "AIzaSyAI5pK-VwaGdqdgDsaa3JIjkWfUrnb5r5U",
//   authDomain: "college-app-3b552.firebaseapp.com",
//   projectId: "college-app-3b552",
//   storageBucket: "college-app-3b552.appspot.com",
//   messagingSenderId: "322528510708",
//   appId: "1:322528510708:web:5beb590352df75a61454a1",
//   measurementId: "G-0RWG51W9DV"
// };