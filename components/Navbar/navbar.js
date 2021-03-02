import React from 'react'
import {View,Text,StyleSheet,Image} from 'react-native'
import { call } from 'react-native-reanimated'

class Navbar extends React.Component{
    render(){
        return(
            <View  style={style.mainbar}> 
                <View style={style.navbar}>
                <Text style={style.title}>KABHI BUS</Text>
                <Image
          style={{width:120,height:60,marginLeft:0,marginBottom:2}}
          source={require('./logo.png')}
        />
                </View>
                <View style={style.contactus}>
                    <View style={{display:'flex',flexDirection:"row"}}>
                    <Image
                    style={{width:20,height:20}}
                    source={require('./call.png')}/>
                     <Text style={style.support}> (24/7 Customer Support)</Text>
                    </View>
                    <Text style={style.support}>9640815316/8096471552</Text>
                     <Text style={style.t} >WeareKabhibus.in</Text>
                </View>
            </View>
        )
    }
}
const style=StyleSheet.create({
   
navbar:{
    display: "flex",
    flexDirection: "column",
    // cursor: "pointer"
    marginLeft:0
   
},

title:{
    
    fontFamily:"sans-serif-medium",
    color:'rgb(17, 102, 172)',
    fontWeight:'bold',
    fontSize:20,
    marginLeft:7
},
mainbar:{
    flexDirection:'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingTop:5,
    backgroundColor:'#87CEFA',
    marginTop:25
},
support:{
    fontSize:12
},
t:{
    fontSize:13
},

contactus:{
    paddingRight: 10,
    fontWeight: 'bold',
    paddingLeft: 10,
    display:"flex",
    flexDirection:'column',
    marginTop:14,
    alignItems:"flex-end"

},

})
export default Navbar