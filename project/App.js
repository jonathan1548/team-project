import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { StyleSheet, View, Text, ScrollView, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./db/Config";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Setting from './pages/Setting';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import Info from './pages/info';
import Profile from './pages/profile';
// import Register from './componant/Users/Register';
import Products from './pages/products';
import Login from "./pages/login";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Menu() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={{
            headerShown: false,
          tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }} />
        {/*<Tab.Screen name="log out" component={SignIn} options={{ headerShown:false,*/}
        {/*  tabBarLabel: 'LogOut',*/}
        {/*  tabBarIcon: ({ color, size }) => (*/}
        {/*      <MaterialCommunityIcons name="come-back" color={color} size={size} />*/}
        {/*  ),*/}
        {/*}} />*/}
        <Tab.Screen name="Setting" component={Setting} options={{
          tabBarLabel: 'Settings',headerShown:false,
          tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="bell" color={color} size={size} /> //ICON for shopping[storefront-outline]
          ),
        }}/>
        <Tab.Screen name="Profile" component={Profile} options={{
          tabBarLabel: 'Profile',headerShown:false,
          tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }} />

      </Tab.Navigator>
  );
}


// headerShown:false title: "Home"

export default function App() {
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setUser(user));

    return () => {
      unsub();
    };
  }, []);

  const [user, setUser] = useState(undefined);
  console.log(user);
  return (

       user ?

      <NavigationContainer >
        <Stack.Navigator >
            <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false }} />
            <Stack.Screen name="Products" component={Products} options={{ headerShown: false   }} />

          {/*<Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}} />*/}
          {/*<Stack.Screen name="SignUp" component={SignUp} options={{ title: "my SignUp page" }} />*/}


        </Stack.Navigator>

      </NavigationContainer>

       : <NavigationContainer >
               <Stack.Navigator >
                   <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}} />
                   <Stack.Screen name="SignUp" component={SignUp} options={{ title: "my SignUp page" }} />
               </Stack.Navigator>

           </NavigationContainer>


  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
