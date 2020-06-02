import * as React from 'react';

import SignInScreen from './SignInScreen';
import HomeScreen from './HomeScreen';

import { StyleSheet, Image, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { AuthProvider, AuthConsumer } from './infra/AuthContext';

const Stack = createStackNavigator();

function LogoutTitle() {
  return (
    <AuthConsumer>
      {({ logout }) => (
        <Image
          style={{ width: 35, height: 35 }}
          source={require('./assets/icon.png')}
          onPress={() => logout()}
        />
      )}
    </AuthConsumer>
  );
}

export default function App({ navigation }) {

  return (
    <AuthProvider>
      <AuthConsumer>
        {({ isAuth, login, logout }) => (
          <>
            {isAuth ? (
              <NavigationContainer>
                <Stack.Navigator>
                  <Stack.Screen name="Home" component={HomeScreen}
                    options={{
                      headerStyle: {
                        backgroundColor: '#003f5c',
                      },
                      headerTintColor: 'white',
                      headerTitleStyle: {
                        fontWeight: 'bold',
                      },
                      headerTitle: props => <LogoutTitle {...props} />,
                      headerRight: () => (
                        <Button
                          onPress={() => logout()}
                          title="Logout"
                          style={styles.logout}
                        />
                      ),
                    }}
                  />
                </Stack.Navigator>
              </NavigationContainer>
            ) : (
                <SignInScreen />
              )}
          </>
        )}
      </AuthConsumer>
    </AuthProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fb5b5a",
    marginBottom: 40
  },
  inputView: {
    width: "80%",
    backgroundColor: "#465881",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },
  inputText: {
    height: 50,
    color: "white"
  },
  forgot: {
    color: "white",
    fontSize: 11
  },
  logout: {
    color: "white",
    fontSize: 11
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10
  },
  loginText: {
    color: "white"
  }
});