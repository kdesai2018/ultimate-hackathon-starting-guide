import React from 'react';
import {StatusBar, SafeAreaView, Text} from 'react-native';

export default function Loading() {
    return (
        <>
        <StatusBar barStyle='dark-content' />
        <SafeAreaView style={{flex : 1, backgroundColor: "#00FF00", alignItems: 'center', justifyContent: "center"}}>
            <Text>loading lol</Text>
        </SafeAreaView>
    </>
    );
}