import * as React from 'react';
import { Button, View, Text, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Appbar } from 'react-native-paper';

const HomePage = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Appbar.Header>
                <Appbar.Content title="ThirdPage" />
            </Appbar.Header>
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
                        Bienvenue sur la page d'accueil
                    </Text>
                    <Button
                        onPress={() => navigation.navigate('SecondPage')}
                        title="Go to register page"
                    />
                </View>
                <Text style={{
                    fontSize: 18,
                    textAlign: 'center',
                    color: 'grey',
                }}>
                    I just write something
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

export default HomePage;
