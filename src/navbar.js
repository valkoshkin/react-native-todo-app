import React, { useRef, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

const Navbar = (props) => {
  const { buttonsVisibleRef, onSubmit, inputValue, setInputValue } = props;

  const okPressHandler = () => {
    buttonsVisibleRef.current = false;
    onSubmit(inputValue);
    setInputValue("");
  };

  return (
    <View style={styles.navbar}>
      <Icon
        name="close"
        type="antdesign"
        color={buttonsVisibleRef.current ? "#fff" : "#000"}
        onPress={() => {
          buttonsVisibleRef.current = false;
          setInputValue("");
        }}
        disabled={!buttonsVisibleRef.current}
        disabledStyle={styles.disabledButton}
      />
      <Text style={styles.text}>TODO</Text>
      <Icon
        name="checkcircleo"
        type="antdesign"
        color={buttonsVisibleRef.current ? "#fff" : "#000"}
        onPress={okPressHandler}
        disabled={!buttonsVisibleRef.current}
        disabledStyle={styles.disabledButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 80,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    backgroundColor: "#000",
    paddingBottom: 10,
    paddingHorizontal: 20,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  disabledButton: {
    backgroundColor: "#000",
  },
});

export default Navbar;
