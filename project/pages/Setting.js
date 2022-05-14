
import {StyleSheet, Modal, View , ScrollView , Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Avatar, List, Divider, Button , TextInput , HelperText} from 'react-native-paper';

import SwitchSelector from 'react-native-switch-selector';
import {getUsers , editUsers } from "../db/cities/Users";
import {auth} from "../db/config";

export default function Setting({navigation}) {
    const [text, setText] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const options = [
        { label: 'Male'},
        { label: 'Female' },
    ];

    const editusername = async () => {
      const array = await getUsers()
        const object = array.find(e => e.email === auth.currentUser.email)
        editUsers({
            ...object ,
            username : text ,
            address : address,
            phone : phone
        }).then(()=> setModalVisible(!modalVisible))
    }

    const initialInfo = async () => {
        const array = await getUsers()
        const object = array.find(e => e.email === auth.currentUser.email)
        console.log(object)
        setEmail(object.email);
        setText(object.username);
        setAddress(object.address)
    }
    useEffect(() => {
        initialInfo()
    }, []);


  return (
<ScrollView style={{ backgroundColor: "#fff" }}>
      <View >
        <Avatar.Image size={140}  style={styles.avatar}  source={require("../assets/avatar.jpg") } />
        <View style={[styles.list]}>
          <List.Item
              title="Name"
              description={text.split(' ').map((word) => word ).join(' ')}
              onPress={() => setModalVisible(!modalVisible)}
              left={props => <List.Icon {...props} icon="account" />}
              right={props => <List.Icon {...props} icon="arrow-right" />}
          />
          <Divider />
        </View>
          <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                  setModalVisible(!modalVisible);
              }}
          >
              <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                      <TextInput
                          style={styles.modalText}
                          mode ="flat"
                          label="Name"
                          placeholder="Enter your Name "
                          left={<TextInput.Icon name={'account'} />}
                          onChangeText={setText}
                      />
                      <TextInput
                          style={styles.modalText}
                          mode ="flat"
                          label="phone"
                          placeholder="Enter your Phone "
                          left={<TextInput.Icon name={'phone'} />}
                          onChangeText={setPhone}
                      />
                      <TextInput
                          style={styles.modalText}
                          mode ="flat"
                          label="Address"
                          placeholder="Enter your Address "
                          left={<TextInput.Icon name={'map-marker'} />}
                          onChangeText={setAddress}
                      />
                      <Button mode="contained"  onPress={() => editusername()} style={[styles.button, styles.buttonClose]}>
                          Submit
                      </Button>
                  </View>
              </View>
          </Modal>
        <View style={[styles.list2]}>
          <List.Item
              title="Email"
              description={email.split(' ').map((word) => word ).join(' ')}
              onPress={() => setModalVisible(!modalVisible)}
              left={props => <List.Icon {...props} icon="email" />}
              right={props => <List.Icon {...props} icon="arrow-right" />}
          />
          <Divider />
        </View>
          <View style={[styles.list3]}>
              <List.Item
                  title="Phone"
                  description={phone}
                  onPress={() => setModalVisible(!modalVisible)}
                  left={props => <List.Icon {...props} icon="phone" />}
                  right={props => <List.Icon {...props} icon="arrow-right" />}
              />
              <Divider />
          </View>
          <View style={[styles.list4]}>
              <List.Item
                  title="Address"
                  description={address}
                  onPress={() => setModalVisible(!modalVisible)}
                  left={props => <List.Icon {...props} icon="map-marker" />}
                  right={props => <List.Icon {...props} icon="arrow-right" />}
              />
              <Divider />
          </View>
          <View style={{ bottom: -70  , width : 300 , right: -10}}>
              <SwitchSelector
                  options={options}
                  initial={0}
                  fontSize={18}
                  textColor={"#0c0c0c"}
                  selectedColor={'#ffffff'}
                  buttonColor={'#642bef'}
                  backgroundColor={"#ffffff"}
                  borderColor={"#353535"}
              />
          </View>
          <View style={{ padding: 10 , bottom : -70 }}>
              <Button icon="check-outline" mode="contained"  onPress={() => navigation.navigate('Profile')}>
                  Submit
              </Button>
          </View>
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
  avatar: {
      flex: 1,
    position: 'absolute',
    margin: 16,
    right: 70,
  },
  list: {
    flex: 1,
    position: 'relative',
    margin: 16,
    left: 1,
     bottom:-150

  },
    list2: {
        flex: 1,
        position: 'relative',
        margin: 16,
        left: 1,
        bottom:-120

    },
    list3: {
        flex: 1,
        position: 'relative',
        margin: 16,
        left: 1,
        bottom:-100

    },
    list4: {
        flex: 1,
        position: 'relative',
        margin: 16,
        left: 1,
        bottom:-70

    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#642bef",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});
