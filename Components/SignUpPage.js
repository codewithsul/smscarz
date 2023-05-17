import React, { useState } from 'react'
import firebase from 'fire'
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'

const SignUpPage = ({navigation}) => {

   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [confirmation, setConfirmation] = useState('')


   const handleName = (event) => {
    setName(event)
   }

   const handleEmail = (event) => {
    setEmail(event)
   }

   const handlePassword = (event) => {
    setPassword(event)
   }

   const handleConfirmation = (event) => {
    setConfirmation(event)
   }

  return (
    <View style={styles.SignUpPageView}>
        <TextInput placeholder='Fullname..' style={styles.fullname} onChange={handleName}/> 
        <TextInput placeholder='email-address' keyboardType='email-address' style={styles.email} onChange={handleEmail}/>
        <TextInput secureTextEntry placeholder='password' style={styles.password} onChange={handlePassword}/>
        <TextInput secureTextEntry placeholder='confirm password' style={styles.cpassword} onChange={handleConfirmation}/>
        <TouchableOpacity style={styles.btn} onPress={
            ()=> {navigation.navigate('Login')}
        }>
            <Text style={styles.textbtn}>Sign Up</Text>
        </TouchableOpacity>
    </View>
  )
}

export default SignUpPage


const styles = StyleSheet.create ({
    SignUpPageView:{
        flex:1,
        backgroundColor:'#1C1E47',
        alignItems:'center'
    },
    fullname:{
        borderWidth:1,
        top:150,
        width:300,
        backgroundColor:'#f7f8fa',
        color:'#141414',
        height:55,
        padding:15,
        borderRadius:10,
        fontSize:18,
        fontFamily:'Roboto',
    }, 
    email:{
        borderWidth:1,
        top:160,
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
        top:170,
        width:300,
        backgroundColor:'#f7f8fa',
        color:'#141414',
        height:55,
        padding:15,
        borderRadius:10,
        fontSize:18,
        fontFamily:'Roboto',
    }, 
    cpassword:{
        borderWidth:1,
        top:180,
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
    textbtn:{
        color:'#f7f8fa',
        fontSize:18,
        letterSpacing:2,
    }
})

