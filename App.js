import React, { Suspense, lazy } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './store/store';
import LoadingScreen from './components/LoadingScreen';
import Toast from 'react-native-toast-message'
import './App.css'
import ErrorBoundary from './src/utils/ErrorBounday';

const Home = lazy(() => import('./pages/Home'));
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'));
const Signup = lazy(() => import('./pages/Signup'));
const Login = lazy(() => import('./pages/Login'));
const MainPage = lazy(() => import('./pages/MainPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const UserProfile = lazy(() => import('./pages/UserProfile'));



const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <ErrorBoundary >
      <NavigationContainer>

        <Suspense fallback={<LoadingScreen />}>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="MainPage" component={MainPage} />
            <Stack.Screen name="LoginPage" component={LoginPage} />
            <Stack.Screen name="UserProfile" component={UserProfile} />
          </Stack.Navigator>
        </Suspense>
        
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </NavigationContainer>
      </ErrorBoundary>
    </Provider>
  );
};

export default App;

