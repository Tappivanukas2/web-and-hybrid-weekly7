import React, { useReducer, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import todoReducer from './TodoReducer';

const App = () => {
  const [text, setText] = useState('');
  const [state, dispatch] = useReducer(todoReducer, []);

  const addTodo = () => {
    if (text.trim()) {
      dispatch({ type: 'ADD_TODO', payload: text });
      setText('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add new..."
        value={text}
        onChangeText={setText}
      />
      <Button title="Save" onPress={addTodo} />
      <FlatList
        data={state}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => dispatch({ type: 'REMOVE_TODO', payload: item.id })}>
            <Text style={styles.item}>{item.text}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50,
    color: 'white'
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    color: 'black'
  },
  item: {
    fontSize: 18,
    padding: 10,
    borderBottomWidth: 1,
    colored: 'black'
  }
});

export default App;
