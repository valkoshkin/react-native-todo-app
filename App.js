import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Navbar from "./src/navbar";
import AddTodo from "./src/add-todo";

const App = () => {
    return (
        <View>
            <StatusBar style="light" backgroundColor={"#000000"} />
            <Navbar title="Todo App" />
            <View style={styles.container}>
                <AddTodo />
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

export default App;
