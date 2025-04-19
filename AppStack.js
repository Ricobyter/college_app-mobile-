import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
import Login from "./pages/Login";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import UserProfile from "./pages/UserProfile";
import GetProfessors from "./pages/GetProfessors";
import ProfessorProfile from "./pages/ProfessorProfile";
import ChangePassword from "./pages/profile/ChangePassword";
import UserSecurity from "./pages/profile/UserSecurity";
import PasswordChangeConfirmation from "./pages/profile/PasswordChangeConfirmation";
import UserPersonalInfo from "./pages/profile/UserPersonalInfo";
import AdminDashboard from "./pages/AdminDashboard";
import AddProfessor from "./pages/AddProfessor";
import AddStudent from "./pages/AddStudent";
import AddVF from "./pages/AddVF";
import Programs from "./pages/Programs";
import Btech from "./pages/Btech";
import Mtech from "./pages/Mtech";
import Phd from "./pages/Phd";
import Research from "./pages/Research";
import Publications from "./pages/Publications";
import Projects from "./pages/Projects";
import ResearchW from "./pages/ResearchW";
import Placement from "./pages/Placement";
import NewsEvents from "./pages/NewsEvents";
import Contacts from "./pages/Contacts";
import Facilities from "./pages/Facilities";
import Gallery from "./pages/Gallery";
import Info from "./components/Info";
import Notification from "./components/Notification";
import GetStudents from "./pages/GetStudents";
import GetVF from "./pages/GetVF";
import GetStaff from "./pages/GetStaff";
import GetPeople from "./pages/GetPeople";
import Links from "./pages/Link";
import Announcement from "./pages/Announcement";
import AddAnnouncement from "./pages/AddAnnouncement";
import AddDegree from "./pages/profile/AddDegree";
import ShowDegrees from "./pages/profile/ShowDegrees";
import AddEvent from "./pages/AddEvent";
// import RealtimeDataPage from "./pages/RealtimeData";
import { useSelector } from "react-redux";
import EventsScreen from "./pages/EventScreen";
import NoticesScreen from "./pages/NoticeScreen";

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("MainPage");
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return <Home />;
};

const AppStack = ({navigation}) => {
  const { uid } = useSelector((state) => state.user);
  const [initialRoute, setInitialRoute] = useState("Home");

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialRoute("MainPage");
    }, 2500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}
    //  initialRouteName={initialRoute}
     >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="MainPage" component={MainPage} />
      <Stack.Screen name="LoginPage" component={LoginPage} />
      <Stack.Screen name="UserProfile" component={UserProfile} />
      <Stack.Screen name="UserPersonalInfo" component={UserPersonalInfo} />
      <Stack.Screen name="GetProfessors" component={GetProfessors} />
      <Stack.Screen name="GetStudents" component={GetStudents} />
      <Stack.Screen name="GetVF" component={GetVF} />
      <Stack.Screen name="GetStaff" component={GetStaff} />
      <Stack.Screen name="GetPeople" component={GetPeople} />
      <Stack.Screen name="ProfessorProfile" component={ProfessorProfile} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen
        name="PasswordChangeConfirmation"
        component={PasswordChangeConfirmation}
      />
      <Stack.Screen name="UserSecurity" component={UserSecurity} />
      <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
      <Stack.Screen name="AddProfessor" component={AddProfessor} />
      <Stack.Screen name="AddStudent" component={AddStudent} />
      <Stack.Screen name="AddVF" component={AddVF} />
      <Stack.Screen name="AddAnnouncement" component={AddAnnouncement} />
      <Stack.Screen name="AddDegree" component={AddDegree} />
      <Stack.Screen name="AddEvent" component={AddEvent} />
      <Stack.Screen name="EventsScreen" component={EventsScreen} />
      <Stack.Screen name="Announcement" component={Announcement} />
      <Stack.Screen name="Programs" component={Programs} />
      <Stack.Screen name="Btech" component={Btech} />
      <Stack.Screen name="Mtech" component={Mtech} />
      <Stack.Screen name="Phd" component={Phd} />
      <Stack.Screen name="Links" component={Links} />
      <Stack.Screen name="Research" component={Research} />
      <Stack.Screen name="Publications" component={Publications} />
      <Stack.Screen name="Projects" component={Projects} />
      <Stack.Screen name="ResearchW" component={ResearchW} />
      <Stack.Screen name="Placement" component={Placement} />
      <Stack.Screen name="News" component={NewsEvents} />
      <Stack.Screen name="Contacts" component={Contacts} />
      <Stack.Screen name="Facilities" component={Facilities} />
      <Stack.Screen name="Gallery" component={Gallery} />
      <Stack.Screen name="Info" component={Info} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="Notice" component={NoticesScreen} />
      <Stack.Screen name="ShowDegrees" component={ShowDegrees} />
      
    </Stack.Navigator>
  );
};

export default AppStack;
