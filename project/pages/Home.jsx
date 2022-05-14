import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet,TextInput, Text, View ,FlatList} from 'react-native';
import Product from './Product';
import { getCities, subscribe } from '../db/cities/Cities';
import { useEffect, useState } from "react";
import { Button} from 'react-native-paper';
export default function Home({navigation}) {
   const getCitiesList = async () => {
    const c = await getCities();
    setCities(c);
  };
 
  useEffect(() => {
    getCitiesList();
  }, []);

  useEffect(() => {
    const unsubscribe = subscribe(({ change, snapshot }) => {
      if (change.type === "added") {
        getCitiesList();
      }
      if (change.type === "modified") {
        getCitiesList();
      }
      if (change.type === "removed") {
        getCitiesList();
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const [cities, setCities] = useState([]);

  const data = cities.filter((e)=>(e.type=="appetizers"));
  const data2 = cities.filter((e)=>(e.type=="Eastern"));
  return (
  
    <ScrollView>
    <View>
    <Text style={[styles.textWithShadow,styles.card, styles.shadowProp]}>Sweet Group</Text>
    <ScrollView horizontal={true} >
      {data.slice(0,5).map((e,index)=>(<Product item={e} key={index} />))}
           <View style={{paddingHorizontal:10, paddingVertical:150}}>
       <Button icon="arrow-right" onPress={() => navigation.navigate('Products')} />
     </View>
    </ScrollView>
    </View>
    <View>
    <Text style={[styles.textWithShadow,styles.card, styles.shadowProp]}>Eastern sweets</Text>

    <ScrollView horizontal={true} style={{paddingBottom:55}}>
      {data2.slice(0,5).map((e,index)=>(<Product item={e} key={index} />))}
         <View style={{paddingHorizontal:10, paddingVertical:150}}>
       <Button icon="arrow-right" onPress={() => navigation.navigate('Products')} />
     </View>
       
    </ScrollView>
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
  textWithShadow:{
    fontSize: 28,
    fontWeight: 500,
    color: '#000',
    textAlign:'left'
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 1 ,
    marginHorizontal: 1,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowRadius: 3,
    margin: 1,
  },
});
