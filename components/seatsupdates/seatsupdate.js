import React from 'react'
import {View,Text, TouchableOpacity ,StyleSheet} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import  axios  from 'axios';
import Navbar from '../Navbar/navbar';
import Mainbar from '../Mainbar/mainbar';
import Footer from '../Footer/Footer';
import Driverbar from '../Driverbar/Driverbar';
class Seats extends React.Component{
 addseats=async()=>{
    var data = '';
    let token=await AsyncStorage.getItem('DRIVER_JWT_KEY')
var config = {
  method: 'post',
  url: 'http://192.168.1.102:5000/driver/addpassengers',
  headers: { 
    'auth': `${token}`
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
}
removeseats=async()=>{
    var data = '';
    let token=await AsyncStorage.getItem('DRIVER_JWT_KEY')
    var config = {
      method: 'post',
      url: 'http://192.168.1.102:5000/driver/removepassengers',
      headers: { 
        'auth': `${token}`
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}
onStop=async()=>{
  var data = '';
  let token=await AsyncStorage.getItem('DRIVER_JWT_KEY')
var config = {
method: 'post',
url: 'http://192.168.1.102:5000/driver/stopdriving',
headers: { 
  'auth': `${token}`
},
data : data
};

axios(config)
.then( (response)=> {
console.log(JSON.stringify(response.data));
alert("Your destination has been reached, THANK YOU")
this.props.navigation.navigate('DriverHome')
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
                <View style={style.seats}>
                <TouchableOpacity onPress={this.addseats}><Text style={{backgroundColor:"#f56042",borderRadius:4, color:"white",marginBottom:20,width:250,textAlign:"center",paddingBottom:10,paddingTop:10}}>ADD SEATS</Text></TouchableOpacity> 
              <TouchableOpacity onPress={this.removeseats}><Text style={{backgroundColor:"#12ccb6", borderRadius:4, color:"white",marginBottom:20,width:250,textAlign:"center",paddingBottom:10,paddingTop:10}}>REMOVE SEATS</Text></TouchableOpacity>
              <TouchableOpacity style={style.stop} onPress={this.onStop}><Text style={{fontSize:23,  color:'white',}}>STOP</Text></TouchableOpacity>
            </View>
            <Footer/>
            </View>

        )
    }
}
const style=StyleSheet.create({
seats:{
    height:280,
    width:250,
    marginTop:120,
    marginLeft:70,
    display:"flex",
    alignItems:'center',
    marginBottom:85
},
stop:{
  marginTop:10,
  alignItems:"center",
 backgroundColor:'#4287f5',
  width:150,

  borderRadius: 4,
  marginBottom:10
}
})
export default Seats