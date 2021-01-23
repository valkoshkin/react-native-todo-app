import React from "react";
import {View, Text, StyleSheet} from "react-native";

const Todo = (props) => {
    const {todo} = props;

    return(
        <View style={styles.todo}>
            <Text>{todo.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        backgroundColor: "#fff",
        marginBottom: 1
    }
})

export default Todo