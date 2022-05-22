import { ScrollView, StyleSheet, View} from 'react-native';
import { TextInput , Button , HelperText } from 'react-native-paper';
import {useEffect, useState} from 'react';
import {sendRequestOfChangingPassword} from "../db/auth/Auth";
import * as React from "react";
export default function ForgetPassword({navigation}) {

    const [email, setEmail] = useState('');
    const [emailAddressValid, setEmailAddressValid] = useState(true);

    function changePassword() {
        sendRequestOfChangingPassword(email).then().catch((e) => {
            alert(e.message);
            console.log(e.message);
        });
        goToSignIn();
    }

    function goToSignIn() {
        navigation.navigate('SignIn');
    }

    return (
        <ScrollView style={{padding: 30}}>
            <View style={{padding: 30}}>
            <TextInput
                  mode ="flat"
                  label="Email"
                  left={<TextInput.Icon name={'email'} />}
                  keyboardType={'email-address'}
                  value={email}
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
            <View style={{padding: 30}}>
            <Button icon="login" mode="contained" onPress={()=> changePassword()}>
                 Send Request
              </Button>
            </View>
        </ScrollView>
    );
}
