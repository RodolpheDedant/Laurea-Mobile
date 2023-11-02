import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { firebaseAuth } from '../../../firebase';
import CustomButtons from '../../components/CustomButtons';



const HomeScreen = () => {

    const signOut = () => {
        firebaseAuth.signOut()
    }
    return (
        <View>
            < CustomButtons
                text={"Sign out"}
                onPressed={signOut}
                type={"PRIMARY"}
            />
        </View>
    );
}

export default HomeScreen;