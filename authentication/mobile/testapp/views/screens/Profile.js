import React, {useContext, useEffect, useState} from 'react';
import {StatusBar, SafeAreaView, Text, Button} from 'react-native';
import AuthContext from '../context/AuthContext';
import { SERVER_URL} from 'react-native-dotenv';

export default function Profile({navigation}) {
    const { signOut, user, authToken} = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const [reverse, setReverse] = useState("");

    useEffect(() => {
        let subscribed = true;
        let getReverse = async () => {
            let payload = {token: authToken};
            let url = new URL(SERVER_URL + "/backwards");
            Object.keys(payload).forEach(key => url.searchParams.append(key, payload[key]));
            await fetch(url)
            .then((res) => res.json())
            .then((data) => {
                if(subscribed) {
                    if(data.message === undefined) {
                        setReverse(data.backwards);
                        setLoading(false);
                    }
                }
            })
        }
        getReverse();
        return () => {subscribed = false;}
    },[])
    if(user === null) {
        return null;
    }
    else {
        return (
            <>
                <StatusBar barStyle='dark-content' />
                <SafeAreaView style={{flex : 1, backgroundColor : "#00FF00"}}>
                    <Text>Name: {user.name}</Text>
                    {
                        loading ? <Text>loading</Text> : <Text>Reverse Name: {reverse}</Text>
                    }
                    <Button title="Log out" onPress={() => signOut()} />
                </SafeAreaView>
            </>
        );
    }
}

