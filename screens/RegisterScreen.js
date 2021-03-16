import React, { useState, useLayoutEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button, Input, Text } from 'react-native-elements';
import { auth } from '../firebase'

const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmaiil] = useState("");
    const [password, setPassword] = useState("");
    const [imagesURL, setImageUrl] = useState("");


    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'Login'
        })
    }, [navigation]);

    const register = () => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((authUser) => {
                authUser.user.update({
                    displayName : name,
                    photoURL : imagesURL || "https://res.cloudinary.com/http-codingcampus-pythonanywhere-com/image/upload/v1615399915/test/pe8bdj6vrh3tnqbph9jo.jpg"
                })
            })
            .catch((error) => alert(error.message));
    };

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light" />
            <Text h3 style={{ marginBottom: 50 }}>
                create a signal account
            </Text>
            <View style={styles.inputContainer}>
                <Input
                    placeholder="full name"
                    autofocus
                    type="text"
                    value={name}
                    onChangeText={text => setName(text)}
                />
                <Input
                    placeholder="Email"
                    autofocus
                    type="email"
                    value={email}
                    onChangeText={text => setEmaiil(text)}
                />
                <Input
                    placeholder="Password"
                    autofocus
                    type="password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                />
                <Input
                    placeholder="Profile Picture"
                    autofocus
                    type="text"
                    value={imagesURL}
                    onChangeText={text => setImageUrl(text)}
                    onSubmitEditing={register}
                />

            </View>
            <Button
                containerStyle={styles.button}
                raised
                onPress={register}
                title="Register"
            />
            <View styrl={{ height: 100 }} />
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: 'white'


    },
    button: {
        width: 200,
        marginTop: 10
    },

    inputContainer: {
        width: 300,
    }
});
