/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { useEffect, useReducer, useMemo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './views/context/AuthContext';

import storage from './views/storage/Storage';

import { createStackNavigator } from '@react-navigation/stack';
import { SERVER_URL } from 'react-native-dotenv'

import Login from './views/screens/Login';
import Profile from './views/screens/Profile'

const Stack = createStackNavigator();


function reducer(prevState, action) {
  switch(action.type) {
    case "RESTORE_TOKEN":
      return {...prevState, isLoading: false, authToken: action.authToken, user: action.user};
    case "LOG_IN":
      return {...prevState, isSignOut: false, authToken: action.authToken, user: action.user};
    case "LOG_OUT":
      return {...prevState, isSignOut: true, authToken: null, user: null};
    default:
      throw Error();
  }
}

async function storeCurrUser(payload) {
  try {
    await storage.set('@curr_user', JSON.stringify(payload));
  }
  catch(e) {
    console.log(e)
  }
} 

export default function App() {
  const initalState = {isLoading : true, isSignOut: false, authToken: null, user: null};
  const [state, dispatch] = useReducer(reducer, initalState);
  // handle authentication
  useEffect(() => {
    let loadToken = async () => {
      try {
        const raw = await storage.get('@curr_user');
        if(raw) {
          const currUser = JSON.parse(raw);
          dispatch({type : "RESTORE_TOKEN", authToken : currUser.authToken, user : currUser.user})
        }
        else {
          dispatch({type : "RESTORE_TOKEN", authToken : null, user : null})
        }
      }
      catch(e) {
        console.log(e)
      }
    }
    loadToken();
  }, []);

  const authContext = useMemo(() => ({
    signIn: async (payload) => {
      let authToken = null;
      let user = null;
      // Calls login request
      await fetch(SERVER_URL + "/login", {
          method: 'POST',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
          },
          body : JSON.stringify(payload)

      }).then((data) => data.json())
      .then((data) => {
          console.log(data);
          // Stores auth-token if successful
          if(data.message === undefined) {
            user = data.user;
            authToken = data.token;
            storeCurrUser({user, authToken});
            dispatch({type : "LOG_IN", authToken, user});
          }
      }).catch((err) => console.log(err));
    },
    signOut: async () => {
      // Destroy locally-stored token
      try {
        await storage.remove('@curr_user');
      }
      catch(e) {
        console.log(e);
      }
      dispatch({type : "LOG_OUT"});
    },
    ...state
  }),[state]);

  return (
      <NavigationContainer>
        <AuthProvider value={authContext}>
          <Stack.Navigator>
              {state.authToken !== null ? 
              <>
                <Stack.Screen name="My Profile" component={Profile} />
              </>  
              : 
              <Stack.Screen name="Login" component={Login} />}
          </Stack.Navigator>
        </AuthProvider>
      </NavigationContainer>
  );
}

