import React,{useContext,useState} from 'react'
import ls from 'local-storage'
import { Text, TextInput, TouchableOpacity, View,StyleSheet, Modal ,ImageBackground, Pressable} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Mainbar from '../Mainbar/mainbar';
import Navbar from '../Navbar/navbar';
import SignupButton from '../SignupButton';
import Footer from '../Footer/Footer';
import {LoginContext} from '../Context'
import axios from 'axios'




function Signin(props){
    // state={
    //     email:"",
    //     password:"",
    //     modalVisible: false,
    //     token:""
    // }
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [token,setToken]=useState("")

    const {User}=useContext(LoginContext)
    const [UserisLogin,setUserisLogin]=User
   
     
    const SigninOk=async (props)=>{
      console.log("Context",UserisLogin)
      //  console.log("Signin props:",props)
        var data = JSON.stringify({"email":email,"password":password});
        
        var config = {
          method: 'post',
          url: 'http://192.168.1.102:5000/user/signin',
          headers: { 
            'Content-Type': 'application/json'
          },
          data : data
        };
        
        axios(config)
        .then( async(response) =>{
          
          console.log("Infooooo",JSON.stringify(response.data.token));
         
          setToken(response.data.token)

          // console.log("State Token",token)
          // console.log(setToken)
        
      let data= await AsyncStorage.setItem('USER_JWT_KEY',response.data.token)
      let data1=await AsyncStorage.getItem('USER_JWT_KEY')
      console.log("DATA",data1)
        if(data1){
                   
          setUserisLogin(true)
          alert("Signed in as a User!")
          props.navigation.navigate("Home")
         
          setEmail("")
          setPassword("")
          
        }else{
          
          setEmail("")
          setPassword("")
          alert("Please Check the details")
        }
    
        })
        .catch(function (error) {
          console.log(error);
        });

     
        // const info=jwt.verify(value,"SECRET KEY")
        // console.log(info)
        // const [isLogin,setisLogin]=useContext(LoginContext)
        // console.log("FROM CONTEXT",isLogin,setisLogin)
    // 
   }
    

  //  console.log("props",props)
        return(
           
            <View>
                <Navbar/>
                <Mainbar Signin={{props,UserisLogin}}  />
            <View style={style.background}>
            <View style={style.signinDetails}>
            <View style={style.View}>
            <View style={{width:"100%",display:"flex",flexDirection:"column"}}>
            <Text style={style.label} style={{color:'black',textAlign:'center'}}>Email</Text>
            <TextInput style={{marginTop:10,marginBottom:10,borderColor:'black',borderWidth:1,padding:6}} type='text' placeholder="Enter email" value={email} name="email" onChangeText={(text)=>setEmail(text)}></TextInput></View>
            <View style={{width:"100%",display:"flex",flexDirection:"column"}}>
            <Text style={style.label} style={{color:'black',textAlign:'center'}}>Password</Text>
            <TextInput secureTextEntry style={{marginTop:10,marginBottom:10,borderColor:'black',borderWidth:1,padding:6}} type="password" name="password" placeholder="Enter password" value={password} onChangeText={(text)=>setPassword(text)}></TextInput>
            </View>
            <TouchableOpacity style={style.SigninTouchableOpacity} onPress={()=>SigninOk(props)}><Text>Signin</Text></TouchableOpacity>
          <TouchableOpacity style={style.SigninTouchableOpacity1} onPress={()=>{props.navigation.navigate("UserSignup")}}><Text style={{color:"white"}}>New User? Signup</Text></TouchableOpacity>
             {/* <SignupButton Signin={props}/> */}
            </View>
            </View>
            </View>
            <Footer/>
            </View>
        )
    }
const style=StyleSheet.create({
   
    signindetails: {
        width: 365,
        height: 62.2,
        display: 'flex',
        alignItems: 'center',
        margin: 0,
      
        
    },
  
    background:{
        //  backgroundColor:"blue",
            height:350,
            width:'100%',
            justifyContent:'center',
            alignItems:'center',
            marginTop:15,
            marginBottom:111
        },
     text:{
            width: 100,
            paddingTop:10,
            paddingBottom:10,
            paddingLeft:20,
            paddingRight:20,
            margin: 5,
            alignSelf:'center',
            // border: 'none'
            },
            label:{
                margin: 0,
            },
    SigninTouchableOpacity:{
             
                backgroundColor:'#f0c14b',
                color:'black',
                borderRadius: 4,
                paddingTop:10,
                paddingBottom:10,
                paddingLeft:105,

                marginTop: 10,
                width: 246,
            },
            SigninTouchableOpacity1:{
             
              backgroundColor:"#368799",
              borderRadius: 4,
              paddingTop:10,
              paddingBottom:10,
              paddingLeft:72,

              marginTop: 10,
              width: 246,
          },
            View:{
                borderColor:'lightgrey',
                borderWidth:1,
                padding: 30,
                borderRadius: 4,
                width: 310,
                 backgroundColor:'#f0f0f0',

                height:330,
                marginTop:50
            },
})

export default Signin