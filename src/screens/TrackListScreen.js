import React, {useContext} from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import {NavigationEvents} from 'react-navigation';
import {Context as TrackContext} from '../context/TrackContext';
import { ListItem } from "react-native-elements";
const TrackListScreen = ({navigation}) => {

    const {state, fetchTracks} =useContext(TrackContext);

    return (
        <>
            <NavigationEvents onWillFocus={() => fetchTracks()} />
            <Text style={{ fontSize: 48 }}>TrackListScreen</Text>
            <FlatList
                data={state}
                keyExtractor={(item) => {item._id}}
                renderItem={({ item }) => {
                return (
                    <TouchableOpacity>
                    <ListItem>
                        <ListItem.Content>
                        <ListItem.Title>{item.name}</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                    </TouchableOpacity>
                );
                }}
            />
        </>
    );
};

const styles =  StyleSheet.create({

});

export default TrackListScreen;