import { StatusBar } from 'expo-status-bar';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import * as React from 'react';
import { TextInput , Button ,Avatar } from 'react-native-paper';

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';
// import CitiesList from '../componant/cities/CitiesList';
// import Register from '../componant/Users/Register';
import { login } from '../db/auth/auth';
import { auth } from '../db/Config';

export default function SignIn({ navigation }) {
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const [flag, setflag] = useState(false);

  let users =[
    {
      user : 'john',
      pass : '1234'
    }
  ]
  const check =() =>{
    for(let i =0 ; i < users.length ;i++){
      if (users[0].user===username && users[0].pass===password){
        setflag(true)
        return navigation.navigate('Menu')
      }
      else alert(
          "UserName or Password is wrong"
      )
    }
    setflag(false)
  }

  return (
      <ScrollView style={{padding: 30}}>

        <View style={[styles.container]}>
          <View>
            <Image
                style={{
                  resizeMode: "contain",
                  height: 200,
                  width: 300
                }}
                source={require("../assets/2.png")}/>
          </View>
          <View style={[styles.card , styles.shadowProp]}>
            <View style={[styles.TextInput]}>
              <TextInput
                  mode ="flat"
                  label="Email"
                  value={username}
                  onChangeText={setusername}
              />
            </View>
            <View style={[styles.TextInput]}>
              <TextInput
                  mode ="flat"
                  label="password"
                  onChangeText={setPassword}
                  value ={password}
                  secureTextEntry={true}
              />
            </View>
            <View>
              <Button icon="login" mode="contained" onPress={()=> login(username,password).then().catch()}>
                login
              </Button>
            </View>
            <View>
              <Text style={{fontSize:17 , color: '#ffffff'}}>{'Doesn\'t have an account? '}</Text>
              <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('SignUp')}>
                <Text style={{fontSize:17,color:'#ff0000'}}>{'SignUp'}</Text>
              </TouchableOpacity>
            </View>
          </View>


        </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    flexDirection : 'column',
    justifyContent: 'center',
    padding : 50 ,
    margin: 12,
  },
  TextInput: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#8f8f8f',
    justifyContent: 'center',
    height: 40,
    margin: 12,
    padding: 10,
  },

  buttonStyle: {
    backgroundColor: 'black',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 30,
  },
  containerStyle: {
    width: 200,
    marginHorizontal: 50,
    marginVertical: 10,
  },
  textWithShadow: {
    fontSize: 28,
    fontWeight: 500,
    color: '#000',
    textAlign: 'left'
  },
  card: {
    backgroundColor: '#8f8f8f',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 1,
    marginHorizontal: 1,

  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    margin: 1,
  },


});
