import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View ,Image, TouchableOpacity } from 'react-native';
import {logOut} from "../db/auth/Auth";

export default function Profile({navigation}) {
  return (
    <View style={styles.container}>
        <Text>ttt</Text>
        <View>
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => logOut()}
                style={styles.FloatingActionButtonStyle}>
                <Image
                   source={require("../assets/3.png")}
                    style={styles.FloatingActionButtonImageStyle}
                />
            </TouchableOpacity>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    FloatingActionButtonStyle: {
        position: 'absolute',
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        left: 95,
        bottom: 230,
        backgroundColor:'#0B66D3',
        borderColor:'#000000',
        borderRadius: 200/2
    },

    FloatingActionButtonImageStyle: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
        tintColor:'#FFFFFF'
    },
});
