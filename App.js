import React, { Suspense, lazy, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider, useSelector } from 'react-redux';
import store from './store/store';
import LoadingScreen from './components/LoadingScreen';
import Toast from 'react-native-toast-message';
import './App.css';
import ErrorBoundary from './src/utils/ErrorBounday';
import UserPersonalInfo from './pages/profile/UserPersonalInfo';

const Home = lazy(() => import('./pages/Home'));
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'));
const Signup = lazy(() => import('./pages/Signup'));
const Login = lazy(() => import('./pages/Login'));
const MainPage = lazy(() => import('./pages/MainPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const UserProfile = lazy(() => import('./pages/UserProfile'));

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
    <Suspense fallback={<LoadingScreen />}>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={initialRoute}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="UserProfile" component={UserProfile} />
        <Stack.Screen name="UserPersonalInfo" component={UserPersonalInfo} />
      </Stack.Navigator>
    </Suspense>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      
        <NavigationContainer>
          <Navigator />
          <Toast />
        </NavigationContainer>
      <ErrorBoundary></ErrorBoundary>
    </Provider>
  );
};

export default App;
