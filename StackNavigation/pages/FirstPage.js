import * as React from 'react';
import { Button, View, Text, TextInput, SafeAreaView } from 'react-native';
import { useState } from 'react';

const FirstPage = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Ici, vous pouvez ajouter la logique de connexion
        if (username === 'user' && password === 'mdp') {
            // Connexion réussie, naviguez vers la page d'accueil (ThirdPage)
            navigation.navigate('ThirdPage');
        } else {
            // Afficher un message d'erreur ou gérer l'authentification incorrecte
            alert('The username is "user" and the password is "mdp"');
        }
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, padding: 16 }}>
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <Text
                        style={{
                            fontSize: 25,
                            textAlign: 'center',
                            marginBottom: 16,
                        }}>
                        Connexion
                    </Text>
                    <TextInput
                        placeholder="Username"
                        value={username}
                        onChangeText={text => setUsername(text)}
                        style={{
                            fontSize: 18,
                            textAlign: 'center',
                            marginBottom: 16,
                        }}
                    />
                    <TextInput
                        placeholder="Password"
                        value={password}
                        onChangeText={text => setPassword(text)}
                        secureTextEntry={true}
                        style={{
                            fontSize: 18,
                            textAlign: 'center',
                            marginBottom: 16,
                        }}
                    />
                    <Button
                        onPress={handleLogin}
                        title="Connexion"
                    />
                    <Button
                        onPress={() => navigation.navigate('SecondPage')}
                        title="Register"
                    />
                </View>
                <Text style={{
                    fontSize: 18,
                    textAlign: 'center',
                    color: 'grey',
                }}>
                    Navigate Between Screens using{'\n'}React Navigation
                </Text>
                <Text
                    style={{
                        fontSize: 16,
                        textAlign: 'center',
                        color: 'grey',
                    }}>
                    www.aboutreact.com
                </Text>
            </View>
        </SafeAreaView>
    );
}

export default FirstPage;
