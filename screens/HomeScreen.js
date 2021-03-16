import React, { useLayoutEffect, useState, useEffect } from 'react'
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Avatar } from 'react-native-elements'
import { auth, db } from '../firebase'
import { AntDesign, SimpleLineIcons} from '@expo/vector-icons'
import CustomListItem from '../components/CustomListItem'

const HomeScreen = ({ navigation }) => {
    const [chat, setChat] = useState([])

    useEffect(() => {
        const unsubscribe = db.collection('chat').onSnapshot(snapshot => (
            setChat(snapshot.docs.map(doc => ({
                id : doc.id,
                data : doc.data()
            })))
        ));
        return unsubscribe;
    }, [])

    const signOutUser = () => {
        auth.signOut().then(() => {
            navigation.replace("login")
        })
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "chat...",
            headerStyle: { backgroundColor: "#fff" },
            headerTitleStyle: { color: "blue" },
            headerTintColor: "black",
            headerLeft: () => (
                <View>
                    <TouchableOpacity onPress={signOutUser} activeOpacity={0.5}>
                        <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} />
                    </TouchableOpacity>
                </View>
            ),
            headerRight : () => (
                <View style={{flexDirection : "row", justifyContent : "space-between", width : 80, marginRight : 20}}>
                    <TouchableOpacity activeOpacity={0.5}>
                        <AntDesign name="camerao" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('AddChat')}>
                        <SimpleLineIcons name="pencil" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            )
        })
    }, [navigation])


    const enterChat = (id, chatName) => {
        navigation.navigate("Chat", {
            id,
            chatName
        })
    }
    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                {
                    chat.map(({id, data : {chatName} }) => (
                        <CustomListItem 
                        key={id} 
                        id={id} 
                        chatName={chatName}
                        enterChat = {enterChat} 
                        />
                    ))
                }
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container : {
        height : "100%"
    }
});


