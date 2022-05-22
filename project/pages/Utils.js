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
export default function Utils({ navigation }) {
  return (
      <ScrollView style={{padding: 30 ,   backgroundColor: '#FFFFFF'}}>

        <View style={[styles.container]}>
          <View>
            <Image
                style={{
                  resizeMode: "contain",
                  height: 300,
                  width: 300
                }}
                source={require("../assets/2.png")}/>
          </View>
          <View style={{bottom:-150}}>
            <View>
              <Button icon="login" mode="contained" onPress={()=>  navigation.navigate('SignIn')}>
                Get Started
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
