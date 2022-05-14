import {Image, StyleSheet, Text, View ,  Alert, Linking} from "react-native";
import React, { useCallback } from "react";
import { Button } from 'react-native-paper';
const supportedURL = "https://www.facebook.com/jonathan.ashraf.14";

const unsupportedURL = "http://localhost:19006/";

const OpenURLButton = ({ url, children }) => {
    const handlePress = useCallback(async () => {
        const supported = await Linking.canOpenURL(url);
        if (supported) {
            await Linking.openURL(url);
        } else {
            Alert.alert(`Don't know how to open this URL: ${url}`);
        }
    }, [url]);

    return <Button icon="facebook" mode="text" onPress= {handlePress}>
        facebook
    </Button>
    ;
};

export default function AboutUs() {
    return (
        <View style={styles.container}>
            <View>
                <Image
                    style={{
                        resizeMode: "contain",
                        height: 200,
                        width: 200
                    }}
                    source={require("../assets/2.png")}/>
            </View>

            <View style={styles.button}>
                <OpenURLButton url={supportedURL}>Open Supported URL</OpenURLButton>
            </View>

            <View style={styles.text}>
                <Text>The Version : 1.0</Text>
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
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        bottom : 50
    },
    text: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        bottom : 290

    },
});