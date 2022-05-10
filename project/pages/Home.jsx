import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet,Button,TextInput, Text, View ,FlatList} from 'react-native';
import Product from './Product';
import { getCities, subscribe } from '../db/cities/Cities';
import { useEffect, useState } from "react";

export default function Home({navigation}) {
   const getCitiesList = async () => {

    const c = await getCities();
    console.log("cities: ");
    setCities(c);
    console.log("cities: ", c);
  };
 
  useEffect(() => {
    getCitiesList();
  }, []);

  useEffect(() => {
    const unsubscribe = subscribe(({ change, snapshot }) => {
      //   console.log("changes", change, snapshot, change.type);
      // if (snapshot.metadata.hasPendingWrites) {
      if (change.type === "added") {
        console.log("New city: ", change.doc.data());
        getCitiesList();
      }
      if (change.type === "modified") {
        console.log("Modified city: ", change.doc.data());
        getCitiesList();
      }
      if (change.type === "removed") {
        console.log("Removed city: ", change.doc.data());
        getCitiesList();
      }
      // }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const [cities, setCities] = useState([]);

  
  
  const data=[
    {text:"http://www.goodmorningimagesdownload.com/wp-content/uploads/2019/12/Love-Images-1.jpg"},
    {text:"https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"},
    {text:"https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q="},
    {text:"https://images.ctfassets.net/hrltx12pl8hq/1kSlS6H6YMm30e0Mkr86Hc/930fef722ebc9fb51f80d8bb0e372596/IHP_3_24.png?fit=fill&w=1200&h=630"},
    {text:"https://image.shutterstock.com/image-photo/sunset-coast-lake-nature-landscape-260nw-1960131820.jpg"},
    {text:"https://i.pinimg.com/236x/7b/e2/db/7be2dbac345f7c212f295b4464ef91af.jpg"},
   
  ]
  const data2=[
    {text:"http://www.goodmorningimagesdownload.com/wp-content/uploads/2019/12/Love-Images-1.jpg"},
    {text:"https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"},
    {text:"https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q="},
    {text:"https://images.ctfassets.net/hrltx12pl8hq/1kSlS6H6YMm30e0Mkr86Hc/930fef722ebc9fb51f80d8bb0e372596/IHP_3_24.png?fit=fill&w=1200&h=630"},
    {text:"https://image.shutterstock.com/image-photo/sunset-coast-lake-nature-landscape-260nw-1960131820.jpg"},
    {text:"https://i.pinimg.com/236x/7b/e2/db/7be2dbac345f7c212f295b4464ef91af.jpg"},
   
  ]
  return (
  
    <ScrollView>
    <View>
    <Text style={[styles.textWithShadow,styles.card, styles.shadowProp]}>fffffff</Text>
    <ScrollView horizontal={true} >
        
         {data.map((e,index)=>(<Product text={e.text} key={index} />))}
       
           <View style={{paddingHorizontal:10,
            paddingVertical:150}}>
       <Button title="see more" onPress={() => navigation.navigate('Products')} />
     </View>
    </ScrollView>
    </View>
    <View>
    <Text style={[styles.textWithShadow,styles.card, styles.shadowProp]}>ddddd</Text>

    <ScrollView horizontal={true} >
         {data2.map((e,index)=>(<Product text={e.text} key={index} />))}
         <View style={{paddingHorizontal:10,
            paddingVertical:150}}>
       <Button title="see more" onPress={() => navigation.navigate('Products')} />
     </View>
       
    </ScrollView>
    </View>
    </ScrollView>

  //  <View style={{padding:30}}>
  //     <Button title="signIn" onPress={() => navigation.navigate('SignIn')} />
  //   </View>
  // <View style={{padding:30}}>
  //     <Button title="register" onPress={() => navigation.navigate('SignUp')} />
  //   </View> 
    
    
    
   
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
    //shadowOpacity: 0.2,
    shadowRadius: 3,
    margin: 1,
  },
});
