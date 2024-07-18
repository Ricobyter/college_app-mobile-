import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider, useSelector } from 'react-redux';
import store from './store/store';
import LoadingScreen from './components/LoadingScreen';
import Toast from 'react-native-toast-message';
import './App.css';
import ErrorBoundary from './src/utils/ErrorBounday';
import UserPersonalInfo from './pages/profile/UserPersonalInfo';

import Home from './pages/Home';
import ForgotPassword from './pages/ForgotPassword';
import Signup from './pages/Signup';
import Login from './pages/Login';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import UserProfile from './pages/UserProfile';
import GetProfessors from './pages/GetProfessors';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const [initialRoute, setInitialRoute] = useState(null);
  const { uid } = useSelector((state) => state.user);

  useEffect(() => {
    setInitialRoute(uid ? 'MainPage' : 'Home');
  }, [uid]);

  if (initialRoute === null) {
    return <LoadingScreen />;
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={initialRoute}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="MainPage" component={MainPage} />
      <Stack.Screen name="LoginPage" component={LoginPage} />
      <Stack.Screen name="UserProfile" component={UserProfile} />
      <Stack.Screen name="UserPersonalInfo" component={UserPersonalInfo} />
      <Stack.Screen name="GetProfessors" component={GetProfessors} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <ErrorBoundary>
      <NavigationContainer>
        <Navigator />
        <Toast />
      </NavigationContainer>
      </ErrorBoundary>
    </Provider>
  );
};

export default App;
