import React, {useState} from 'react';
import {StatusBar, SafeAreaView, Text, TextInput, Button} from 'react-native';
import { SERVER_URL} from 'react-native-dotenv';
import { showAlert } from '../helpers';

export default function Profile({navigation}) {
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handlePress = () => {
        let payload = {username, email, password, name};
        fetch(SERVER_URL+"/register", {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        }).then(res => res.json()).then( res => {
            if(res.error) showAlert("Error", res.error);
            else navigation.navigate("Login");
        })
    }

    return (
        <>
            <StatusBar barStyle='dark-content' />
            <SafeAreaView style={{flex : 1, backgroundColor: "#00FF00"}}>
                <Text style={{textAlign: "center"}}>Register</Text>
                <Text style={{textAlign: "left"}}>Email</Text>
                <TextInput style={{borderWidth: 2}} onChangeText={text => setEmail(text)} value={email} />
                <Text style={{textAlign: "left"}}>Username</Text>
                <TextInput style={{borderWidth: 2}} onChangeText={text => setUsername(text)} value={username} />
                <Text style={{textAlign: "left"}}>Name</Text>
                <TextInput style={{borderWidth: 2}} onChangeText={text => setName(text)} value={name} />
                <Text style={{textAlign: "left"}}>Password</Text>
                <TextInput style={{borderWidth: 2}} onChangeText={text => setPassword(text)} secureTextEntry={true} value={password} />
                <Button title="Submit" onPress={() => handlePress()} />
            </SafeAreaView>
        </>
    );
}