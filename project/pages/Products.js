import React, {useEffect, useState} from "react";
import {StyleSheet, Text, View,TouchableOpacity, FlatList} from 'react-native';
import { Card , Button} from 'react-native-paper';
import { IconButton} from 'react-native-paper';
import Product from "./Product";
import {getCities, subscribe} from "../db/cities/Cities";
import {editUsers, getUsers , subscribeUsers} from "../db/cities/Users";
import {auth} from "../db/config";
export default function Products({navigation}) {
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

    const getUsersList = async () => {
        const c = await getUsers();
        setUsers(c);
        const user = c.find(e => e.email === auth.currentUser.email)
        setCount(user.cart.length)
    };
    useEffect(() => {
        getUsersList();
    }, []);

    useEffect(() => {
        const unsubscribe = subscribeUsers(({ change, snapshot }) => {
            if (change.type === "added") {
                getUsersList();
            }
            if (change.type === "modified") {
                getUsersList();
            }
            if (change.type === "removed") {
                getUsersList();
            }
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const [users , setUsers] = useState([]);
    const [cities, setCities] = useState([]);
    const data = cities.filter((e)=>(e.type=="appetizers"));
    data.map((e,index)=>(<Product item={e} key={index} />))

    const data2 = cities.filter((e)=>(e.type=="Eastern"));
    {data2.map((e,index)=>(<Product item={e} key={index} />))}

    const data3 = cities.filter((e)=>(e.type=="SugarFreeSweets"));
    {data3.map((e,index)=>(<Product item={e} key={index} />))}

    const data4 = cities.filter((e)=>(e.type=="HamperBox"));
    {data4.map((e,index)=>(<Product item={e} key={index} />))}
    
    const [count, setCount] = useState(0);

    const addtocart = async (id)  => {
        const array = await getUsers()
        const user = array.find(e => e.email === auth.currentUser.email)
        const UserCart = user.cart
        editUsers({
            ...user,
            cart:[...UserCart , id],
        })
    }
    return (
        <View style={{ backgroundColor: '#d3d3d3' }}>
            <View>
                    <IconButton style={[styles.iconView]}
                        icon="cart-outline"
                        size={20}
                        onPress={() => {count === 0 ? navigation.navigate('empty cart'): navigation.navigate('payment')}}
                    />
                    <View style={[styles.iconCountView]}>
                        <Text style={styles.iconCountText}>{count}</Text>
                    </View>
                <Text style={[styles.textWithShadow, styles.card, styles.shadowProp]}>Sweet Group</Text>
                <View style={{ display: 'flex', flex: 1, marginTop: 24 }} >
                        <FlatList
                            data={data}
                            numColumns={2}
                            renderItem={ (itemData ) => (
                                <TouchableOpacity style={{ flex: 1 }}>
                                    <Card
                                        style={{
                                            margin: 5,
                                            padding: 10,
                                        }}
                                        onPress={() => addtocart(itemData.item.id)}>

                                        <Card.Cover source={{ uri: itemData.item.image }}
                                        />
                                        <Card.Actions>
                                            <Button icon="cart-outline" onPress={() => {count === 0 ? navigation.navigate('empty cart'): navigation.navigate('payment')}}>Cart</Button>
                                        </Card.Actions>
                                    </Card>
                                </TouchableOpacity>
                            ) }
                        />
                </View>
            </View>
            <View>
                <Text style={[styles.textWithShadow, styles.card, styles.shadowProp]}>Eastern sweets</Text>
                <View style={{ display: 'flex', flex: 1, marginTop: 24 }} >
                    <FlatList
                        data={data2}
                        numColumns={2}
                        renderItem={ (itemData2 ) => (
                            <TouchableOpacity style={{ flex: 1 }}>
                                <Card
                                    style={{
                                        margin: 5,
                                        padding: 10,
                                    }}
                                    onPress={() => {setCount(count + 1)}}>
                                    <Card.Cover source={{ uri: itemData2.item.image }}
                                                style={{  }}
                                    />
                                    <Card.Actions>
                                        <Button icon="cart-outline" onPress={() => {count === 0 ? navigation.navigate('EmptyCart'): navigation.navigate('payment')}}>Cart</Button>
                                    </Card.Actions>
                                </Card>
                            </TouchableOpacity>
                        ) }
                    />
                </View>
            </View>
            <View>
                <Text style={[styles.textWithShadow, styles.card, styles.shadowProp]}>Sugar Free Sweets</Text>
                <View style={{ display: 'flex', flex: 1, marginTop: 24 }} >
                    <FlatList
                        data={data3}
                        numColumns={2}
                        renderItem={ (itemData3 ) => (
                            <TouchableOpacity style={{ flex: 1 }}>
                                <Card
                                    style={{
                                        margin: 5,
                                        padding: 10,
                                    }}
                                    onPress={() => {setCount(count + 1)}}>
                                    <Card.Cover source={{ uri: itemData3.item.image }}
                                    />
                                    <Card.Actions>
                                        <Button icon="cart-outline" onPress={() => {count === 0 ? navigation.navigate('EmptyCart'): navigation.navigate('payment')}}>Cart</Button>
                                    </Card.Actions>
                                </Card>
                            </TouchableOpacity>
                        ) }
                    />
                </View>
            </View>
            <View>
                <Text style={[styles.textWithShadow, styles.card, styles.shadowProp]}>Hamper Boxs</Text>
                <View style={{ display: 'flex', flex: 1, marginTop: 24 }} >
                    <FlatList
                        data={data4}
                        numColumns={2}
                        renderItem={ (itemData4 ) => (
                            <TouchableOpacity style={{ flex: 1 }}>
                                <Card
                                    style={{
                                        margin: 5,
                                        padding: 10,
                                    }}
                                    onPress={() => {setCount(count + 1)}}>
                                    <Card.Cover source={{ uri: itemData4.item.image }}
                                    />
                                    <Card.Actions>
                                        <Button icon="cart-outline" onPress={() => {count === 0 ? navigation.navigate('EmptyCart'): navigation.navigate('payment')}}>Cart</Button>
                                    </Card.Actions>
                                </Card>
                            </TouchableOpacity>
                        ) }
                    />
                </View>
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
    },

    textWithShadow: {
        fontSize: 28,
        fontWeight: 500,
        // color: '#000',
        textAlign: 'left'
    },
    listItem: {
        margin: 10,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        paddingHorizontal: 10,
        marginVertical: 1,
        marginHorizontal: 1,
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        margin: 1,
    },
    FloatingActionButtonStyle: {
        position: 'absolute',
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        left: 95,
        bottom: 220,
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
    iconCountView: {
        position: 'absolute',
        zIndex: 2,
        right: 4,
        top: 5,
        paddingHorizontal: 4,
        borderRadius: 10,
        backgroundColor: 'red',
    },
    iconView: {
        position: 'absolute',
        zIndex: 2,
        right: 4,
        top: 2,
        paddingHorizontal: 4,
        borderRadius: 10,
        backgroundColor: '#fff',
    },
    iconCountText: {
        color: '#fff',
        fontWeight: 'bold',
        fontFamily: 'SSBold'
    },
});
