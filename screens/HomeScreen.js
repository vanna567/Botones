import * as React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader'
import db from "../config";

export default class HomeScreen extends React.Component {
  constructor(){
    super();
    this.state ={
      blueStatus: true,
      redStatus: true,
      greenStatus: true,
      yellowStatus: true
    }
  }

goToBuzzerScreen=(buzzercolor)=> {
    var teamRef = db.ref("teams/" + buzzercolor);
    teamRef.updeat({
      enabled: false
    })
    this.props.navigation.navigate('BuzzerScreen',{color:buzzercolor})
    }

componentDidMount(){
  var teamRef = db.ref("teams");
  teamRef.on("value", data =>{
    var teamDetails = data.val();
    this.setState({
      blueStatus: teamDetails.blue.enabled,
      redStatus: teamDetails.red.enabled,
      greenStatus: teamDetails.green.enabled,
      yellowStatus: teamDetails.yellow.enabled,
    })
  })
}

  render(){
    return(
      <View>
        <AppHeader/>
        
        <TouchableOpacity 

            style={[styles.button,{backgroundColor:"red"}]} 
            onPress={()=>this.goToBuzzerScreen("red")}>
            <Text style={styles.buttonText}>Equipo 1</Text>
          </TouchableOpacity>

          <TouchableOpacity 

            style={[styles.button,{backgroundColor:"green"}]} 
            onPress={()=>this.goToBuzzerScreen("green")}>
            <Text style={styles.buttonText}>Equipo 2</Text>
          </TouchableOpacity>

          <TouchableOpacity 

            style={[styles.button,{backgroundColor:"blue"}]} 
            onPress={()=>this.goToBuzzerScreen("blue")}>
            <Text style={styles.buttonText}>Equipo 3</Text>
          </TouchableOpacity>

          <TouchableOpacity 

            style={[styles.button,{backgroundColor:"yellow"}]} 
            onPress={()=>this.goToBuzzerScreen("yellow")}>
            <Text style={styles.buttonText}>Equipo 4</Text>
          </TouchableOpacity>

      </View>
    )
  }
}


const styles = StyleSheet.create({
  button:{
    justifyContent : 'center',
    alignSelf : 'center',
    borderWidth : 2,
    borderRadius : 15,
    marginTop:50,
    width : 200,
    height:50,
  },
  buttonText : {
    textAlign : 'center',
    color : 'white'
  }
})