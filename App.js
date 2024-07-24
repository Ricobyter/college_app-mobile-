import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/Stack';
// import { createStackNavigator } from '@react-navigation/stack';
import { Provider, useSelector } from 'react-redux';
import store from './store/store';
import LoadingScreen from './components/LoadingScreen';
import Toast from 'react-native-toast-message';
import './App.css';
// import ErrorBoundary from './utils/ErrorBoundary';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import ForgotPassword from './pages/ForgotPassword';
import Login from './pages/Login';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import UserProfile from './pages/UserProfile';
import GetProfessors from './pages/GetProfessors';
import ProfessorProfile from './pages/ProfessorProfile';
import ChangePassword from './pages/profile/ChangePassword';
import UserSecurity from './pages/profile/UserSecurity';
import PasswordChangeConfirmation from './pages/profile/PasswordChangeConfirmation';
import Usereducation from './pages/profile/Usereducation';
import UserPersonalInfo from './pages/profile/UserPersonalInfo';
import AdminDashboard from './pages/AdminDashboard';
import AddProfessor from './pages/AddProfessor';
import Programs from './pages/Programs';
import Btech from './pages/Btech';
import Mtech from './pages/Mtech';
import Phd from './pages/Phd';
import Research from './pages/Research';
import Publications from './pages/Publications';
import Projects from './pages/Projects';
import ResearchW from './pages/ResearchW';
import Placement from './pages/Placement';
import NewsEvents from './pages/NewsEvents';
import Contacts from './pages/Contacts';
import Facilities from './pages/Facilities';
import Gallery from './pages/Gallery';
import Info from './components/Info';
import Notification from './components/Notification';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const [initialRoute, setInitialRoute] = useState('Home');
  const { uid } = useSelector((state) => state.user);

  useEffect(() => {
    setInitialRoute(uid ? 'MainPage' : 'Home');
  }, [uid]);

  if (initialRoute === null) {
    return <LoadingScreen />;
  }

  return (
    <Stack.Navigator 
      screenOptions={{ headerShown: false }} 
      initialRouteName='MainPage'
      StackContent={(props) => <Sidebar {...props} />}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="MainPage" component={MainPage} />
      <Stack.Screen name="LoginPage" component={LoginPage} />
      <Stack.Screen name="UserProfile" component={UserProfile} />
      <Stack.Screen name="UserPersonalInfo" component={UserPersonalInfo} />
      <Stack.Screen name="GetProfessors" component={GetProfessors} />
      <Stack.Screen name="ProfessorProfile" component={ProfessorProfile} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="PasswordChangeConfirmation" component={PasswordChangeConfirmation} />
      <Stack.Screen name="UserSecurity" component={UserSecurity} />
      <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
      <Stack.Screen name="AddProfessor" component={AddProfessor} />
      <Stack.Screen name="Programs" component={Programs} />
      <Stack.Screen name="Btech" component={Btech} />
      <Stack.Screen name="Mtech" component={Mtech} />
      <Stack.Screen name="Phd" component={Phd} />
      <Stack.Screen name="Research" component={Research} />
      <Stack.Screen name="Publications" component={Publications} />
      <Stack.Screen name="Projects" component={Projects} />
      <Stack.Screen name="ResearchW" component={ResearchW} />
      <Stack.Screen name="Placement" component={Placement} />
      <Stack.Screen name="NewsEvents" component={NewsEvents} />
      <Stack.Screen name="Contacts" component={Contacts} />
      <Stack.Screen name="Facilities" component={Facilities} />
      <Stack.Screen name="Gallery" component={Gallery} />
      <Stack.Screen name="Info" component={Info} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="Usereducation" component={Usereducation} />
    </Stack.Navigator>
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
