import React, {useState} from "react";
import {View, StyleSheet, TextInput} from "react-native";

const AddTodo = (props) => {
    const {setAddButtonVisible} = props;

    return (
        <View style={styles.block}>
            <TextInput
                style={styles.input}
                multiline={true}
                placeholder={"Input Todo here..."}
                onChangeText={(text) => {
                    setAddButtonVisible(
                        text !== ''
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    block: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
        backgroundColor: "white",
        paddingTop: 15,
        paddingBottom: 20,
        paddingHorizontal: 15,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25
    },
    input: {
        fontSize: 18,
        width: "100%"
    }
});

export default AddTodo;