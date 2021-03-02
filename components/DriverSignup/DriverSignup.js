import React from "react";
import axios from 'axios';


// import { Redirect } from "react-router-dom";
import { StyleSheet, TextInput, TouchableOpacity ,View,Text} from "react-native";
import Navbar from "../Navbar/navbar";
import Mainbar from "../Mainbar/mainbar";
import Footer from "../Footer/Footer";
import Driverbar from "../Driverbar/Driverbar";
//creating a signup component and defining its state!
class DriverSignup extends React.Component{
    state={
        username:"",
        email:"",
        password:"",
        repassword:"",
        islogin:false
    }
    //assigning a fake data and storing in ls
// onchange=(text,name)=>{
//         let data={}
//         data[`${name}`]=text
//         this.setState(data)
//     }
    //validations and storing user signup data in ls...!

 
    // componentDidMount(){
    //     console.log("Initaila statee",this.state)
    // var axios = require('axios');
    // var config = {
    //   method: 'get',
    //   url: 'http://localhost:5000/user/all',
    //   headers: { }
    // };
    
    // axios(config)
    // .then(function (response) {
    //   console.log("Fetched data",JSON.stringify(response.data));
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });

    // }
SigninOk=()=>{
    var self=this
    var data = JSON.stringify({"username":this.state.username,"email":this.state.email,"password":this.state.password});

 var config = {
  method: 'post',
  url: 'http://192.168.1.102:5000/driver/signup',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
  alert("Signedup as a Driver sucessfully!")
  self.props.navigation.navigate('DriverSignin')
})
.catch(function (error) {
  console.log(error);
});

    }
    render(){

        
        return(
           
            <View>
                 <Navbar/>
                <Driverbar Signin={this.props} />
            <View style={style.background1}>
            <View style={style.signinDetails1}>
            <View style={style.View1}>
            <View style={{width:"100%",display:"flex",flexDirection:"column"}}>
            <Text style={style.label} style={{color:'black',textAlign:'center'}}>Username</Text>
            <TextInput style={{marginTop:10,marginBottom:10,borderColor:'black',borderWidth:1,padding:6}} type='text' placeholder="Enter Username" value={this.state.username} name="username" onChangeText={(text)=>this.setState({username:text})}></TextInput></View>
            <View style={{width:"100%",display:"flex",flexDirection:"column"}}>
            <Text style={style.label1} style={{color:'black',textAlign:'center'}}>Email</Text>
            <TextInput style={{marginTop:10,marginBottom:10,borderColor:'black',borderWidth:1,padding:6}} type='text' placeholder="Enter email" value={this.state.email} name="email" onChangeText={(text)=>this.setState({email:text})}></TextInput></View>
            <View style={{width:"100%",display:"flex",flexDirection:"column"}}>
            <Text  style={style.label1} style={{color:'black',textAlign:'center'}}>Password</Text>
            <TextInput secureTextEntry style={{marginTop:10,marginBottom:10,borderColor:'black',borderWidth:1,padding:6}} type="password" name="password" placeholder="Enter password" value={this.state.password} onChangeText={(text)=>this.setState({password:text})}></TextInput>
            <Text style={style.label1} style={{color:'black',textAlign:'center'}}>Re-Password</Text>
            <TextInput secureTextEntry style={{marginTop:10,marginBottom:10,borderColor:'black',borderWidth:1,padding:6}} type='text' placeholder="Re-enter Password" value={this.state.repassword} name="repassword" onChangeText={(text)=>this.setState({repassword:text})}></TextInput></View>
            <TouchableOpacity style={style.SigninTouchableOpacity1} onPress={()=>this.SigninOk()}><Text>Signup</Text></TouchableOpacity>
            </View>
            </View>
            </View>
            <Footer/>
            </View>
 
            
        )
}
}
const style=StyleSheet.create({
   
    signinDetails1: {
        width: 365,
        height: 63.2,
        display: 'flex',
        alignItems: 'center',
        margin: 0,
        marginBottom:200
    },
  
    background1:{
        //  backgroundColor:"blue",
            height:100,
            width:'100%',
            justifyContent:'center',
            alignItems:'center',
            marginTop:100,
            marginBottom:270
        },
     text1:{
            width: 100,
            paddingTop:10,
            paddingBottom:10,
            paddingLeft:20,
            paddingRight:20,
            margin: 5,
            alignSelf:'center',
            // border: 'none'
            },
            label1:{
                margin: 0,
            },
    SigninTouchableOpacity1:{
                backgroundColor:'#f0c14b',
                color:'black',
                borderRadius: 4,
                paddingTop:10,
                paddingBottom:10,
                paddingLeft:105,
                marginTop: 10,
                width: 246,
            },
            View1:{
                borderColor:'lightgrey',
                borderWidth:1,
                padding: 30,
                borderRadius: 4,
                width: 310,
                 backgroundColor:'#f0f0f0',
                height:430,
                
            },
})

export default DriverSignup;