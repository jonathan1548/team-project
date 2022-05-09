
import { StatusBar } from 'expo-status-bar';
import {ScrollView, StyleSheet, TextInput, Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import Product from './Product';
import {  Button } from 'react-native-paper';
import {login, logOut} from '../db/auth/auth';
export default function Products() {
    const data = [
        { text: "http://www.goodmorningimagesdownload.com/wp-content/uploads/2019/12/Love-Images-1.jpg" },
        { text: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80" },
        { text: "https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q=" },
        { text: "https://images.ctfassets.net/hrltx12pl8hq/1kSlS6H6YMm30e0Mkr86Hc/930fef722ebc9fb51f80d8bb0e372596/IHP_3_24.png?fit=fill&w=1200&h=630" },
        { text: "https://image.shutterstock.com/image-photo/sunset-coast-lake-nature-landscape-260nw-1960131820.jpg" },
        { text: "https://i.pinimg.com/236x/7b/e2/db/7be2dbac345f7c212f295b4464ef91af.jpg" },

    ]
    const data2 = [
        { text: "http://www.goodmorningimagesdownload.com/wp-content/uploads/2019/12/Love-Images-1.jpg" },
        { text: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80" },
        { text: "https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q=" },
        { text: "https://images.ctfassets.net/hrltx12pl8hq/1kSlS6H6YMm30e0Mkr86Hc/930fef722ebc9fb51f80d8bb0e372596/IHP_3_24.png?fit=fill&w=1200&h=630" },
        { text: "https://image.shutterstock.com/image-photo/sunset-coast-lake-nature-landscape-260nw-1960131820.jpg" },
        { text: "https://i.pinimg.com/236x/7b/e2/db/7be2dbac345f7c212f295b4464ef91af.jpg" },

    ]
    return (

        <ScrollView>
            <View>

                <Text style={[styles.textWithShadow, styles.card, styles.shadowProp]}>fffffff</Text>
                <ScrollView  >

                    {data.map((e, index) => (<Product text={e.text} key={index} />))}
                </ScrollView>
            </View>
            <View>
                <Text style={[styles.textWithShadow, styles.card, styles.shadowProp]}>ddddd</Text>

                <ScrollView  >
                    {data2.map((e, index) => (<Product text={e.text} key={index} />))}
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

    textWithShadow: {
        fontSize: 28,
        fontWeight: 500,

        color: '#000',

        textAlign: 'left'
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
        //shadowOpacity: 0.2,
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
});
