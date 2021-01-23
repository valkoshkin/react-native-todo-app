import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {Icon} from 'react-native-elements'

const Navbar = (props) => {
    const {title, addButtonVisible} = props;

    return (
        <View style={styles.navbar}>
            <Icon
                name="close"
                type="antdesign"
                color={
                    addButtonVisible ? "#fff" : "#212121"
                }
                onPress={() => {
                    console.log('Delete Todo');
                }}
                disabled={
                    !addButtonVisible
                }
                disabledStyle={styles.disabledButton}
            />
            <Text style={styles.text}>
                {title}
            </Text>
            <Icon
                name="check"
                type="antdesign"
                color={
                    addButtonVisible ? "#fff" : "#212121"
                }
                onPress={() => {
                    console.log('Add Todo');
                }}
                disabled={
                    !addButtonVisible
                }
                disabledStyle={styles.disabledButton}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    navbar: {
        height: 80,
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",
        backgroundColor: '#212121',
        paddingBottom: 10,
        paddingHorizontal: 20
    },
    text: {
        color: "white",
        fontSize: 18
    },
    disabledButton: {
        backgroundColor: "#212121"
    }
});

export default Navbar;