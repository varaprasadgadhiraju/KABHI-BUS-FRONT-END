import React,{useContext,useEffect,useState} from 'react'
import {View,Text, TextInput, TouchableOpacity,StyleSheet} from "react-native"
import Navbar from '../Navbar/navbar'
import DropDownPicker from 'react-native-dropdown-picker';
import  axios  from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Driverbar from '../Driverbar/Driverbar';
import {LoginContext} from '../Context/index'


const DriverHome=(props)=>{
    
    const [destination,setDestination]=useState("")
    const [busnumbers,setBusnumbers]=useState([])
    const [currentbusnumber,setCurrentBusNumber]=useState("")
    const {Driver}=useContext(LoginContext)
    const [DriverLogin,setDriverisLogin]=Driver

//    
    useEffect(()=>{
        var config = {
            method: 'get',
            url: 'http://192.168.1.102:5000/bus',
            headers: { }
          };
          
          axios(config)
          .then( (response)=> {
        
         setBusnumbers(response.data.Buses)
         setCurrentBusNumber(response.data.Buses[0].bus_number)
          })
          .catch(function (error) {
            console.log(error);
          });
         },[])
     const onPress=async(props)=>{
        let token=await AsyncStorage.getItem('DRIVER_JWT_KEY')
        if(token){

      
        var data = JSON.stringify({"busnumber":currentbusnumber});
        
        console.log(token)
         var config = {
            method: 'post',
         url: 'http://192.168.1.102:5000/driver/startdriving',
        headers: { 
      'auth': `${token}`, 
      'Content-Type': 'application/json'
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
                
                if(DriverLogin){
                    alert("Accessing your location")
                    props.navigation.navigate('Seats')
                }
                else{
                    props.navigation.navigate('DriverSignin')
                }
        }
        else{
            alert("signin to get started")
            props.navigation.navigate('DriverSignin')
    
        }
}

        console.log(props)
        let items=busnumbers.map((bus)=>{
            console.log(bus)
            return {
                label:bus.bus_number,
                value:bus.bus_number
            }
        })
        console.log(items)
        return(
            <View style={style.Page}>
                <Navbar />
                 <Driverbar Signin={props} /> 

                <Text style={{marginTop:40,textAlign:'center',fontSize:18,fontWeight:'bold',marginBottom:10}}>SELECT YOUR BUS NUMBER</Text>
                <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                <TouchableOpacity style={style.start} onPress={()=>onPress(props)}><Text style={{fontSize:23}}>START</Text></TouchableOpacity>
               </View>
                <DropDownPicker
                    items={
                        items
                      }
                    defaultValue={currentbusnumber}
                    containerStyle={{height: 40}}
                    style={{backgroundColor: '#fafafa'}}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    dropDownStyle={{backgroundColor: '#fafafa'}}
                    onChangeItem={item =>{
                        // this.setState({
                        //     currentbusnumber:item.value
                        // })
                        setCurrentBusNumber(item.value)
                    } }
                />
               
           
            </View>
        )
    }
const style=StyleSheet.create({
Page:{
    flex:1,
   
},
// destination:{
//    marginTop:150,
//     textAlign:"center",
//     fontWeight:"bold",
//     fontSize:30,
//     paddingBottom:10,
//     marginRight:10,
//     borderColor:"black",
//     borderWidth:1,
//     width:250,
//     marginLeft:65,
    
// },
start:{
    marginTop:10,
    alignItems:"center",
    backgroundColor:"#f0c14b",
    width:150,
    // marginLeft:5,
    borderRadius: 4,
    marginBottom:10
},


})
export default DriverHome