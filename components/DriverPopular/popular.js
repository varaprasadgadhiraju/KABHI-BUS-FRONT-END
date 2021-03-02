import React from 'react'
import {View,Text,StyleSheet} from "react-native"
import Driverbar from '../Driverbar/Driverbar'
import Footer from '../Footer/Footer'
import Mainbar from '../Mainbar/mainbar'
import Navbar from '../Navbar/navbar'
class Popular extends React.Component{
    render(){
        return(
            <View>
                <Navbar/>
                <Driverbar Signin={this.props}/>
                <View >
                <Text style={{marginLeft:80,marginBottom:20,fontWeight:"bold",marginTop:10,fontSize:20,backgroundColor:"#008B8B",paddingLeft:5, width:225,color:"white"}}>
                    OUR POPULAR ROUTES
                </Text>
                <View style={{display:"flex", flexDirection:"row",height:430,justifyContent:"space-around"}}>
                <View>
                <Text style={{fontSize:15}}>Mehdipatnam-Uppal</Text>
                <Text style={{fontSize:15}}>Shamshabad-Aramghar</Text>
                <Text style={{fontSize:15}}>Afzalfunj-Secunderabad</Text>
                <Text style={{fontSize:15}}>Secunderabad-Koti</Text>
                <Text style={{fontSize:15}}>LB nagar-chandrayngutta</Text>
                </View>
                <View>
                    <Text style={{fontSize:15}}>Charminar-Koti</Text>
                    <Text style={{fontSize:15}}>Gachibowli-Miyapur</Text>
                    <Text style={{fontSize:15}}>Kothur-Aramghar</Text>
                    <Text style={{fontSize:15}}>Kalvakurthy-Koti</Text>
                    <Text style={{fontSize:15}}>Secunderabad-koti</Text>
                </View>
                </View>
                <Footer/>
            </View>
            </View>
        )
    }
}
const style=StyleSheet.create({

})
export default Popular