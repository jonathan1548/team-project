import {
    StyleSheet ,Image, View, Text, ScrollView,
    TextInput, Button,TouchableOpacity,Alert,
} from 'react-native';
import {useState, useEffect} from 'react';
export default function Login({navigation}) {
    const [username, setusername] = useState('');
    const [password, setPassword] = useState('');
    const [flag, setflag] = useState(false);
    const setUsername =(val) =>{
        setusername(val)
    }
    const setpassword =(val) =>{
        setPassword(val)
    }
    let users =[
        {
            user : 'john',
            pass : '1234'
        }
    ]
    const check =() =>{
        for(let i =0 ; i < users.length ;i++){
            if (users[0].user===username && users[0].pass===password){
                setflag(true)
                return navigation.navigate('signUp')
            }
            else Alert.alert(
                "Sign In Error",
                "UserName or Password is wrong",
                [
                    {
                        text: "Cancel",
                        style: "cancel",
                    },
                ],
                {
                    cancelable: true,
                }
            )
        }
        setflag(false)
    }

    return (
        <ScrollView style={{padding: 30}}>

            <View style={[styles.container]}>
                <View>
                    <Image
                        style={{
                            resizeMode: "contain",
                            height: 200,
                            width: 300
                        }}
                        source={require("../assets/2.png")}/>
                </View>
                <View style={[styles.TextInput]}>
                    <TextInput
                        onChangeText={setUsername}
                        value = {username}
                        placeholder="enter username"
                    />
                </View>
                <View style={[styles.TextInput]}>
                    <TextInput
                        onChangeText={setpassword }
                        value ={password}
                        placeholder="enter password"
                    />
                </View>
                <View style={[styles.container]}>
                    <Button title={"login"} onPress={check }></Button>
                </View>
                <View>
                    <Text style={{fontSize:17}}>{'Doesn\'t have an account? '}</Text>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('signUp')}>
                        <Text style={{fontSize:17,color:'#E65100'}}>{'SignUp'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        flexDirection : 'column',
        justifyContent: 'center',
        padding : 50 ,
        margin: 12,
    },
    TextInput: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});
