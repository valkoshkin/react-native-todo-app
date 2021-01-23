import React, {useState} from "react";
import {StyleSheet, Text, View} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Navbar from "./navbar";
import AddTodo from "./add-todo";

const RootView = () => {
    const [addButtonVisible, setAddButtonVisible] = useState(false);

    return (
        <View>
            <StatusBar
                style="light"
                backgroundColor={"#000000"}
            />
            <Navbar
                title="TODO"
                addButtonVisible={addButtonVisible}
            />
            <View
                style={styles.container}
            >
                <AddTodo
                    setAddButtonVisible={setAddButtonVisible}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "#f5f5f5"
    }
});

export default RootView;