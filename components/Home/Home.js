import React,{useContext,useEffect,useState} from 'react'
import {Text,View,TextInput,TouchableOpacity,StyleSheet,ImageBackground } from "react-native";
import Footer from '../Footer/Footer';
import Mainbar from '../Mainbar/mainbar';
// import Carousell from '../Carousel/carousel';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Navbar from '../Navbar/navbar';
import DropDownPicker from 'react-native-dropdown-picker';
import  axios  from 'axios';
import {LoginContext} from '../Context/index'

function Home(props){
    
    const [startLocation,setStartLocation]=useState('')
    const [Destination,setDestination]=useState('')
    const [Busstops,setBusstops]=useState([])
    const {User}=useContext(LoginContext)
    const [UserLogin,setUserisLogin]=User
    useEffect(()=>{
        var config = {
            method: 'get',
            url: 'http://192.168.1.102:5000/bus/busstops',
            headers: { }
          };
          
          axios(config)
          .then((response)=> {
         let busstops=response.data.AllLocations.map((busstop)=>{
             return {value:busstop.stop_name,label:busstop.stop_name}
         })
         setBusstops(()=>busstops)
         setStartLocation(busstops[0].value)
         setDestination(busstops[0].value)
          })
          .catch(function (error) {
            console.log(error);
          });
    },[])
   
    const Jump=async()=>{
      
      const {route,navigation}=props
      
    //   if(isLogin){
         
          
        //   if(token){
        //     navigation.navigate("Available",{start:startLocation,end:Destination})

        //   }else{
        //   navigation.navigate('UserSignin')
        //   }
    //   }else{
    //       navigation.navigate("DriverHome")
    //   }
    
    if(UserLogin){
        navigation.navigate("Available",{start:startLocation,end:Destination})
    }
  else{
    navigation.navigate('UserSignin')
  }
        }
        return(
            <View>
                <Navbar/>  
                <Mainbar Signin={props}/> 
                <ImageBackground source={require('./bg.jpg')} style={style.container}>
            <View style={style.bgimage}>
           
            <View style={style.mainsearch}>           
                <View /*style={style.inputs}*/>
                <Text style={style.searchheader}>SEARCH FOR AVAILABLE BUSES</Text> 
                <Text>Start Location</Text>
                <DropDownPicker
                    items={
                        Busstops
                      }
                    defaultValue={startLocation}
                    containerStyle={{height: 40}}
                    style={{backgroundColor: '#fafafa'}}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    dropDownStyle={{backgroundColor: '#fafafa'}}
                    onChangeItem={item =>{
                      setStartLocation(item.value)
                    } }
                />
                <Text>End Destination</Text>
                  <DropDownPicker
                    items={
                        Busstops
                      }
                    defaultValue={Destination}
                    containerStyle={{height: 40}}
                    style={{backgroundColor: '#fafafa'}}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    dropDownStyle={{backgroundColor: '#fafafa'}}
                    onChangeItem={item =>{
                       setDestination(item.value)
                    } }
                />
                </View>
                    <TouchableOpacity onPress={()=>Jump()} style={style.available}><Text style={{color:'white',textAlign:'center'}}>Check Availability</Text></TouchableOpacity>
            </View>
            </View>
             {/* <Carousell/>  */}
             <Footer/> 
            </ImageBackground> 
               
         
            </View>
        )
    }
 const style=StyleSheet.create({
    container:{
       
        height:500,
       
    },
    mainsearch:{
        textAlign: "center",
        borderColor:"white",
        borderWidth: 1,
        height: 268,
       backgroundColor: "#f0f0f0",
       borderRadius: 6,
       paddingTop: 20,
       paddingBottom: 20,
       width:300,
       alignItems:'center',
    },
  bgimage:{
        width: "100%",
        height: 400,
        display:"flex",
        flexDirection:"row",
        marginTop: 80,
        justifyContent:'center'
    },
//     inputs:{
//         display: "flex",
//         flexDirection:"column",
//         alignItems: "center"
//     },
     searchheader:{
        color: "black",
        fontWeight:"bold",
        marginLeft:18
        
    },
    input:{
        padding: 8,
        marginTop:15,
        marginBottom: 8,
        borderWidth:1,
        borderRadius:2,
        borderColor:"black",
        width:250,
    },
    available:{
        width:250,
        height:50,
        paddingTop: 13,
        marginTop: 15,
        backgroundColor: 'rgb(17, 102, 172)',
        color: "green",
        borderRadius: 4,
        fontSize: 20,
      
    }
})
export default Home