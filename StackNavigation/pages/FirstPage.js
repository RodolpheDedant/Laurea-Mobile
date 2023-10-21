import * as React from 'react';
import { Button, View, Text, TextInput, SafeAreaView } from 'react-native';
import { useState } from 'react';

const FirstPage = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Ici, vous pouvez ajouter la logique de connexion
        if (username === 'user' && password === 'mdp') {
            // Connexion réussie, naviguez vers la page suivante
            navigation.navigate('SecondPage');
        } else {
            // Afficher un message d'erreur ou gérer l'authentification incorrecte
            alert('Identifiants incorrects. Veuillez réessayer.');
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
                        placeholder="Nom d'utilisateur"
                        value={username}
                        onChangeText={text => setUsername(text)}
                        style={{
                            fontSize: 18,
                            textAlign: 'center',
                            marginBottom: 16,
                        }}
                    />
                    <TextInput
                        placeholder="Mot de passe"
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
                        title="Se connecter"
                    />
                </View>
                <Text style={{
                    fontSize: 18,
                    textAlign: 'center',
                    color: 'grey'
                }}>
                    Navigate Between Screens using
                    {'\n'}
                    React Navigation
                </Text>
                <Text
                    style={{
                        fontSize: 16,
                        textAlign: 'center',
                        color: 'grey'
                    }}>
                    www.aboutreact.com
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default FirstPage;
