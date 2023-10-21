import * as React from 'react';
import { Button, View, Text, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomePage = () => {
    const navigation = useNavigation();

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
                        Welcome to the Home Page
                    </Text>
                    <Button
                        onPress={() => navigation.navigate('SecondPage')}
                        title="Go to Second Page"
                    />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Button
                        onPress={() => navigation.navigate('FirstPage')}
                        title="Go to First Page"
                    />
                    <Button
                        onPress={() => navigation.navigate('SecondPage')}
                        title="Go to Second Page"
                    />
                </View>
                <Text
                    style={{
                        fontSize: 18,
                        textAlign: 'center',
                        color: 'grey',
                    }}>
                    Navigate Between Screens using{'\n'}Custom Navigation
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
};

export default HomePage;
