

import { useEffect, useState } from 'react';
import { StyleSheet, Text, View ,Image,ScrollView } from 'react-native';
import { TextInput , Button , HelperText } from 'react-native-paper';
import SwitchSelector from 'react-native-switch-selector';
import * as React from "react";
import {addUsers} from '../db/cities/Users';
import {register} from "../db/auth/Auth";

export default function SignUp({ navigation }) {
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
    const [address, setaddress] = useState("");
  const [confirmPassword, setCpassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [CshowPassword, setCShowPassword] = useState(false);
    const [emailAddressValid, setEmailAddressValid] = useState(true);
    const options = [
        { label: 'Male', value: '0' },
        { label: 'Female', value: '1' },
    ];

    const done=()=>{
       register(email,password).then(()=> addUsers({
           username:FirstName,
           email:email,
           password:password,
           address:address,
           cart:[]
       }).then(()=>navigation.navigate('Menu')))
    }

  return (
      <ScrollView>
        <View style={[styles.container]}>
          <View>
        <Image
           style={{
             resizeMode: "contain",
             height: 200,
             width: 250
           }}
           source={require("../assets/2.png")}/>
     </View>

        <View style={[styles.card, styles.shadowProp]}>
            <View  style={{

                margin: 5
            }}>
                <View
                    style={[
                        styles.TextInput ,
                    ]}
                >
                    <TextInput
                        mode ="flat"
                        label="First Name"
                        value={FirstName}
                        left={<TextInput.Icon name={'account'} />}
                        onChangeText={setFirstName}

                    />
                </View>
                <View  style={[
                    styles.TextInput ,
                ]}>
                    <TextInput
                        mode ="flat"
                        label="last name"
                        value={LastName}
                        left={<TextInput.Icon name={'account'} />}
                        onChangeText={setLastName}
                    />
                </View>
            </View>
            <View  style={{

                padding: 2,
            }}>
                <View
                    style={[
                        styles.TextInput ,
                    ]}
                >
                    <TextInput
                        mode ="flat"
                        label="Email"
                        value={email}
                        keyboardType={'email-address'}
                        left={<TextInput.Icon name={'email'} />}
                        onChangeText={setEmail}
                        onBlur={() =>
                            email.length > 0 &&
                            setEmailAddressValid(email.includes('@'))
                        }
                    />
                    <HelperText type="error" visible={!emailAddressValid}>
                        Email address is invalid!
                    </HelperText>
                </View>
            </View>
            <View  style={{

                padding: 2,
            }}>
                <View
                    style={[
                        styles.TextInput ,
                    ]}
                >
                    <TextInput
                        mode ="flat"
                        label="Password"
                        value={password}
                        onChangeText={setpassword}
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
                <View  style={[
                    styles.TextInput ,
                ]}>
                    <TextInput
                        mode ="flat"
                        label="Confirm Password"
                        value={confirmPassword}
                        onChangeText={setCpassword}
                        left={<TextInput.Icon name={'lock'} />}
                        right={
                            <TextInput.Icon
                                name={CshowPassword ? 'eye' : 'eye-off'}
                                onPress={() => setCShowPassword(!CshowPassword)}
                            />
                        }
                        secureTextEntry={!CshowPassword}
                    />
                </View>
            </View>
            <View  style={[
                styles.TextInput ,
            ]}>
                <TextInput
                    mode ="flat"
                    label="Address"
                    value={address}
                    left={<TextInput.Icon name={'map-marker'} />}
                    onChangeText={setaddress}
                />
            </View>
            <View>
                <SwitchSelector
                    options={options}
                    initial={0}
                    fontSize={18}
                    textColor={"#fff5f5"}
                    selectedColor={'#ffffff'}
                    buttonColor={'#642bef'}
                    backgroundColor={"#8f8f8f"}
                    borderColor={"#353535"}
                />
            </View>
            <View style={{ padding: 10 }}>
                <Button icon="login" mode="contained"  onPress={() => done()}>
                    Register
                </Button>
          </View>
        </View>

        </View>
</ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

    TextInput: {
        flex: 1,
        backgroundColor: '#8f8f8f',
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
      flex:1,
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
