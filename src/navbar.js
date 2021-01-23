import React from "react";
import {View, Text, StyleSheet} from "react-native";

const Navbar = (props) => {
    return (
        <View style = {styles.navbar}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundColor: '#212121',
        paddingBottom: 10,
    },
    text: {
        color: "white",
        fontSize: 16
    }
});

export default Navbar;