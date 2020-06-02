import * as React from 'react';

import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { AuthConsumer } from './infra/AuthContext';

export default function SignInScreen({ navigation }) {

    const [userId, setUserId] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [endpoint] = React.useState('http://hospedeiro.local:1337/auth/local');

    return (
        <AuthConsumer>
            {({ login }) => (
                <View style={styles.container}>
                    <Text style={styles.logo}>Login</Text>
                    <View style={styles.inputView} >
                        <TextInput
                            style={styles.inputText}
                            placeholder="Email..."
                            placeholderTextColor="#003f5c"
                            onChangeText={text => setUserId({ email: text })} />
                    </View>
                    <View style={styles.inputView} >
                        <TextInput
                            secureTextEntry
                            style={styles.inputText}
                            placeholder="Password..."
                            placeholderTextColor="#003f5c"
                            onChangeText={text => setPassword({ password: text })} />
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.forgot}>Forgot Password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.loginBtn}
                        onPress={() => {
                            if (userId.email && userId.email.length > 0 && password.password || password.password.length > 0) {
                                return login({ userId: userId.email, password: password.password, endpoint: endpoint });
                            } else {
                                return false;
                            }
                        }}
                    >
                        <Text style={styles.loginText}>LOGIN</Text>
                    </TouchableOpacity>
                </View >

            )}
        </AuthConsumer>
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