import AsyncStorage from '@react-native-async-storage/async-storage';
import React,{useContext,useEffect} from 'react'
import { useState } from 'react';
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native';
import {LoginContext} from '../Context/index'

const Mainbar=(props)=>{
    let data
const {User} =useContext(LoginContext)
const [UserisLogin,setUserisLogin]=User


   const home=(props)=>{
if(props.Signin){
     props.Signin.navigation.navigate('Home')
      }
    }
    
    const logout=async()=>{
     
   let val=  await AsyncStorage.removeItem('USER_JWT_KEY')
        
            setUserisLogin(false)
            props.Signin.navigation.navigate('Mainpage')
     
        console.log("LOGOUT",data)
      
    }
    console.log("kd",UserisLogin)
// useEffect(()=>{
//          async function data(){
//                 data= await AsyncStorage.getItem('USER_JWT_KEY')
//             }
//             data()
// },[])
    
    // console.log("HI",data)
        return(
       
            <View style={style.mainnavbar}>
              
            <TouchableOpacity onPress={()=>home(props)}><Text style={style.maindata}>HOME</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>{props.Signin.navigation.navigate("Popular")}}><Text style={style.maindata} >POPULAR ROUTES</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>{props.Signin.navigation.navigate("About")}}><Text style={style.maindata}>ABOUT US</Text></TouchableOpacity>
           { UserisLogin? <TouchableOpacity  onPress={()=>logout()} ><Text style={style.maindata}>LOGOUT</Text></TouchableOpacity> :<TouchableOpacity  onPress={()=>props.Signin.navigation.navigate('UserSignin')} ><Text style={style.maindata}>SIGNIN</Text></TouchableOpacity> }
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

export default Mainbar