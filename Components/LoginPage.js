
import React from 'react'
import {View, Text, StyleSheet, TextInput, StatusBar, TouchableOpacity} from 'react-native'

const LoginPage = ({navigation}) => {
  return (
    <View style={styles.view}>
      <StatusBar backgroundColor='rgba(0,0,0,0.5)'/>
      <Text style={styles.head}> SMSCARZ </Text>
      <TextInput placeholder='email-address' style={styles.textinput} keyboardType='email-address'/>
      <TextInput secureTextEntry placeholder='password' style={styles.password}/>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.text}>
          Login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.SignUp} onPress={()=> {navigation.navigate('SignUpPage')}}>
        <Text style={styles.SignUptext}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  )
}

export default LoginPage


const styles = StyleSheet.create({
  view:{
    flex:1,
    flexDirection:'column',
    alignItems:'center',
    backgroundColor:'#1C1E47'
  },
  head:{
    color:'#f7f8fa',
    fontFamily:'Roboto',
    fontSize:22,
    top:150,
    fontWeight:'bold',
    letterSpacing: 5,
  },
  textinput: {
    borderWidth:1,
    top:200,
    width:300,
    backgroundColor:'#f7f8fa',
    color:'#141414',
    height:55,
    padding:15,
    borderRadius:10,
    fontSize:18,
    fontFamily:'Roboto',
 },
 password:{
    borderWidth:1,
    top:210,
    width:300,
    backgroundColor:'#f7f8fa',
    color:'#141414',
    height:55,
    padding:15,
    borderRadius:10,
    fontSize:18,
    fontFamily:'Roboto',
 }, 
 btn:{
    backgroundColor:'#3b5998',
    top:240,
    width:260,
    height:55,
    justifyContent:'center',
    alignItems:'center'
 }, 
 text:{
    color:'#f7f8fa',
    fontSize:18,
    letterSpacing:2,
 },
 SignUp:{
  top:280,
 },
 SignUptext:{
  color:'#25D366'
 }
})