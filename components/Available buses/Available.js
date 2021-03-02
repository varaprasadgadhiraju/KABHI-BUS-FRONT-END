import React from 'react'
import {View,Text,StyleSheet, TouchableOpacity} from "react-native"

import  axios  from 'axios';
import Navbar from '../Navbar/navbar';
import Driverbar from '../Driverbar/Driverbar';
import Mainbar from '../Mainbar/mainbar';
import Footer from '../Footer/Footer';

class Available extends React.Component{
    state={
        busnumber:'',
    Availablebuses:[],
        seats:''
    }
    UNSAFE_componentWillMount(){

            var data = JSON.stringify({"startlocation":this.props.route.params.start,"endlocation":this.props.route.params.end});
   
            var config = {
            method: 'post',
            url: 'http://192.168.1.102:5000/bus/availablebuses',
            headers: { 
                'Content-Type': 'application/json'
            },
            data : data
            };
    
            axios(config)
            .then( (response)=> {
               
            this.setState({
               Availablebuses:response.data.Availablebuses,
               busnumber:response.data.Availablebuses[0].busnumber
            })
            })
            .catch(function (error) {
            console.log(error);
            });
    }
    render(){
        console.log("AV",this.state.Availablebuses)
        console.log(this.props.route.params.start)
        console.log(this.props.route.params.end)
        return(
            <View>
                <Navbar/> 
                <Mainbar Signin={this.props} />
                <View style={style.AB}><Text style={{fontSize:25}}>AVAILABLE BUSES</Text></View>
               <View style={style.details}>
                   <View style={{display:"flex",flexDirection:'column',marginTop:20}}>               
                <Text style={{borderBottomColor:"black",borderBottomWidth:1,marginBottom:10,fontSize:15,fontWeight:"bold",}}>BUS NUMBER</Text></View>
                <View style={{display:"flex",flexDirection:'column',marginTop:20}}>        
                <Text  style={{borderBottomColor:"black",borderBottomWidth:1,marginBottom:10,fontSize:15,fontWeight:"bold"}}>SEATS AVAILABLE</Text></View> 
                <View style={{display:"flex",flexDirection:'column',marginTop:20}}>        
                <View  style={{marginBottom:10,fontSize:15,fontWeight:"bold",width:70}}></View></View>
                </View>
               

                {
                    this.state.Availablebuses.map((bus,index)=>{
                        return (
                            <View style={style.details}  key={index}>
                                <View style={{display:"flex",flexDirection:'column',marginTop:10}}>               
                <Text style={{marginBottom:10,fontSize:15,fontWeight:"bold"}}>{bus.busnumber}</Text></View>
                <View style={{display:"flex",flexDirection:'column',marginTop:10}}>        
                <Text  style={{marginBottom:10,fontSize:15,fontWeight:"bold",marginLeft:50}}>{`${50-bus.addpassengers}/50`}</Text></View> 
                <View style={{display:"flex",flexDirection:'column',marginTop:10}}>        
                <View  style={{marginBottom:10,fontSize:15,fontWeight:"bold",width:90,backgroundColor:"#3273a8",borderRadius:4,height:20}}><TouchableOpacity onPress={()=>this.props.navigation.navigate("Maps",{ start:this.props.route.params.start, end :this.props.route.params.end,busnumber:bus.busnumber})}><Text style={{color:"white",textAlign:"center"}}>TRACK BUS</Text></TouchableOpacity></View></View> 
                            </View>
                        )
                    })
                } 
               
            </View>
        )
    }
}
const style=StyleSheet.create({
AB:{
    display:"flex",
    alignItems:"center",
    marginTop:20
},
details:{
    display:"flex",
    justifyContent:'space-around',
    flexDirection:"row",

}

})

export default Available