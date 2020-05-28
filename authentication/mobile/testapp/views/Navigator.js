import Login from './screens/Login';
import Profile from './screens/Profile';
import Loading from './screens/Loading';

import AuthContext from './context/AuthContext';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useContext } from 'react';

const Tab = createBottomTabNavigator();

export default function Navigator({navigation}) {
    const {authToken, isLoading} = useContext(AuthContext);

    if(isLoading) {
        return <Loading />;
    }
    return (
        <Tab.Navigator>
            {authToken != null ?
                <>
                <Tab.Screen name="My Profile" component={Profile} />
                </>
                : <Tab.Screen name="Login" component={Login} />
            }
        </Tab.Navigator>
    )

}