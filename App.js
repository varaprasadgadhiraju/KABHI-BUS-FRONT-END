import React ,{useContext} from 'react';
import Home from "./components/Home/Home"
import UserSignin from './components/UserSignin/Signin';
import DriverSignin from './components/DriverSignin/DriverSignin'
// import Mainbar from './components/Mainbar/mainbar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Mainbar from './components/Mainbar/mainbar';
import UserSignup from './components/UserSignup/UserSignup';
import DriverSignup from './components/DriverSignup/DriverSignup';
import About from './components/Aboutus/Aboutus';
import Popular from './components/popularRoutes/popular';
// import Navbar from './components/Navbar/navbar';
import Epp from './components/Maps/maps';
import DriverHome from './components/DriverHome/driverHome';
import Seats from './components/seatsupdates/seatsupdate';
import Mainpage from './components/mainpage/mainpage';
import Available from './components/Available buses/Available';
import {Provider} from './components/Context'
import DriverAboutUs from './components/DriverAboutus/Aboutus'
import DriverPopularRoutes from './components/DriverPopular/popular'
import DriverBar from './components/Driverbar/Driverbar'
import {LoginContext} from './components/Context/index'



function App(props) {
  const Stack = createStackNavigator();
  const {User,Driver}=useContext(LoginContext)
  const [UserisLogin,setUserisLogin]=User
  const [DriverisLogin,setDriverisLogin]=Driver
  useEffect(()=>{
    (async()=>{
    
      let userToken = await AsyncStorage.getItem("USER_JWT_KEY")
      if(userToken){
        setUserisLogin(true)
      }else{
        setUserisLogin(false)
      }
      let DriverToken = await AsyncStorage.getItem("DRIVER_JWT_KEY")
      if(DriverToken){
        setDriverisLogin(true)
      }else{
        setDriverisLogin(false)
      }
      console.log("CONTEXT API",UserisLogin,DriverisLogin)
    })()
  },[])
  useEffect(()=>{
    console.log("CONTEXT API",UserisLogin,DriverisLogin)
  },[UserisLogin,DriverisLogin])
  return (
  
    <NavigationContainer>
      
    <Stack.Navigator  initialRouteName="Mainpage"
        screenOptions={{
          headerTitleAlign: "center",
          headerShown:false,

          headerStyle: {
            backgroundColor: "#000"
          },
          headerTintColor: "#f4f4f4",
          headerTitleStyle: {
            fontWeight: "bold"
          }
        }}>
      <Stack.Screen name="Mainpage"  component={Mainpage} />
      <Stack.Screen name="Home"  component={Home} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="UserSignin"  component={UserSignin} />
      <Stack.Screen name="DriverSignin" component={DriverSignin} />
      
      <Stack.Screen name="Popular" component={Popular} />
      <Stack.Screen name="Maps" component={Epp} />
      <Stack.Screen name="UserSignup" component={UserSignup} />
      <Stack.Screen name="DriverSignup" component={DriverSignup} />
      <Stack.Screen name="DriverHome" component={DriverHome} />
      <Stack.Screen name="Seats" component={Seats} />
      <Stack.Screen name="Available" component={Available} />
      <Stack.Screen name="DriverAbout" component={DriverAboutUs} />
      <Stack.Screen name="DriverPopular" component={DriverPopularRoutes} />
      <Stack.Screen name="DriverBar" component={DriverBar} />
      

      
      
      
    
    </Stack.Navigator>
   
    </NavigationContainer>
    
  );
}

import { useEffect } from 'react/cjs/react.development';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default ()=>{
  return (
    <Provider>
      <App/>
      </Provider >
  
  )
}