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
                title="Todo App"
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
        paddingHorizontal: 10,
        paddingVertical: 10
    }
});

export default RootView;