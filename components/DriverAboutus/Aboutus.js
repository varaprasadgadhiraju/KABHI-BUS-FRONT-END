import react from 'react'
import React from 'react'
import {Text,View,StyleSheet} from "react-native"
import Driverbar from '../Driverbar/Driverbar'
import Footer from '../Footer/Footer'
import Mainbar from '../Mainbar/mainbar'
import Navbar from '../Navbar/navbar'
class About extends react.Component{
    render(){
        return(
            <View>
                 <Navbar/>  
                <Driverbar Signin={this.props} />
                <View>
                <Text style={style.Aboutus}>About Us</Text>
                <Text style={style.About} >Kabhi Bus is committed to provide consistently high quality of services and to continuously improve the services through a process of teamwork for the utmost satisfaction of the passengers and to attain a position of pre-eminence in the Bus Transport sector.</Text>
                </View>
                <View>
                    <Text style={style.Aboutus}>Connectivity:</Text>
                    <Text style={{fontWeight:'bold',height:5}}>Services are operated connecting major cities and towns in:</Text>
<Text style={style.About}>1.Andhra Pradesh (Visakhapatnam, Vijayawada, Kakinada, Rajahmundry, Vizianagaram, Srikakulam, Guntur, Eluru, Ongole, Nellore, Chittoor, Tirupathi, Anantapur, Kadapa, Kurnool etc.)</Text>
<Text style={style.About}>2.Telangana (Hyderabad, Sangareddy, Mahabubnagar, Nalgonda, Miryalaguda, Warangal, Karimnagar, Nizamabad, Bodhan, Adilabad, Nirmal, Khammam, Bhadrachalam etc.)</Text>
 </View>
                <View style={{marginTop:150}}><Footer/></View>
            </View>
           
        )
    }
}
const style=StyleSheet.create({
Aboutus:{
    fontWeight:"bold",
    fontSize:25,
    marginBottom:5,
    margin:5
},
About:{
    margin:5
}
})
export default About