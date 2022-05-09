

import { useEffect, useState } from 'react';
import { StyleSheet, Text, View ,Image,ScrollView } from 'react-native';
import { TextInput , Button } from 'react-native-paper';
import SwitchSelector from 'react-native-switch-selector';
import * as React from "react";
// import { login } from '../db/auth/auth';
// import { auth } from '../db/Config';

export default function SignUp({ navigation }) {
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
    const [ConfirmEmail, setConfirmEmail] = useState("");
  const [password, setpassword] = useState("");
    const [address, setaddress] = useState("");
  const [confirmPassword, setCpassword] = useState("");
    const options = [
        { label: 'Male', value: '0' },
        { label: 'Female', value: '1' },
    ];

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
                        onChangeText={setEmail}

                    />
                </View>
                <View  style={[
                    styles.TextInput ,
                ]}>
                    <TextInput
                        mode ="flat"
                        label="Confirm Email"
                        value={ConfirmEmail}
                        onChangeText={setConfirmEmail}
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
                        label="Password"
                        value={password}
                        onChangeText={setpassword}
                        secureTextEntry={true}
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
                        secureTextEntry={true}
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
                    onChangeText={setaddress}
                />
            </View>
            <View>
                <SwitchSelector
                    options={options}
                    initial={1}
                    fontSize={18}
                    textColor={"#fff5f5"}
                    selectedColor={'#ffffff'}
                    buttonColor={'#642bef'}
                    backgroundColor={"#8f8f8f"}
                    borderColor={"#353535"}
                />
            </View>
            <View style={{ padding: 10 }}>
                <Button icon="login" mode="contained"  onPress={() => navigation.navigate('Menu')}>
                    Register
                </Button>
          </View>
        </View>

        </View>
</ScrollView>
        // user ? <CitiesList /> : <Register />
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
        alignItems: 'center',
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
