import React, { Component } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, TouchableOpacity } from "react-native";

class SignInHover extends Component {
  state = {
    modalVisible: false
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }
user=()=>{
    this.setState({
        modalVisible:false
    })
    this.props.signin.Signin.navigation.navigate('UserSignin')
}
Driver=()=>{
    this.setState({
        modalVisible:false
    })
    this.props.signin.Signin.navigation.navigate('DriverSignin')
}
    // componentDidMount(){
    //   console.log("Hii",this.props.signin.Signin)
    // }
  render() {
    const { modalVisible } = this.state;
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            this.setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <View style={{borderBottomWidth:1,borderBottomColor:'black',width:200}}>
                    <Text style={{textAlign:"center",fontWeight:"bold"}}>SignIn As</Text>
              <TouchableOpacity style={{paddingTop:10}} onPress={this.user}><Text style={styles.modalText}>User</Text></TouchableOpacity></View>
              <TouchableOpacity style={{paddingTop:10}} onPress={this.Driver}><Text style={styles.modalText}>Driver</Text></TouchableOpacity>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setModalVisible(!modalVisible)}
              >
                  
                <Text style={styles.textStyle}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button2, styles.buttonOpen]}
          onPress={() => this.setModalVisible(true)}
        >
          <Text style={styles.textStyle}>SIGNIN</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 5,
    elevation: 2,
    height:35,
    borderRadius: 4,
    paddingTop:10,
    paddingBottom:30,
    paddingLeft:10,
    width: 246,
  },
  button2: {
    borderRadius: 5,
    backgroundColor:  'rgb(17, 102, 172)',
   
    height:25,
    borderRadius: 4,
    alignItems:'center',justifyContent:'center',
    marginBottom:5,
    paddingRight:10,
    paddingBottom:25
   
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize:15
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  
   
  }
});

export default SignInHover;