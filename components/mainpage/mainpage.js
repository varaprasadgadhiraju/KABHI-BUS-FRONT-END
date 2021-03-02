import React from 'react'
import {View,Text,StyleSheet,ImageBackground} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/navbar'
 export default class Mainpage extends React.Component{
    render(){
        return(
            <View>
                <Navbar/>
               
            <ImageBackground source={require('./main.jpg')} style={style.container}>
            <View style={style.bgimage}>
            <View style={style.welcome}>

                <Text style={{fontSize:28,marginBottom:30,fontWeight:"bold",color:"#2c87e8",backgroundColor:"white",borderRadius:4}}>WELCOME TO KABHI BUS</Text>
                <View style={{height:20,marginTop:10}}>
            <TouchableOpacity style={{marginBottom:10,backgroundColor:"#11a4c2",paddingTop:8,paddingBottom:8,borderRadius:4,paddingLeft:10,paddingRight:10}} onPress={()=>{this.props.navigation.navigate("Home")}}><Text style={{textAlign:"center",color:"white"}}>USER HOME PAGE</Text></TouchableOpacity>
            <TouchableOpacity  style={{marginBottom:10,backgroundColor:"#2290f0",paddingTop:8,paddingBottom:8,borderRadius:4,paddingLeft:10,paddingRight:10}} onPress={()=>{this.props.navigation.navigate("DriverHome")}} ><Text style={{textAlign:"center",color:"white"}}>DRIVER HOME PAGE</Text></TouchableOpacity></View>
            </View>
            </View>
            </ImageBackground>
            <Footer/>

            </View>
        )
    }
}
const style=StyleSheet.create({
    welcome:{
        alignItems:'center',
        // marginBottom:440
    },
    container:{
        height:517,
    },
    bgimage:{
        width: "100%",
        height: 100,
        display:"flex",
        flexDirection:"row",
        marginTop: 50,

        justifyContent:'center'
    }

})