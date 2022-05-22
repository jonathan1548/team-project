import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { FAB , useTheme , Avatar , List } from 'react-native-paper';
import {logOut} from "../db/auth/Auth";
import Colors from  "../components/Colors"
import {useEffect, useState} from "react";
import {getUsers} from "../db/cities/Users";
import {auth} from "../db/config";
export default function Profile({navigation}) {
    const { colors } = useTheme();
    const [email, setEmail] = useState();
    const [address, setaddress] = useState("");
    const [user , setUser] = useState([])
    const [password, setPassword] = useState();
    const [id, setId] = useState();
    const initialInfo = async () => {
        const array = await getUsers()
        const object = array.find(e => e.email === auth.currentUser.email)
        setEmail(object.email);
        setPassword(object.password);
        setId(object.username);
        setaddress(object.address)
        setUser(array)
    }
    useEffect(() => {
        initialInfo()
    }, []);

  return (
    <View style={styles.container}>
        <View style={[styles.list]}>
            <List.Item
                title="Name"
                description={id}
                left={props => <List.Icon {...props} icon="account" />}
            />

        </View>
        <View style={styles.list2}>
            <List.Item
                title="Email"
                description={email}
                left={props => <List.Icon {...props} icon="email" />}
            />
        </View>
        <View style={styles.list3}>
            <List.Item
                title="Phone"
                description="Person Phone"
                left={props => <List.Icon {...props} icon="phone" />}
            />
        </View>
        <View style={styles.list4}>
            <List.Item
                title="Address"
                description={address}
                left={props => <List.Icon {...props} icon="map-marker" />}
            />
        </View>
        <View style={styles.list5}>
            <List.Item
                title="About Us"
                description="Accounts to contact us"
                onPress={() => navigation.navigate('About Us')}
                left={props => <List.Icon {...props} icon="email-variant" />}
                right={props => <List.Icon {...props} icon="arrow-right" />}
            />
        </View>
        <View>
            <FAB
                style={styles.fab}
                small
                icon="logout"
                label='LogOut'
                extended ='true'
                onPress={() => logOut()}
                theme={{ colors: { accent: colors.error } }}

            />
        </View>
        <View >
            <Avatar.Image size={140}  style={styles.avatar}  source={require("../assets/avatar.jpg") } />
        </View>
        <View>
            <FAB
                style={styles.fab2}
                small
                icon="account-edit"
                color = "#fff"
                extended ='false'
                onPress={() => navigation.navigate('setting')}
                theme={{ colors: { accent: Colors.primary } }}

            />
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
    fab: {
        position: 'absolute',
        margin: 16,
        left: 17,
        bottom: 240,
    },
    list: {
      flex: 1,
        position: 'absolute',
        margin: 16,
        left: 1,
        bottom:300

    },
    list2: {
        position: 'absolute',
        margin: 16,
        left: 1,
        bottom: 240,
    },
    list3: {
        position: 'absolute',
        margin: 16,
        left: 1,
        bottom: 180,
    },
    list4: {
        position: 'absolute',
        margin: 16,
        left: 1,
        bottom: 120,
    },
    list5: {
        position: 'absolute',
        margin: 16,
        left: 1,
        bottom: 60,
    },
    fab2: {
        position: 'absolute',
        margin: 16,
        left: 17,
        bottom: 70,

    },
    avatar: {
        position: 'absolute',
        margin: 16,
        right: -90,
        bottom: 70,

    },
});
