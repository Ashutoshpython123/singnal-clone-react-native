import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'


const CustomListItem = ({id, chatName, enterChat}) => {
    return (
        <ListItem onPress={() => enterChat(id, chatName)} key={id} bottomDivider>
            <Avatar
                rounded
                source={{
                    uri: "https://res.cloudinary.com/http-codingcampus-pythonanywhere-com/image/upload/v1615399961/test/lwmgl7wiob0ptb8wrfq5.png"
                }}
            />
            <ListItem.Content>
                <ListItem.Title>
                    {chatName}
                </ListItem.Title>
                <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
                    this is Subtitle
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    )
}

export default CustomListItem;

const styles = StyleSheet.create({
    container : {
        height : "100%"
    }
})
