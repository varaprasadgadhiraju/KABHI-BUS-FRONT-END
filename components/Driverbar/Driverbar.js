import React,{useContext} from 'react'
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native'
import HoverSignIn from '../SigninHover'
import {LoginContext} from '../Context/index'
import AsyncStorage from '@react-native-async-storage/async-storage';
const Driverbar=(props)=>{
   const {Driver}=useContext(LoginContext)
   const [DriverisLogin,setDriverisLogin]=Driver
  const Logout=async(props)=>{
    let val=  await AsyncStorage.removeItem('DRIVER_JWT_KEY')
      setDriverisLogin(false)
      props.Signin.navigation.navigate('Mainpage')
  }
    
      console.log("Driver props",props)
        return(
            <View style={style.mainnavbar}>
              
            <TouchableOpacity onPress={()=>props.Signin.navigation.navigate('DriverHome')}><Text style={style.maindata}>HOME</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>{props.Signin.navigation.navigate("DriverPopular")}}><Text style={style.maindata} >POPULAR ROUTES</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>{props.Signin.navigation.navigate("DriverAbout")}}><Text style={style.maindata}>ABOUT US</Text></TouchableOpacity>
           {DriverisLogin?  <TouchableOpacity  onPress={()=>Logout(props)} ><Text style={style.maindata}>LOGOUT</Text></TouchableOpacity> :<TouchableOpacity  onPress={()=>props.Signin.navigation.navigate('DriverSignin')} ><Text style={style.maindata}>SIGNIN </Text></TouchableOpacity> }
            {/* <HoverSignIn signin={this.props} /> */}
            
            </View>
        )
    }

const style=StyleSheet.create({

    mainnavbar:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        paddingTop: 10,
        color: "white",
        backgroundColor:  'rgb(17, 102, 172)',
       paddingRight:10
        
    },
    maindata:{
        color:'white',
        fontSize:15,
        textAlign:'center',
        fontWeight:'bold',
        marginBottom:10,
        paddingTop:10,
        paddingLeft:14,
        marginTop:2,
       
    }
})

// .main-nav-bar{
//     background-color:  rgb(17, 102, 172);
//     height: 50px;
// }
// .main-nav-bar Text{
//     cursor: pointer;
//     font-weight: bold;
   
// }
// a{
    
//     color:white
// }

export default Driverbar