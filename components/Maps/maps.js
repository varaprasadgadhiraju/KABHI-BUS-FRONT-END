import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Permissions from 'expo-permissions'
 import MapView, { Marker,Polyline } from 'react-native-maps'
import {decode} from "./decode"
import axios from "axios"

 const locations= require('./locations.json')
export default class Epp extends React.Component{
  state={
    latitude:null,
    longitude:null,
    locations:locations,
    startLatitude:'',
    startLongitude:'',
    allStops:'',
    BusLatitude:'',
    BusLongitude:'',
    currentIndex:0
  }
  async componentDidMount() {
    const { status } = await Permissions.getAsync(Permissions.LOCATION)
    // console.log("PROPS",this.props.route.params.end)
    // this.getCoordinatesByBus(this.props.route.params.busnumber)
    if (status !== 'granted') {
      const response = await Permissions.askAsync(Permissions.LOCATION)
    }
   navigator.geolocation.getCurrentPosition(
      ({coords:{latitude,longitude}})=>this.setState({latitude,longitude}),
      (error)=>console.log('Error:',error)
   )
   const {locations:[sampleLocation]}=this.state

   let coordinates=[]
   let allStops=await this.getCoordinatesByBus(this.props.route.params.busnumber)
   console.log("STOPS",allStops)
       for(let i=0 ;i<allStops.length-1;i++){
         let singleCoords1=`${allStops[i].stop_coordinates[0]},${allStops[i].stop_coordinates[1]}`
         let singleCoords2=`${allStops[i+1].stop_coordinates[0]},${allStops[i+1].stop_coordinates[1]}`
         Array.prototype.push.apply(coordinates, await this.getDirections(singleCoords1,singleCoords2) );
          // coordinates.push(...this.getDirections(singleCoords1,singleCoords2))
       }
    
       this.setState({coords:coordinates, 
         desLatitude:allStops[allStops.length-1].stop_coordinates[0],
        desLongitude:allStops[allStops.length-1].stop_coordinates[1],
        startLatitude:allStops[0].stop_coordinates[0],
        startLongitude:allStops[0].stop_coordinates[1],
        allStops
      })
  //  this.getCoordinatesByPlace(this.props.route.params.start)
 let moveBus= setInterval(()=>{
   if(this.state.currentIndex>=this.state.coords.length){
     clearInterval(moveBus)
   }else{
    this.setState({
      BusLatitude:this.state.coords[this.state.currentIndex].latitude,
      BusLongitude:this.state.coords[this.state.currentIndex].longitude,
      currentIndex:this.state.currentIndex+1
    })
   }
   
  },2000)
  }
 async getCoordinatesByBus(busnumber){
    console.log("NUMBER",busnumber)
    var config = {
      method: 'get',
      url: 'http://192.168.1.102:5000/bus/'+busnumber,
      headers: { }
    };
  
   let response= await axios(config)
  
      console.log(JSON.stringify(response.data.Buses.stops));
      return response.data.Buses.stops
   
    
  }
  mergeCoords = () => {

    // const {
    //   latitude,
    //   longitude,
    //   desLatitude,
    //   desLongitude
    // } = this.state

    // const hasStartAndEnd = latitude !== null && desLatitude !== null

    // if (hasStartAndEnd) {
    //   const concatStart = `${latitude},${longitude}`
    //   const concatEnd = `${desLatitude},${desLongitude}`
    //   this.getDirections(concatStart, concatEnd)
    // }


   
  }

  async getDirections(startLoc, desLoc) {
    console.log("start",startLoc)
    console.log("des",desLoc)
    try {
      const resp = await fetch(`https://router.hereapi.com/v8/routes?transportMode=car&origin=${startLoc}&destination=${desLoc}&return=polyline&apiKey=mxhLPBr-RWqSIEYVGd4e3DoAqqccy61P4txow3mjG68`)
      // console.log(`https://router.hereapi.com/v8/routes?transportMode=car&origin=${startLoc}&destination=${desLoc}&return=polyline&apiKey=mxhLPBr-RWqSIEYVGd4e3DoAqqccy61P4txow3mjG68`)
      const respJson = await resp.json();
      // console.log("hey",respJson)
      const points = decode(respJson.routes[0].sections[0].polyline);
    //  console.log("points",points)
      const coords = points.polyline.map(point => {
        
        return {
          latitude: point[0],
          longitude: point[1]
        }
      })
      // console.log(coords)
      //  this.setState({ coords })
      return coords
    } catch(error) {
      console.log('Error: ', error)
    }
  }
  
  renderMarkers=()=>{
    console.log(this.state.BusLatitude)
    const{locations}=this.state
   let allStops= this.state.allStops
    return(
      <View>
       {
         allStops.map((stop,index)=>{
           return (
            <Marker key={index}
          image={require('./busstop.png')}
            coordinate={{latitude:stop.stop_coordinates[0],longitude:stop.stop_coordinates[1]}}
            />
           )
         })
       }
              <Marker
          
              coordinate={{latitude:this.state.desLatitude,longitude:this.state.desLongitude}}
              />
               <Marker
        
          image={require('./bus.png')}
          coordinate={{latitude:this.state.BusLatitude,longitude:this.state.BusLongitude}}
          />
        
      </View>
      
    )
  }
  render(){
    const{ latitude ,longitude,coords}=this.state
   
    if(latitude && coords){
      console.log("first coordinates", coords[0])
      console.log("last coords", coords[coords.length-1])
      return(
        
        <MapView
        showsUserLocation
        style={{flex:1}}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta:0.0922,
          longitudeDelta:0.0421
        }}
        >
          <Polyline
          strokeWidth={5}
          strokeColor="red"
          fillColor="#EE82EE"
          coordinates={coords.filter((name)=>name)}
          />
  {this.renderMarkers()}
        </MapView>
        
      );
    }
   return(
     <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
       <Text>We need your permission!</Text>
     </View>
   )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
