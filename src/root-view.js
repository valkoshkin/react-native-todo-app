import React, { useRef, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Navbar from "./navbar";
import AddTodo from "./add-todo";
import Todo from "./todo";

const RootView = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const buttonsVisibleRef = useRef(false);

  const addTodo = (title) => {
    setTodos((prevTodos) => [
      {
        id: Date.now().toString(),
        title,
      },
      ...prevTodos,
    ]);
  };

  return (
    <View>
      <StatusBar style="light" backgroundColor={"#000000"} />
      <Navbar
        buttonsVisibleRef={buttonsVisibleRef}
        onSubmit={addTodo}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <ScrollView style={styles.container}>
        <AddTodo
          buttonsVisibleRef={buttonsVisibleRef}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
        <View>
          {todos.map((todo) => {
            return <Todo todo={todo} key={todo.id} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#f5f5f5",
  },
});

export default RootView;
