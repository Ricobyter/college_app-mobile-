import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Provider, useSelector } from 'react-redux';
import store from './store/store';
import LoadingScreen from './components/LoadingScreen';
import Toast from 'react-native-toast-message';
import './App.css';
// import ErrorBoundary from './utils/ErrorBoundary';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import ForgotPassword from './pages/ForgotPassword';
import Signup from './pages/Signup';
import Login from './pages/Login';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import UserProfile from './pages/UserProfile';
import GetProfessors from './pages/GetProfessors';
import ProfessorProfile from './pages/ProfessorProfile';
import ChangePassword from './pages/profile/ChangePassword';
import UserSecurity from './pages/profile/UserSecurity';
import PasswordChangeConfirmation from './pages/profile/PasswordChangeConfirmation';
import UserEducation from './pages/profile/UserEducation';
import UserPersonalInfo from './pages/profile/UserPersonalInfo';
import AdminDashboard from './pages/AdminDashboard';
import AddProfessor from './pages/AddProfessor';

const Drawer = createDrawerNavigator();

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
    <Drawer.Navigator 
      screenOptions={{ headerShown: false }} 
      initialRouteName={initialRoute}
      drawerContent={(props) => <Sidebar {...props} />}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Signup" component={Signup} />
      <Drawer.Screen name="ForgotPassword" component={ForgotPassword} />
      <Drawer.Screen name="MainPage" component={MainPage} />
      <Drawer.Screen name="LoginPage" component={LoginPage} />
      <Drawer.Screen name="UserProfile" component={UserProfile} />
      <Drawer.Screen name="UserPersonalInfo" component={UserPersonalInfo} />
      <Drawer.Screen name="GetProfessors" component={GetProfessors} />
      <Drawer.Screen name="ProfessorProfile" component={ProfessorProfile} />
      <Drawer.Screen name="ChangePassword" component={ChangePassword} />
      <Drawer.Screen name="PasswordChangeConfirmation" component={PasswordChangeConfirmation} />
      <Drawer.Screen name="UserSecurity" component={UserSecurity} />
      <Drawer.Screen name="UserEducation" component={UserEducation} />
      <Drawer.Screen name="AdminDashboard" component={AdminDashboard} />
      <Drawer.Screen name="AddProfessor" component={AddProfessor} />
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
