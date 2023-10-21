import * as React from 'react';
import { Button, View, Text, TextInput, SafeAreaView } from 'react-native';
import { useState } from 'react';

const SecondPage = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleRegistration = () => {
        // Ici, vous pouvez ajouter la logique d'inscription
        if (username && password && email) {
            // Enregistrement réussi, naviguez vers la page d'accueil (ThirdPage)
            navigation.navigate('ThirdPage');
        } else {
            // Afficher un message d'erreur si des champs sont manquants
            alert('You have to fill all fields');
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
                        Inscription
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
                    <TextInput
                        placeholder="mail"
                        value={email}
                        onChangeText={text => setEmail(text)}
                        keyboardType="email-address"
                        style={{
                            fontSize: 18,
                            textAlign: 'center',
                            marginBottom: 16,
                        }}
                    />
                    <Button
                        onPress={handleRegistration}
                        title="Register"
                    />
                </View>
                <Text style={{
                    fontSize: 18,
                    textAlign: 'center',
                    color: 'grey',
                }}>
                    Register to the app.
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

export default SecondPage;
