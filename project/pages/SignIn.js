import { StatusBar } from 'expo-status-bar';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import * as React from 'react';
import { TextInput , Button , HelperText } from 'react-native-paper';

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';
import { login } from '../db/auth/auth';
import { auth } from '../db/Config';

export default function SignIn({ navigation }) {
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailAddressValid, setEmailAddressValid] = useState(true);

  return (
      <ScrollView style={{padding: 30 ,   backgroundColor: '#FFFFFF'}}>

        <View style={[styles.container]}>
          <View>
            <Image
                style={{
                  resizeMode: "contain",
                  height: 200,
                  width: 200
                }}
                source={require("../assets/2.png")}/>
          </View>
          <View style={[styles.card , styles.shadowProp]}>
            <View style={[styles.TextInput]}>
              <TextInput
                  mode ="flat"
                  label="Email"
                  left={<TextInput.Icon name={'email'} />}
                  keyboardType={'email-address'}
                  value={username}
                  onChangeText={setusername}
                  onBlur={() =>
                      username.length > 0 &&
                      setEmailAddressValid(username.includes('@'))
                  }
              />
              <HelperText type="error" visible={!emailAddressValid}>
                Email address is invalid!
              </HelperText>
            </View>
            <View style={[styles.TextInput]}>
              <TextInput
                  mode ="flat"
                  label="password"
                  onChangeText={setPassword}
                  value ={password}
                  left={<TextInput.Icon name={'lock'} />}
                  right={
                    <TextInput.Icon
                        name={showPassword ? 'eye' : 'eye-off'}
                        onPress={() => setShowPassword(!showPassword)}
                    />
                  }
                  secureTextEntry={!showPassword}
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
    alignItems: 'center',
    flexDirection : 'column',
    justifyContent: 'center',
    padding : 50 ,
    margin: 12,
  },
  TextInput: {
    flex: 1,
    backgroundColor: '#8f8f8f',
    height: 40,
    margin: 5,
    padding: 5,
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
