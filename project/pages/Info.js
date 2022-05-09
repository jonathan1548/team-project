import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,Button } from 'react-native';
import { createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();


export default function Info({navigation}) {
  return (<View>
    <View style={[styles.card, styles.elevation]}>
      <Image style={{height:230,width:200}}  source={{uri: text}}></Image>
      
      <StatusBar style="auto" />
    </View>
    <View style={[styles.card, styles.elevation]}>
      <Image style={{height:230,width:200}}  source={{uri: text}}></Image>
      
      <StatusBar style="auto" />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  card: {
    backgroundColor: 'red',
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
   // width: '100%',
    marginVertical: 10,
  },
  elevation: {
    elevation: 20,
    shadowColor: '',
  },
  ButtonStyle:{
    width: 200,
    marginHorizontal: 50,
    marginVertical: 10,
  },
});
