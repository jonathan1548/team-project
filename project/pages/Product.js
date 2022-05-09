import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function Product({ text, navigation }) {
  return (<View>
    <View style={[styles.card, styles.shadowProp]}>
      <Image style={{ height: 230, width: 200 }} source={{ uri: text }}></Image>


    </View>

  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    //width: 250,
    
    marginVertical: 10,
    marginHorizontal: 5,
    alignItems:'center'
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    margin: 10,
  },
  ButtonStyle: {
    width: 200,
    marginHorizontal: 50,
    marginVertical: 10,
    margin: 10,
  },
  ImageStyle: {
    alignItems: 'center',
    height: 230,
    width: 200

  }
});
