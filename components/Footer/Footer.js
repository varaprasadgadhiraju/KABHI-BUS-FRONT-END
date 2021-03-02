import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
class Footer extends React.Component{
    render(){
        return(
            <View style={style.footer}>
            <View style={style.footer1}>
            <Text style={{color:'white',paddingBottom:10}}>Get To Know Us</Text>
            <Text style={style.footertext}>About Us</Text>
            <Text style={style.footertext}>Careers</Text>
            <Text style={style.footertext}>Press releases</Text>
           
            </View>
            <View style={style.footer1}>
            <Text style={{color:'white',paddingBottom:10}}>Connect With Us</Text>
            <Text style={style.footertext}>Facebook</Text>
            <Text style={style.footertext}>Twitter</Text>
            <Text style={style.footertext}>Instagram</Text>
           </View>
            <View style={style.footer1}>
            <Text style={{color:'white',paddingBottom:10}}>Let Us Help You</Text>
           <Text style={style.footertext}>Covid-19</Text>
            <Text style={style.footertext}>Return Center</Text>
            <Text style={style.footertext}>Help</Text>
          </View>
            </View>
        )
    }
}
const style=StyleSheet.create({
    footer:{
        backgroundColor: '#232F3E',
        justifyContent:'space-around',
        flexDirection: 'row',
        height: 150,
        
    },
    footertext:{
        color:'#DDDDDD'
    },
    footer1:{
        paddingLeft:10,
        paddingRight:10,
        paddingTop: 20,
        marginHorizontal:10,
    }
    // footer .footer1 li{
    //    listStyle: none;
    // },
    // ul: {   color: '#DDDDDD',
    //    marginLeft: 0,
    //    paddingLeft: 0
    // },
    // h3:{
    //    marginBottom: 0,
    //    color: '#ffff'
    // }
    
})

export default Footer